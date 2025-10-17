import type { WeatherData } from '@shared/models/weather/weather';


const ForecastWeatherItem = ({ item }: { item: WeatherData }) => {
    return (
        <div key={item.hour} className='relative card card-secondary py-6 flex-col items-center gap-1 min-w-40 justify-center'>
            <div
                className='absolute filter-drop-shadow opacity-30 -right-18 -bottom-15 bg-bottom-right size-50 bg-cover'
                style={{ backgroundImage: `url(${item.icon})` }}
            />
            <div className='flex gap-2 items-center'>
                <img
                    className='size-12 filter-drop-shadow'
                    src={item.icon}
                    alt={item.description}
                />
                <p>{item.temp}°C</p>
            </div>
            <p className='first-letter:uppercase font-medium text-sm text-center'>
                {item.description}
            </p>
            <p className='absolute top-0 py-1 px-2 rounded-sm left-0 text-sm font-semibold'>
                {item.hour}
            </p>
        </div>
    );
};

export default ForecastWeatherItem;
