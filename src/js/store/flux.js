import { json } from "react-router";

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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			saveFavoriteToLocalStorage: (title) => {
				let favorites = JSON.parse(localStorage.getItem('favoriteButton')) || [];
				const index = favorites.indexOf(title);
				if (index > -1) {
				  // Item exists, remove it
				  favorites.splice(index, 1);
				} else {
				  // Item doesn't exist, add it
				  favorites.push(title);
				}
				localStorage.setItem('favoriteButton', JSON.stringify(favorites));
				setStore({ favorites }); //it works...? :/
			},
			loadFavorites: () => {
				const storedFavorites = JSON.parse(localStorage.getItem('favoriteButton')) || [];
				const store = getStore();
				if (JSON.stringify(store.favorites) !== JSON.stringify(storedFavorites)) {
				  setStore({ favorites: storedFavorites });
				}
			},
			removeFavorite: (title) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(fav => fav !== title);
				setStore({ favorites: updatedFavorites });
				localStorage.setItem('favoriteButton', JSON.stringify(updatedFavorites));
			},
			loadCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => { console.log(data.results)
						setStore({ characters: data.results })
					})
                    .catch(err => console.error(err));
            },
            loadPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({ planets: data.results }))
                    .catch(err => console.error(err));
            },
            loadVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({ vehicles: data.results }))
                    .catch(err => console.error(err));
            }
		}
	};
};

export default getState;
