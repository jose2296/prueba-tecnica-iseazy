import Loader from '@shared/components/loader';
import { useWeatherStore } from '@shared/store/weather-store';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import SummaryWeatherContent from './summary-weather-content';
import './summary-weather.css';

const SummaryWeather = () => {
    const cityWeatherData = useWeatherStore(state => state.weather?.[state.city]);
    const { t } = useTranslation();
    const today = dayjs();
    const hasData = cityWeatherData?.date === today.format('YYYY-MM-DD HH');

    return (
        <article className='card card-primary relative flex-3/5'>
            <div className='city-background absolute top-0 left-0 w-full h-full -z-1' />

            <header className='flex flex-col gap-2'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-2xl font-bold'>
                        {t(`city_selector.cities.${cityWeatherData?.city}`)}
                    </h1>
                    <h2 className='text-xl font-semibold'>{today.format('HH:mm')}</h2>
                </div>
                <h2 className='capitalize text-xl flex md:flex-row flex-col gap-2'>
                    {today.format('dddd, DD MMMM YYYY')}
                </h2>
            </header>
            {!hasData &&
                <div className='flex-1 flex items-center justify-center'>
                    <Loader />
                </div>
            }
            {hasData && cityWeatherData?.data?.todayWeather &&
                <SummaryWeatherContent weatherData={cityWeatherData.data.todayWeather} />
            }
        </article>
    );
};

export default SummaryWeather;
