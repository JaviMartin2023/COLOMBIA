document.addEventListener("DOMContentLoaded", () => {
    const citiesData = {
        "Bogotá": { img: "assets/img/bogota.webp", area: "1,775 km²", population: "7.4 million", founded: "1538" },
        "Medellín": { img: "assets/img/medellin.webp", area: "382 km²", population: "2.5 million", founded: "1616" },
        "Cali": { img: "assets/img/cali.jpg", area: "619 km²", population: "2.2 million", founded: "1536" },
        "Cartagena": { img: "assets/img/cartagena.avif", area: "572 km²", population: "1 million", founded: "1533" },
        "Barranquilla": { img: "assets/img/barranquilla.jpg", area: "154 km²", population: "1.2 million", founded: "1813" }
    };

    const cityItems = document.querySelectorAll(".city-item");
    const cityImg = document.getElementById("cityImg");
    const cityName = document.getElementById("cityName");
    const cityArea = document.getElementById("cityArea");
    const cityPopulation = document.getElementById("cityPopulation");
    const cityFounded = document.getElementById("cityFounded");

    function updateCity(city) {
        if (citiesData[city]) {
            cityImg.src = citiesData[city].img;
            cityImg.alt = city;
            cityName.textContent = city;
            cityArea.textContent = citiesData[city].area;
            cityPopulation.textContent = citiesData[city].population;
            cityFounded.textContent = citiesData[city].founded;
        }
    }

    // Set initial city based on first list item
    const initialCity = document.querySelector(".city-item.active").dataset.city;
    updateCity(initialCity);

    cityItems.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".city-item.active").classList.remove("active");
            item.classList.add("active");
            updateCity(item.dataset.city);
        });
    });
});