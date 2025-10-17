import type { ForecastWeatherResponse } from '@shared/models/weather/forecast-weather';
import type { TodayWeatherResponse } from '@shared/models/weather/today-weather';
import type { WeatherData, WeatherDateData } from '@shared/models/weather/weather';
import type { UserSettingsState } from '@shared/store/user-settings-store';
import dayjs from 'dayjs';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string;
const BASE_URL = 'https://api.openweathermap.org';
export const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/';

export const getForecast = async (city: string, lang: UserSettingsState['language']): Promise<WeatherDateData> => {
    // Se podrías calcular las horas que faltan para las 24:00 y pedir solo las horas que faltan. Pero si fuese cerca de las 24:00 no se mostrarían muchos datos.
    const hoursToFetch = 12;
    const url = `${BASE_URL}/data/2.5/forecast?q=${city}&cnt=${hoursToFetch}&units=metric&lang=${lang}&appid=${API_KEY}`;

    const currentUrl = `${BASE_URL}/data/2.5/weather?q=${city}&units=metric&lang=${lang}&appid=${API_KEY}`;

    const [forecastResponse, currentResponse] = await Promise.all([
        fetch(url),
        fetch(currentUrl)
    ]);

    const forecastData: ForecastWeatherResponse = await forecastResponse.json();
    const currentData: TodayWeatherResponse = await currentResponse.json();

    return {
        forecastData: parseForecastWeather(forecastData),
        todayWeather: parseWeatherDate(currentData)
    };
};

const parseWeatherDate = (currentData: TodayWeatherResponse | ForecastWeatherResponse['list'][number]): WeatherData => {
    return {
        hour: dayjs(currentData.dt * 1000).format('HH:mm'),
        icon: `${WEATHER_ICON_URL}/${currentData.weather[0].icon}@4x.png`,
        temp: Math.round(currentData.main.temp),
        maxTemp: Math.round(currentData.main.temp_max),
        minTemp: Math.round(currentData.main.temp_min),
        description: currentData.weather[0].description,
        feelsLike: Math.round(currentData.main.feels_like)
    };
};

const parseForecastWeather = (forecastData: ForecastWeatherResponse): WeatherData[] => {
    return forecastData.list.map((item) => parseWeatherDate(item));
};
