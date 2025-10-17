import Loader from '@shared/components/loader';
import { useWeatherStore } from '@shared/store/weather-store';
import { useTranslation } from 'react-i18next';
import ForecastWeatherItem from './forecast-weather-item';

const ForecastWeather = () => {
    const forecast = useWeatherStore(state => state.weather?.[state.city]?.data?.forecastData);
    const { t } = useTranslation();

    if (!forecast) {
        return (
            <div className='flex-1 flex items-center justify-center'>
                <Loader />
            </div>
        );
    }

    return (
        <article className='flex-1 flex flex-col gap-2'>
            <h2 className='text-xl font-semibold text-base-content'>
                {t('weather_forecast.title')}
            </h2>
            <div className='flex flex-row overflow-x-auto gap-4 pb-4'>
                {forecast?.map((item, index) => (
                    <ForecastWeatherItem key={index} item={item} />
                ))}
            </div>
        </article>
    );
};

export default ForecastWeather;
