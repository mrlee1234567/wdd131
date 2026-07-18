const weather = document.querySelector('#weather');
const temperatureF = 0;
const temperatureC = 0;
const windM = 0;
const windI = 0;
const windchill = 0;
function getWindChill () {
    if ((temperatureC <= 10 && windM > 4.8) || (temperatureF <= 50 && windI > 3)) {
        return windchill;
    }
    else
    {
        return 'N/A';
    }
    // there were no instructions on how to do any of this
};

weather.textContent = getWindChill()