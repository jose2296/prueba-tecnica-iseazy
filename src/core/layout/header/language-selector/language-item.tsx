import type { UserSettingsState } from '@shared/store/user-settings-store';

interface LanguageItemProps {
    lang: UserSettingsState['language'];
    setLanguage: (lang: UserSettingsState['language']) => void;
    language: UserSettingsState['language'];
}
const LanguageItem = ({ lang, setLanguage, language }: LanguageItemProps) => {
    return (
        <button
            className='flex flex-col gap-2 cursor-pointer'
            onClick={() => setLanguage(lang)}
        >
            <img
                src={`/assets/languages/${lang}.svg`}
                alt={lang}
                className='w-8 h-auto'
            />
            {language === lang && (
                <div className={`absolute -bottom-2 rounded-sm bg-primary w-8 h-1 animate-fade-in`} />
            )}
        </button>
    );
};

export default LanguageItem;
