'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLanguageChange = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath || `/${newLocale}`);
    };

    const languages = [
        { code: 'en', name: 'EN' },
        { code: 'hi', name: 'हिं' },
        { code: 'mr', name: 'म' },
    ];

    // Don't render until mounted to avoid hydration issues
    if (!mounted) {
        return (
            <div className="flex items-center gap-1 bg-gray-100/50 backdrop-blur-sm rounded-full p-1 border border-gray-100 opacity-50">
                <div className="p-1 px-2 text-primary">
                    <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="px-2.5 py-1 text-[10px] font-black rounded-full bg-primary text-black shadow-sm">
                    EN
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1 bg-gray-100/50 backdrop-blur-sm rounded-full p-1 border border-gray-100">
            <div className="p-1 px-2 text-primary">
                <Globe className="w-3.5 h-3.5" />
            </div>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-2.5 py-1 text-[10px] font-black rounded-full transition-all ${locale === lang.code
                        ? 'bg-primary text-black shadow-sm'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                        }`}
                >
                    {lang.name}
                </button>
            ))}
        </div>
    );
}
