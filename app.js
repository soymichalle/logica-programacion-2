const btnConvertir = document.getElementById("btnConvertir");

btnConvertir.addEventListener('click', function () {

    const inpCelsius = document.querySelector("#inpCelsius");
    const inpFahrenheit = document.querySelector("#inpFar");
    const inpKelvin = document.querySelector("#inpKelvin");
    const inpCelsiusNotTrim = inpCelsius.value.trim();
    const celsius = Number(inpCelsius.value);

    console.log("Input Celsius: ", inpCelsius.value);
    console.log("Celsius es numero: ", celsius);

    if (inpCelsiusNotTrim == "" || !Number.isFinite(celsius)) {
        alert("El valor ingresado no es válido. Verifique e inténtelo nuevamente.")
        return;
    }

    console.log("Aqui voy");
    // - Fahrenheit: (°C × 9/5) + 32
    const valFah = (celsius * 9 / 5) + 32;

    //- Kelvin: °C + 273.15
    const valKelvin = (celsius + 273.15);

    console.log("En Fahrenheit: ", valFah);
    console.log("En Kelvin: ", valKelvin);

    inpFahrenheit.value = valFah;
    inpKelvin.value = valKelvin;

});

