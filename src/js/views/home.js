import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from '../store/appContext';

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacters();
        actions.loadPlanets();
        actions.loadVehicles();
    }, [actions]);


	<div className="text-center">

		{/* Characters */}
		<div>
			<h1>Characters</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.characters.map(character => (
					<Card key={character.uid} data={character} />
				))}
			</div>
		</div>
		<hr />

		{/* Planets */}
		<div>
			<h1>Planets</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.planets.map(planet => (
					<Card key={planet.uid} data={planet} />
				))}
			</div>
		</div>
		<hr />

		{/* Vehicles */}
		<div>
			<h1>Vehicles</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.vehicles.map(vehicle => (
					<Card key={vehicle.uid} data={vehicle} />
				))}
			</div>
		</div>
		<hr />

	</div>
};