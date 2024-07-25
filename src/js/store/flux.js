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
            characters: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            loadCharacters: async () => {
                try {
                    const res = await fetch("https://www.swapi.tech/api/people/");
                    const data = await res.json();
                    const characters = await Promise.all(data.results.map(async character => {
                        let imageUrl = `https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`;
                        try {
                            await fetch(imageUrl); // Check if the image exists
                        } catch {
                            imageUrl = jarjar; // Use fallback image if it doesn't
                        }
                        return { ...character, imageUrl };
                    }));
                    setStore({ characters });
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
                    const data = await res.json();
                    let imageUrl = `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`;
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
