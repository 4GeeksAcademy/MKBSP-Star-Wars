import React, { useContext } from 'react';
import PropTypes, { array, string } from 'prop-types';
import { Context } from '../store/appContext';
import { useState } from 'react';
import jarjar from '../../img/wtf-star-wars-jar-jar-binks-why-8595592192.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




export const FullPage = () => {
    const { store, actions } = useContext(Context);
    const { name } = useParams();
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Fetching logic here
        };
    
        fetchData();
    }, [name, actions]);

    if (!itemData) {
        return <div>Loading...</div>;
    }
    return (
        <div className='container'>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <svg className="bi mt-4 mb-3" style={{ color: 'var(--bs-indigo)' }} width="100" height="100"><use href="#bootstrap"></use></svg>
                    <h1 className="text-body-emphasis">{data.name}</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> className, and a customized call to action.
                    </p>
                    <div className="d-inline-flex gap-2 mb-5">
                        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                            Call to action
                            <svg className="bi ms-2" width="24" height="24"><use href="#arrow-right-short"></use></svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}



FullPage.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        model: PropTypes.string,
        birth_year: PropTypes.string,
        eye_color: PropTypes.string,
        gender: PropTypes.string,
        hair_color: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        skin_color: PropTypes.string,
        homeworld: PropTypes.string,
        films: PropTypes.array,
        species: PropTypes.array,
        starships: PropTypes.array,
        vehicles: PropTypes.array,
        url: PropTypes.string,
        created: PropTypes.string,
        edited: PropTypes.string,
        starship_class: PropTypes.string,
        manufacturer: PropTypes.string,
        cost_in_credits: PropTypes.string,
        length: PropTypes.string,
        crew: PropTypes.string,
        passengers: PropTypes.string,
        max_atmosphering_speed: PropTypes.string,
        hyperdrive_rating: PropTypes.string,
        cargo_capacity: PropTypes.string,
        consumables: PropTypes.string,
        pilots: PropTypes.string,
        diameter: PropTypes.string,
        rotation_period: PropTypes.string,
        orbital_period: PropTypes.string,
        gravity: PropTypes.string,
        population: PropTypes.string,
        terrain: PropTypes.string,
        climate: PropTypes.string,
        residents: PropTypes.string,
    }
)};
