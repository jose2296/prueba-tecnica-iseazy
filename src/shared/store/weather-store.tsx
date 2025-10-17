import type { WeatherDateData } from '@shared/models/weather/weather';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const LOCAL_STORAGE_KEY = 'weather-storage';

export interface WeatherState {
    city: string;
    availableCities: string[];
    weather: Record<string, { city: string, data: WeatherDateData | null, date: string | null }> | null,
    setCity: (city: string) => void;
    setCityDateWeather: (city: string, weather: WeatherDateData | null, date: string | null) => void;
}
const availableCities: string[] = [
    'london',
    'toronto',
    'singapore'
];

export const useWeatherStore = create<WeatherState>()(
    persist(
        (set) => ({
            city: availableCities[0],
            availableCities,
            weather: availableCities.reduce((acc, city) => ({
                ...acc,
                [city]: {
                    city,
                    data: null,
                    date: null
                }
            }), {} as Record<string, { city: string, data: WeatherDateData | null, date: string | null }>),
            setCity: (city: string) => set({
                city: availableCities.find((_city) => _city === city)
            }),
            setCityDateWeather: (city: string, weather: WeatherDateData | null, date: string | null) => set((state) => ({
                ...state,
                weather: {
                    ...state.weather,
                    [city]: {
                        city,
                        data: weather,
                        date
                    }
                }
            })),
        }),
        {
            name: LOCAL_STORAGE_KEY,
            storage: createJSONStorage(() => localStorage)
        }
    )
);
