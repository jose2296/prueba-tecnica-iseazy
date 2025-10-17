import type { WeatherData } from '@shared/models/weather/weather';
import { useTranslation } from 'react-i18next';
interface SummaryWeatherContentProps {
    weatherData: WeatherData;
}
const SummaryWeatherContent = ({ weatherData }: SummaryWeatherContentProps) => {
    const { t } = useTranslation();

    return (
        <main className='flex flex-col md:flex-row md:gap-2 md:items-end'>
            <div className='flex flex-2 flex-row gap-2 items-center'>
                <div className='flex-1 self-stretch flex flex-col justify-end pb-10'>
                    <p className='first-letter:uppercase text-sm font-medium'>{weatherData.description}</p>
                    <p className='text-4xl font-bold '>{weatherData.temp}°C</p>
                </div>
                <div className='flex-2'>
                    <img
                        src={weatherData.icon}
                        alt={weatherData.description}
                        className='size-40 filter-drop-shadow'
                    />
                </div>
            </div>
            <div className='flex flex-1 gap-2 flex-col md:pb-10'>
                <p>{t('weather_summary.feels_like')}: {weatherData.feelsLike}°C</p>
                <div className='flex flex-row flex-wrap gap-3 md:gap-0'>
                    <p>{t('weather_summary.max')}: {weatherData.maxTemp}°C</p>
                    <div className='w-0.5 my-1 bg-base-content md:hidden' />
                    <p>{t('weather_summary.min')}: {weatherData.minTemp}°C</p>
                </div>
            </div>
        </main>
    );
};

export default SummaryWeatherContent;
