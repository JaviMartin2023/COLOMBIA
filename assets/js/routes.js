document.addEventListener("DOMContentLoaded", () => {
    const routeDays = {
        amazon: [
            { 
                title: "Arrival in Leticia", 
                description: "Welcome to the Amazon! 🌍 Your journey begins in Leticia, the vibrant gateway to the Colombian Amazon. This lively town offers a unique blend of indigenous culture, rich biodiversity, and breathtaking landscapes. Start by exploring the local market, where you'll find exotic Amazonian fruits, handcrafted souvenirs, and traditional remedies used by native communities. Later, enjoy a boat ride at sunset, where you might spot pink dolphins emerging from the Amazon River.", 
                img: "assets/img/leticia.jpg" 
            },
            { 
                title: "Jungle Trekking", 
                description: "Embark on a thrilling hike through the dense rainforest, where you'll be surrounded by towering ceiba trees, colorful birds, and hidden waterfalls. Your guide will introduce you to the flora and fauna of the Amazon, including poison dart frogs, howler monkeys, and even anacondas. Feel the pulse of nature as you immerse yourself in this untouched paradise.", 
                img: "assets/img/jungle.avif" 
            },
            { 
                title: "Wildlife Spotting", 
                description: "Take a boat to Monkey Island, home to several species of playful primates that roam freely in their natural habitat. Later, cruise down the Amazon River, where you'll have a chance to witness the legendary pink dolphins swimming alongside your boat. Don't forget to listen to the mesmerizing sounds of the jungle as the sun sets over the water.", 
                img: "assets/img/monkey.jpg" 
            },
            { 
                title: "Canoe Adventure", 
                description: "Experience the serenity of the Amazon River as you paddle through its mystical waters in a canoe. This adventure allows you to get up close to giant lily pads, hidden lagoons, and dense mangroves. If you're lucky, you may spot a caiman, capybara, or even an elusive jaguar resting near the riverbanks.", 
                img: "assets/img/amazon.jpg" 
            },
            { 
                title: "Indigenous Village", 
                description: "Wrap up your Amazon adventure with a visit to an indigenous community, where you’ll learn about ancestral traditions, spiritual rituals, and sustainable living. Try their handcrafted jewelry, taste cassava-based meals, and listen to stories passed down for generations.", 
                img: "assets/img/indigenous.jpg" 
            }
        ],
        andes: [
            { 
                title: "Bogotá & Monserrate", 
                description: "Kick off your Andean adventure in Bogotá, Colombia’s capital, a city that blends history, art, and modern culture. Visit La Candelaria, the colorful colonial district filled with street art, historic churches, and museums. Then, take a cable car up to Monserrate, where you'll enjoy breathtaking panoramic views of the entire city.", 
                img: "assets/img/BOGO2.webp" 
            },
            { 
                title: "Salt Cathedral", 
                description: "Journey to Zipaquirá, home to one of the most remarkable underground cathedrals in the world. This Salt Cathedral, carved into an ancient salt mine, is an architectural masterpiece and a spiritual sanctuary. Walk through its majestic tunnels and illuminated altars, experiencing the tranquility and sacred ambiance.", 
                img: "assets/img/zipa.webp" 
            },
            { 
                title: "Villa de Leyva", 
                description: "Step back in time as you visit Villa de Leyva, a perfectly preserved colonial town with one of the largest cobblestone plazas in South America. Wander through its whitewashed houses, boutique shops, and charming cafés. Explore prehistoric fossil sites, ancient monasteries, and scenic mountain trails.", 
                img: "assets/img/villa.webp" 
            },
            { 
                title: "Coffee Farms", 
                description: "End your journey in the heart of Colombia’s coffee-growing region, where you'll tour a traditional coffee farm. Learn about the coffee-making process from bean to cup, pick fresh coffee cherries, and enjoy an authentic coffee tasting experience.", 
                img: "assets/img/coffee.jpg" 
            }
        ],
        caribbean: [
            { 
                title: "Cartagena's Old Town", 
                description: "Walk through the beautiful colonial streets of Cartagena, a city of romantic balconies, vibrant architecture, and historic charm. Explore the walled city, admire the fortresses, and enjoy a sunset at Café del Mar overlooking the Caribbean Sea.", 
                img: "assets/img/carta.jpg" 
            },
            { 
                title: "Tayrona Park Beaches", 
                description: "Disconnect from the world and soak in the beauty of Tayrona National Park, one of Colombia’s most pristine natural reserves. Hike through tropical jungles to reach breathtaking beaches, where you can swim in crystal-clear waters or relax under swaying palm trees.", 
                img: "assets/img/tay.jpg" 
            },
            { 
                title: "Rosario Islands", 
                description: "Escape to the Rosario Islands, a paradise of turquoise waters and white-sand beaches. Snorkel around vibrant coral reefs, enjoy fresh seafood, or relax in an eco-lodge by the beach. The perfect ending to your Caribbean getaway.", 
                img: "assets/img/rosario.jpg" 
            }
        ],
        coffee: [
            { 
                title: "Salento & Cocora Valley", 
                description: "Begin your coffee adventure in Salento, a picturesque town known for its colorful balconies and vibrant culture. Take a jeep ride to the Cocora Valley, where you’ll hike through towering wax palm trees, the tallest in the world.", 
                img: "assets/img/cocora.jpg" 
            },
            { 
                title: "Coffee Farm Tour", 
                description: "Immerse yourself in the art of coffee-making at a traditional finca. Learn how coffee is grown, harvested, and roasted, and enjoy a sensory experience with different types of brews.", 
                img: "assets/img/ctour.jpg" 
            },
            { 
                title: "Manizales Hot Springs", 
                description: "After days of exploring, relax in the natural hot springs of Manizales, surrounded by lush green mountains. These mineral-rich waters are perfect for unwinding while soaking in the stunning Andean scenery.", 
                img: "assets/img/mani.jpg" 
            },
            { 
                title: "Pereira & Armenia", 
                description: "Explore Pereira and Armenia, two major cities in the Coffee Triangle. Visit botanical gardens, artisanal markets, and taste some of the best coffee in the world in local cafés.", 
                img: "assets/img/pereira.jpg" 
            }
        ]
    };
    

    document.querySelectorAll(".route-card").forEach(card => {
        const route = card.dataset.route;
        const prevBtn = card.querySelector(".prev-day");
        const nextBtn = card.querySelector(".next-day");
        const title = card.querySelector(".route-title");
        const description = card.querySelector(".route-description");
        const indicator = card.querySelector(".day-indicator");
        const image = card.querySelector(".route-image img");

        let currentIndex = 0;

        function updateRouteInfo() {
            indicator.textContent = `Day ${currentIndex + 1}`;
            title.textContent = routeDays[route][currentIndex].title;
            description.textContent = routeDays[route][currentIndex].description;
            image.src = routeDays[route][currentIndex].img;
            image.alt = routeDays[route][currentIndex].title;
        }

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % routeDays[route].length;
            updateRouteInfo();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + routeDays[route].length) % routeDays[route].length;
            updateRouteInfo();
        });

        updateRouteInfo();
    });
});
