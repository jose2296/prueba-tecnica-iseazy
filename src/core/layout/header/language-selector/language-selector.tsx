import { useUserSettingsStore, type UserSettingsState } from '@shared/store/user-settings-store';
import LanguageItem from './language-item';

const LanguageSelector = () => {
    const { language, availableLanguages, setLanguage } = useUserSettingsStore();
    const handleChangeLanguage = (lang: UserSettingsState['language']) => {
        setLanguage(lang);
    };
    return (
        <div className='flex flex-row gap-2 relative'>
            {availableLanguages.map((lang, index) =>
                <LanguageItem
                    key={`lang-${index}`}
                    lang={lang}
                    setLanguage={handleChangeLanguage}
                    language={language}
                />
            )}
        </div>
    );
};

export default LanguageSelector;
