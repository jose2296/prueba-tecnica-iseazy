# IsEazy - Meteo

- Prueba técnica para IsEazy
- Desarrollada con React y TypeScript
- [Link al proyecto](https://iseazy-meteo.vercel.app/)
- [Link al repositorio](https://github.com/jose2296/prueba-tecnica-iseazy)


## Organización del código
Aunque la aplicación no es muy grande y no hay muchos archivos, he intentado organizarlo pensando en una aplicación más grande y facilitando la escalabilidad

## Estilos
Para los estilos he decidido usar tailwind por la rapidez de desarrollo, normalmente para un proyecto más grande usaría css/sass.

## Estado de la aplicación
Para el estado de la aplicación he usado zustand.
He cacheado en un store la información del forecast de cada ciudad seleccionada para que no se haga una nueva petición cada vez que se cambia de ciudad. La hora actual también esta cacheada al igual que el forecast por hora, se podría mejorar para que se actualice cada vez que se pide información de una ciudad con algún intervalo (si ha pasado 15 minutos desde la ultima petición o algo así).

Hay un store para la información del usuario que persiste en el localStorage. Solo he metido el idioma pero se podría incluir el tema del usuario u otras preferencias.

## Traducciones
Para las traducciones podría haber hecho mi propio hook para traducir los textos, pero he usado i18next por ser fácil de usar y por rapidez de desarrollo.

La descripción del tiempo (nubes, soleado, lluvia...) se traduce en la llamada a la API con el idioma del usuario seleccionado, pero después de cambiar el idioma no se vuelve a hacer la llamada por lo que las descripciones no se actualizan. Lo suyo sería pedir siempre la descripción del tiempo en ingles y luego mapearlas para traducirlas según la documentación (https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)

## Otras observaciones
No he tenido en cuenta la hora local de cada ciudad, por lo que se muestra la hora actual del usuario.

## Pruebas
He realizado un par de tests unitarios con vitest para un componente (carpeta src/tests).
