import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { logger } from '@/lib/logger';
import { BUSINESS_INFO } from '@/lib/constants';
import { services } from '@/lib/data/services';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const PARLOUR_CONTEXT = `
You are an AI assistant for Kashish Beauty Parlour And Training Center located in Pune, India.
Business Info: ${JSON.stringify(BUSINESS_INFO)}
Available Services: ${JSON.stringify(services.map(s => ({ name: s.name, price: s.price, category: s.category })))}

Your goal is to help customers with their queries about services, prices, and booking. 
Be polite, professional, and helpful. Always encourage users to book an appointment if they are interested.
Keep responses concise and easy to read.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({
                role: 'model',
                content: "I'm currently in demo mode. Please configure the GEMINI_API_KEY to enable my full intelligence!"
            });
        }

        const chat = model.startChat({
            history: [
                { role: 'user', parts: [{ text: PARLOUR_CONTEXT }] },
                { role: 'model', parts: [{ text: 'Understood. I am now ready to assist kashish beauty parlour and training center customers.' }] },
                ...messages.slice(0, -1).map((m: { role: string; content: string }) => ({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.content }],
                })),
            ],
        });

        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ role: 'model', content: text });
    } catch (error) {
        logger.error('Chat API Error:', error);
        return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 });
    }
}
