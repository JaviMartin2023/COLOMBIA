document.addEventListener("DOMContentLoaded", () => {
    const sitesData = {
        "S1": { img: "assets/img/bogota.webp", area: "1,775 km²", population: "7.4 million", founded: "1538" },
        "S2": { img: "assets/img/medellin.webp", area: "382 km²", population: "2.5 million", founded: "1616" },
        "S3": { img: "assets/img/cali.jpg", area: "619 km²", population: "2.2 million", founded: "1536" },
        "S4": { img: "assets/img/cartagena.avif", area: "572 km²", population: "1 million", founded: "1533" },
        "S5": { img: "assets/img/barranquilla.jpg", area: "154 km²", population: "1.2 million", founded: "1813" }
    };

    const siteItems = document.querySelectorAll(".site-item");
    const siteImg = document.getElementById("siteImg");
    const siteName = document.getElementById("siteName");
    const siteArea = document.getElementById("siteArea");
    const sitePopulation = document.getElementById("sitePopulation");
    const siteFounded = document.getElementById("siteFounded");

    function updatesite(site) {
        if (sitesData[site]) {
            siteImg.src = sitesData[site].img;
            siteImg.alt = site;
            siteName.textContent = site;
            siteArea.textContent = sitesData[site].area;
            sitePopulation.textContent = sitesData[site].population;
            siteFounded.textContent = sitesData[site].founded;
        }
    }

    // Set initial site based on first list item
    const initialsite = document.querySelector(".site-item.active").dataset.site;
    updatesite(initialsite);

    siteItems.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".site-item.active").classList.remove("active");
            item.classList.add("active");
            updatesite(item.dataset.site);
        });
    });
});