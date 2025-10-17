import { getForecast } from '@core/services/api/weather-api';
import { useUserSettingsStore } from '@shared/store/user-settings-store';
import { useWeatherStore } from '@shared/store/weather-store';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import CitySelector from './components/city-selector';
import ForecastWeather from './components/forecast/forecast-weather';
import SummaryWeather from './components/summary/summary-weather';

const Weather = () => {
    const language = useUserSettingsStore(state => state.language);
    const { city, setCityDateWeather } = useWeatherStore();
    const cityWeatherData = useWeatherStore(state => state.weather?.[state.city]);
    const today = dayjs();

    useEffect(() => {
        if (cityWeatherData?.date !== today.format('YYYY-MM-DD HH')) {
            getWeather(city);
        }
    }, [city]);

    const getWeather = async (city: string) => {
        const weather = await getForecast(city, language);
        const date = dayjs().format('YYYY-MM-DD HH');

        setCityDateWeather(city, weather, date);
    };

    return (
        <div className='flex flex-col gap-8 p-4'>
            <div className='flex flex-col md:flex-row gap-6'>
                <CitySelector />
                <SummaryWeather />
            </div>
            <ForecastWeather />
        </div>
    );
};

export default Weather;
