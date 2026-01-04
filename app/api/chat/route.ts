import { NextRequest, NextResponse } from 'next/server'
import { chatbotEngine } from '@/lib/chatbot-engine'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
    try {
        let body: Record<string, unknown> | null = null
        try {
            body = await req.json()
        } catch {
            return NextResponse.json(
                { error: 'invalid_json' },
                { status: 400 }
            )
        }

        const message = body?.message

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            )
        }

        // Use intelligent chatbot engine (no API key required!)
        const response = chatbotEngine.chat(message)

        return NextResponse.json({
            response: response.message,
            suggestions: response.suggestions || [],
            timestamp: new Date().toISOString()
        })

    } catch (error) {
        console.error('Chat error:', error)

        return NextResponse.json(
            {
                response: "I apologize, but I'm having trouble processing your request. Please try again or contact us directly:\n\n📞 +91 7276784825\n💬 WhatsApp: +917276784825",
                suggestions: ['Contact Us', 'Try Again']
            },
            { status: 500 }
        )
    }
}

// Optional: Reset conversation endpoint
export async function DELETE() {
    chatbotEngine.reset()
    return NextResponse.json({ message: 'Conversation reset successfully' })
}
