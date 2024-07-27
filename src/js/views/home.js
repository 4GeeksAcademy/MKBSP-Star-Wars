import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from '../store/appContext';

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPeople();
        actions.loadPlanets();
        actions.loadVehicles();
    }, []);

    return (
        <div className="text-center">
            {/* Characters NOW PEOPLE! */}
            <div>
                <h1>People</h1>
                <div className="d-flex flex-row flex-nowrap overflow-auto">
                    {store.people.map(people => (
                        <Card key={people.uid} data={people} type="people" />
                    ))}
                </div>
            </div>
            <hr />
            {/* Planets */}
            <div>
                <h1>Planets</h1>
                <div className="d-flex flex-row flex-nowrap overflow-auto">
                    {store.planets.map(planet => (
                        <Card key={planet.uid} data={planet} type="planets" />
                    ))}
                </div>
            </div>
            <hr />
            {/* Vehicles */}
            <div>
                <h1>Vehicles</h1>
                <div className="d-flex flex-row flex-nowrap overflow-auto">
                    {store.vehicles.map(vehicle => (
                        <Card key={vehicle.uid} data={vehicle} type="vehicles" />
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
};
