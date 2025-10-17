import Header from '@core/layout/header/header';
import Weather from '@modules/weather/weather';

export default function App() {
    return (
        <div className='min-h-dvh'>
            <Header />
            <main className='pt-14 md:pt-18 flex-1 md:max-w-3xl mx-auto'>
                <Weather />
            </main>
        </div>
    );
};
