import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import jarjar from '../../img/wtf-star-wars-jar-jar-binks-why-8595592192.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Card = ({ data, type }) => {
    const { store, actions } = useContext(Context);
    const [imageSrc, setImageSrc] = useState(data.imageUrl);
    const isFavorited = store.favorites.includes(data.name);

    const handleImageError = () => {
        setImageSrc(jarjar);
    };

    const toggleFavorite = (e) => {
        e.preventDefault();
        actions.saveFavoriteToLocalStorage(data.name);
    };

    return (
        <div className="card m-3" style={{ "minWidth": "400px" }}>
            <img src={imageSrc} className="card-img-top" alt={data.name} onError={handleImageError} />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                {type === 'people' && <p className="card-text">{data.gender}</p>}
                {type === 'planets' && <p className="card-text">{data.terrain}</p>}
                {type === 'vehicles' && <p className="card-text">{data.model}</p>}
                <Button variant="primary" className="mr-2" as={Link} to={`/fullPage/${type}/${data.uid}`}>Learn More</Button>
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
        terrain: PropTypes.string,
        model: PropTypes.string,
    }),
    type: PropTypes.string.isRequired
};
