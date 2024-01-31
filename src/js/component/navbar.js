import React from "react";
import { Link } from "react-router-dom";
import jarjar from '../../img/wtf-star-wars-jar-jar-binks-why-8595592192.png';
import { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext';

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadFavorites();
  }, []);

  return (


    <nav className="navbar navbar-light bg-light m-3">
      <Link to="/">
        <img src={jarjar} style={{ maxHeight: '100px' }} />
      </Link>
      <h2>
        Star Wars Library
      </h2>
      <div className="ml-auto">
        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favourites
          </a>

          <ul className="dropdown-menu">
            {store.favorites.map((favorite, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#">
                  {favorite} <span onClick={() => actions.removeFavorite(favorite)}>&times;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
