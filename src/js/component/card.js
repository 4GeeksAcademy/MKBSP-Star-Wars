import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import { useState } from 'react';



export const Card = ({ data }) => {
    const { store, actions } = useContext(Context);
    const isFavorited = store.favorites.includes(data.name);

    const toggleFavorite = (e) => {
        e.preventDefault();
        actions.saveFavoriteToLocalStorage(data.name);
    };

    return (
        <div className="card" style={{ width: '300px' }}>
            <img src={data.imageUrl || 'default-placeholder.png'} className="card-img-top" alt={data.name} />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                {/* placeholder...*/}
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
        imageUrl: PropTypes.string,
    })
};