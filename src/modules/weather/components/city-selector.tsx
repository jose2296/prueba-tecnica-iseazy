import Button from '@shared/components/button';
import { useWeatherStore } from '@shared/store/weather-store';
import { useTranslation } from 'react-i18next';

const CitySelector = () => {
    const { t } = useTranslation();
    const { city, availableCities, setCity } = useWeatherStore();

    return (
        <article className='card flex-2/5 gap-4'>
            <h3 className='text-lg font-semibold text-base-content'>
                {t('city_selector.title')}
            </h3>
            <div className='flex flex-col gap-2'>
                {availableCities.map((_city) => (
                    <Button
                        key={_city}
                        onClick={() => setCity(_city)}
                        text={`city_selector.cities.${_city}`}
                        type={city === _city ? 'primary' : 'secondary'}
                    />
                ))}
            </div>
        </article>
    );
};
export default CitySelector;
