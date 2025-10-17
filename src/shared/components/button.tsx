import { useTranslation } from 'react-i18next';

interface ButtonProps {
    text: string;
    avoidTranslation?: boolean;
    type?: keyof typeof buttonTypesClasses;
    onClick?: () => void;
}
const buttonTypesClasses = {
    primary: 'bg-primary text-base hover:bg-secondary hover:text-primary-content',
    secondary: 'border border-primary bg-base hover:bg-secondary hover:text-primary-content hover:border-secondary text-base-content'
};
const Button = ({ text, avoidTranslation, type = 'primary', onClick }: ButtonProps) => {
    const { t } = useTranslation();

    return (
        <button
            className={`py-3 px-4 text-lg cursor-pointer transition-[background-color] duration-300 rounded-lg ${buttonTypesClasses[type]} hover:opacity-80`}
            onClick={onClick}
        >
            {avoidTranslation ? text : t(text)}
        </button>
    );
};

export default Button;
