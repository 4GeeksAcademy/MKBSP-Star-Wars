import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import jarjar from '../../img/wtf-star-wars-jar-jar-binks-why-8595592192.png';

const FullPage = () => {
    const { store, actions } = useContext(Context);
    const { type, uid } = useParams();
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log(type, uid)
            try {
                const data = await actions.loadItem(type, uid);
                console.log(data)
                if (data.homeworld) {
                    const planet = await actions.loadSinglePlanet(data.homeworld)
                    data.homeworld = planet.result.properties.name}
                setItemData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [type, uid, actions]);

    if (!itemData) {
        return <div>Loading...</div>;
    }
    console.log("itemdata", itemData)
    const renderPeopleData = () => (
        <>
            <tr><td>Height</td><td>{itemData.height}</td></tr>
            <tr><td>Mass</td><td>{itemData.mass}</td></tr>
            <tr><td>Hair Color</td><td>{itemData.hair_color}</td></tr>
            <tr><td>Skin Color</td><td>{itemData.skin_color}</td></tr>
            <tr><td>Eye Color</td><td>{itemData.eye_color}</td></tr>
            <tr><td>Birth Year</td><td>{itemData.birth_year}</td></tr>
            <tr><td>Gender</td><td>{itemData.gender}</td></tr>
            <tr><td>Homeworld</td><td>{itemData.homeworld}</td></tr>
            <tr><td>Films</td><td>{itemData.films}</td></tr>
            <tr><td>Species</td><td>{itemData.species}</td></tr>
            <tr><td>Vehicles</td><td>{itemData.vehicles}</td></tr>
            <tr><td>Starships</td><td>{itemData.starships}</td></tr>
            <tr><td>Created</td><td>{itemData.created}</td></tr>
            <tr><td>Edited</td><td>{itemData.edited}</td></tr>
        </>
    );

    const renderPlanetData = () => (
        <>
            <tr><td>Climate</td><td>{itemData.climate}</td></tr>
            <tr><td>Diameter</td><td>{itemData.diameter}</td></tr>
            <tr><td>Gravity</td><td>{itemData.gravity}</td></tr>
            <tr><td>Population</td><td>{itemData.population}</td></tr>
            <tr><td>Terrain</td><td>{itemData.terrain}</td></tr>
            <tr><td>Surface Water</td><td>{itemData.surface_water}</td></tr>
            <tr><td>Orbital Period</td><td>{itemData.orbital_period}</td></tr>
            <tr><td>Rotation Period</td><td>{itemData.rotation_period}</td></tr>
            <tr><td>Residents</td><td>{itemData.residents}</td></tr>
            <tr><td>Films</td><td>{itemData.films}</td></tr>
            <tr><td>Created</td><td>{itemData.created}</td></tr>
            <tr><td>Edited</td><td>{itemData.edited}</td></tr>
        </>
    );

    const renderVehicleData = () => (
        <>
            <tr><td>Model</td><td>{itemData.model}</td></tr>
            <tr><td>Manufacturer</td><td>{itemData.manufacturer}</td></tr>
            <tr><td>Cost in Credits</td><td>{itemData.cost_in_credits}</td></tr>
            <tr><td>Length</td><td>{itemData.length}</td></tr>
            <tr><td>Max Atmosphering Speed</td><td>{itemData.max_atmosphering_speed}</td></tr>
            <tr><td>Crew</td><td>{itemData.crew}</td></tr>
            <tr><td>Passengers</td><td>{itemData.passengers}</td></tr>
            <tr><td>Cargo Capacity</td><td>{itemData.cargo_capacity}</td></tr>
            <tr><td>Consumables</td><td>{itemData.consumables}</td></tr>
            <tr><td>Vehicle Class</td><td>{itemData.vehicle_class}</td></tr>
            <tr><td>Pilots</td><td>{itemData.pilots}</td></tr>
            <tr><td>Films</td><td>{itemData.films}</td></tr>
            <tr><td>Created</td><td>{itemData.created}</td></tr>
            <tr><td>Edited</td><td>{itemData.edited}</td></tr>
        </>
    );

    const renderTableData = () => {
        console.log(type)
        switch (type) {
            case 'people':
                return renderPeopleData();
            case 'planets':
                return renderPlanetData();
            case 'vehicles':
                return renderVehicleData();
            default:
                return null;
        }
    };

    return (
        <div className='container'>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <img src={itemData.imageUrl || jarjar} className="card-img-top" alt={itemData.name} onError={(e) => { e.target.src = jarjar }} />
                    <h1 className="text-body-emphasis">{itemData.name}</h1>
                    <table className="table table-striped">
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

FullPage.propTypes = {
    type: PropTypes.string,
    uid: PropTypes.string,
};

export default FullPage;
