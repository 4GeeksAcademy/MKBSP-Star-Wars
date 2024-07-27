const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            people: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            loadPeople: async () => {
                try {
                    const res = await fetch("https://www.swapi.tech/api/people/");
                    const data = await res.json();
                    const people = await Promise.all(data.results.map(async people => {
                        let imageUrl = `https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`;
                        try {
                            await fetch(imageUrl); // Check if the image exists
                        } catch {
                            imageUrl = jarjar; // Use fallback image if it doesn't
                        }
                        return { ...people, imageUrl };
                    }));
                    setStore({ people });
                } catch (err) {
                    console.error(err);
                }
            },

            loadPlanets: async () => {
                try {
                    const res = await fetch("https://www.swapi.tech/api/planets/");
                    const data = await res.json();
                    const planets = await Promise.all(data.results.map(async planet => {
                        let imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;
                        try {
                            await fetch(imageUrl); // Check if the image exists
                        } catch {
                            imageUrl = jarjar; // Use fallback image if it doesn't
                        }
                        return { ...planet, imageUrl };
                    }));
                    setStore({ planets });
                } catch (err) {
                    console.error(err);
                }
            },

            loadSinglePlanet: async (planetUrl) => {
                let planet
                try {
                    const res = await fetch(planetUrl);
                    planet = await res.json();
                } catch (err) {
                    console.error(err);
                }
                return planet
            },


            loadVehicles: async () => {
                try {
                    const res = await fetch("https://www.swapi.tech/api/vehicles/");
                    const data = await res.json();
                    const vehicles = await Promise.all(data.results.map(async vehicle => {
                        let imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`;
                        try {
                            await fetch(imageUrl); // Check if the image exists
                        } catch {
                            imageUrl = jarjar; // Use fallback image if it doesn't
                        }
                        return { ...vehicle, imageUrl };
                    }));
                    setStore({ vehicles });
                } catch (err) {
                    console.error(err);
                }
            },

            loadItem: async (type, uid) => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                    console.log("testing data with res", res)
                    const data = await res.json();
                    console.log("Testing data", data)
                    const imageType = type === "people" ? "characters" : type
                    let imageUrl = `https://starwars-visualguide.com/assets/img/${imageType}/${uid}.jpg`;
                    try {
                        await fetch(imageUrl); // Check if the image exists
                    } catch {
                        imageUrl = jarjar; // Use fallback image if it doesn't
                    }
                    return { ...data.result.properties, imageUrl };
                } catch (err) {
                    console.error(err);
                }
            },

            saveFavoriteToLocalStorage: (title) => {
                let favorites = JSON.parse(localStorage.getItem('favoriteButton')) || [];
                const index = favorites.indexOf(title);
                if (index > -1) {
                    favorites.splice(index, 1);
                } else {
                    favorites.push(title);
                }
                localStorage.setItem('favoriteButton', JSON.stringify(favorites));
                setStore({ favorites });
            },
            loadFavorites: () => {
                const storedFavorites = JSON.parse(localStorage.getItem('favoriteButton')) || [];
                setStore({ favorites: storedFavorites });
            },
            removeFavorite: (title) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav !== title);
                setStore({ favorites: updatedFavorites });
                localStorage.setItem('favoriteButton', JSON.stringify(updatedFavorites));
            }
        }
    };
};

export default getState;
