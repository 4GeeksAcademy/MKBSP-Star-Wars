import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
import jarjar from '../../img/wtf-star-wars-jar-jar-binks-why-8595592192.png';

const FullPage = () => {
    const { store, actions } = useContext(Context);
    const { type, uid } = useParams();
    const [itemData, setItemData] = useState({
        name: "Dummy Character",
        height: "180",
        mass: "80",
        hair_color: "brown",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "Tatooine",
        films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
        species: "Human",
        vehicles: ["Snowspeeder", "Imperial Speeder Bike"],
        starships: ["X-wing", "Imperial shuttle"],
        created: "2024-07-23T12:00:00Z",
        edited: "2024-07-23T12:00:00Z",
        url: "https://swapi.tech/api/people/1",
        imageUrl: jarjar
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                const data = await res.json();
                setItemData(data.result.properties);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [type, uid]);

    return (
        <div className='container'>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <img src={itemData.imageUrl || jarjar} className="card-img-top" alt={itemData.name} onError={(e) => { e.target.src = jarjar }} />
                    <h1 className="text-body-emphasis">{itemData.name}</h1>
                    <table className="table table-striped">
                        <tbody>
                            {type === 'characters' && (
                                <>
                                    <tr>
                                        <td>Height</td>
                                        <td>{itemData.height}</td>
                                    </tr>
                                    <tr>
                                        <td>Mass</td>
                                        <td>{itemData.mass}</td>
                                    </tr>
                                    <tr>
                                        <td>Hair Color</td>
                                        <td>{itemData.hair_color}</td>
                                    </tr>
                                    <tr>
                                        <td>Skin Color</td>
                                        <td>{itemData.skin_color}</td>
                                    </tr>
                                    <tr>
                                        <td>Eye Color</td>
                                        <td>{itemData.eye_color}</td>
                                    </tr>
                                    <tr>
                                        <td>Birth Year</td>
                                        <td>{itemData.birth_year}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{itemData.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Homeworld</td>
                                        <td>{itemData.homeworld}</td>
                                    </tr>
                                    <tr>
                                        <td>Films</td>
                                        <td>{itemData.films.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <td>Species</td>
                                        <td>{itemData.species}</td>
                                    </tr>
                                    <tr>
                                        <td>Vehicles</td>
                                        <td>{itemData.vehicles.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <td>Starships</td>
                                        <td>{itemData.starships.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <td>Created</td>
                                        <td>{itemData.created}</td>
                                    </tr>
                                    <tr>
                                        <td>Edited</td>
                                        <td>{itemData.edited}</td>
                                    </tr>
                                </>
                            )}
                            {type === 'planets' && (
                                <>
                                    <tr>
                                        <td>Climate</td>
                                        <td>{itemData.climate}</td>
                                    </tr>
                                    <tr>
                                        <td>Diameter</td>
                                        <td>{itemData.diameter}</td>
                                    </tr>
                                    <tr>
                                        <td>Gravity</td>
                                        <td>{itemData.gravity}</td>
                                    </tr>
                                    <tr>
                                        <td>Population</td>
                                        <td>{itemData.population}</td>
                                    </tr>
                                    <tr>
                                        <td>Terrain</td>
                                        <td>{itemData.terrain}</td>
                                    </tr>
                                    <tr>
                                        <td>Surface Water</td>
                                        <td>{itemData.surface_water}</td>
                                    </tr>
                                    <tr>
                                        <td>Orbital Period</td>
                                        <td>{itemData.orbital_period}</td>
                                    </tr>
                                    <tr>
                                        <td>Rotation Period</td>
                                        <td>{itemData.rotation_period}</td>
                                    </tr>
                                    <tr>
                                        <td>Residents</td>
                                        <td>{itemData.residents.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <td>Films</td>
                                        <td>{itemData.films.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <td>Created</td>
                                        <td>{itemData.created}</td>
                                    </tr>
                                    <tr>
                                        <td>Edited</td>
                                        <td>{itemData.edited}</td>
                                    </tr>
                                </>
                            )}
                            {type === 'vehicles' && (
                                <>
                                    <tr>
                                        <td>Model</td>
                                        <td>{itemData.model}</td>
                                    </tr>
                                    <tr>
                                        <td>Manufacturer</td>
                                        <td>{itemData.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Cost in Credits</td>
                                        <td>{itemData.cost_in_credits}</td>
                                    </tr>
                                    <tr>
                                        <td>Length</td>
                                        <td>{itemData.length}</td>
                                    </tr>
                                    <tr>
                                        <td>Max Atmosphering Speed</td>
                                        <td>{itemData.max_atmosphering_speed}</td>
                                    </tr>
                                    <tr>
                                        <td>Crew</td>
                                        <td>{itemData.crew}</td>
                                    </tr>
                                    <tr>
                                        <td>Passengers</td>
                                        <td>{itemData.passengers}</td>
                                    </tr>
                                    <tr>
                                        <td>Cargo Capacity</td>
                                        <td>{itemData.cargo_capacity}</td>
                                    </tr>
                                    <tr>
                                        <td>Consumables</td>
                                        <td>{itemData.consumables}</td>
                                    </tr>
                                    <tr>
                                        <td>Vehicle Class</td>
                                        <td>{itemData.vehicle_class}</td>
                                    </tr>
                                    <tr>
                                        <td>Pilots</td>
                                        <td>{itemData.pilots.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <td>Films</td>
                                        <td>{itemData.films.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <td>Created</td>
                                        <td>{itemData.created}</td>
                                    </tr>
                                    <tr>
                                        <td>Edited</td>
                                        <td>{itemData.edited}</td>
                                    </tr>
                                </>
                            )}
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
