const $CityName = document.getElementById("city");
const $degrees = document.querySelector(".degrees");
const $humedad = document.getElementById("humedad");
const $feels = document.getElementById("feels");
const $wind = document.getElementById("wind");
const $time = document.getElementById("time");
const $date = document.getElementById("date");
const optionText = document.querySelectorAll(".option");

let nuevaCiudad = "Piura";
let ciudad = nuevaCiudad;

const peticiones = (url) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error de respuesta: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            let temp = data.main.temp;
            temp = temp - 273;
            $degrees.textContent = `${Math.floor(temp)}C°`;
            let hum = data.main.humidity;
            $humedad.textContent = `Humedad: ${hum}%`;
            let fl = data.main.feels_like;
            fl = fl - 273;
            $feels.textContent = `Se siente como: ${Math.floor(fl)}C°`;
            let wind = data.wind.speed * (3.6);
            $wind.textContent = `Viento: ${Math.floor(wind)} Km/h`;

            // Obtener fecha y hora actual
            const currentDateTime = new Date();
            const hours = currentDateTime.getHours();
            const minutes = currentDateTime.getMinutes();
            const time = `${hours}:${minutes}`;

            const year = currentDateTime.getFullYear();
            const month = currentDateTime.getMonth() + 1;
            const day = currentDateTime.getDate();
            const date = `${day}/${month}/${year}`;

            $time.textContent = `Hora actual: ${time}`;
            $date.textContent = `Fecha: ${date}`;
        })
        .catch(error => {
            console.error("Error en la petición:", error);
        });
};

peticiones(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=YOUR-TOKEN`);

optionText.forEach((element) => {
    element.addEventListener("click", () => {
        nuevaCiudad = $CityName.textContent;
        ciudad = nuevaCiudad;
        peticiones(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=YOUR-TOKEN`);
    });
});