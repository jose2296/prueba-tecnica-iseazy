import i18n from '@core/services/i18n';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const LOCAL_STORAGE_KEY = 'user-settings-storage';

export interface UserSettingsState {
    language: 'en' | 'es';
    availableLanguages: ['en', 'es'];
    setLanguage: (lang: 'en' | 'es') => void;
}

export const useUserSettingsStore = create<UserSettingsState>()(
    persist(
        (set) => ({
            language: 'en',
            availableLanguages: ['en', 'es'],
            setLanguage: (language) => set(() => {
                i18n.changeLanguage(language);
                dayjs.locale(language);
                return {
                    language
                };
            }),
        }),
        {
            name: LOCAL_STORAGE_KEY,
            storage: createJSONStorage(() => localStorage)
        }
    )
);
