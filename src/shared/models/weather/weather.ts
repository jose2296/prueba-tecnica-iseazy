export interface WeatherData {
    hour: string;
    icon: string;
    temp: number;
    maxTemp: number;
    minTemp: number;
    description: string;
    feelsLike: number;
}

export interface WeatherDateData {
    forecastData: WeatherData[],
    todayWeather: WeatherData
}
