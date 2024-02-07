import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import { useState } from 'react';
import jarjar from '../../img/wtf-star-wars-jar-jar-binks-why-8595592192.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';





export const Card = ({ data }) => {
    const { store, actions } = useContext(Context);
    const isFavorited = store.favorites.includes(data.name);

    const toggleFavorite = (e) => {
        e.preventDefault();
        actions.saveFavoriteToLocalStorage(data.name);
    };

    return (
        <div className="card m-3" style={{ "minWidth" : "400px"}}>
            <img src={data.imageUrl || jarjar} className="card-img-top" alt={data.name} />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.gender}</p>
                <p className="card-text">{data.homeworld}</p>
                {/* placeholder...*/}
                <Button variant="primary" className="mr-2" as={Link} to={`/fullpage/${data.name}`}>Learn More</Button>
                <a href="#" className={`btn ${isFavorited ? 'btn-primary active' : 'btn-secondary'}`}
                   role="button"
                   data-bs-toggle="button"
                   aria-pressed={isFavorited}
                   onClick={toggleFavorite}>
                   {isFavorited ? 'Unfavorite' : 'Favorite'}
                </a>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        uid: PropTypes.string,
        imageUrl: PropTypes.string,
        gender: PropTypes.string,
        homeworld: PropTypes.string,
    })
};