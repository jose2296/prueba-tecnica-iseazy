import LanguageSelector from './language-selector/language-selector';

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center p-4 fixed w-full shadow-lg bg-base'>
            <div className='flex flex-row gap-2 items-end'>
                <img className='w-32 md:w-50' src='/assets/logos/iseazy-logo-color.svg' alt='iseazy-logo' />
                <span className='font-light text-xl leading-none md:text-4xl text-base-content'>meteo</span>
            </div>
            <LanguageSelector />
        </header>
    );
};

export default Header;
