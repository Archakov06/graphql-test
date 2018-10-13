import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './UserCard.pcss';

const UserCard = ({ id, name, age, languages }) => (
  <div className="user-card">
    <Link to={`/user/${id}`}>
      <div className="user-card__avatar">
        <img src="/avatar.png" />
      </div>
      <h2>{name}</h2>
      <div className="user-card__old">{age} years</div>
      <p>{languages}</p>
    </Link>
  </div>
);

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  languages: PropTypes.string.isRequired,
};

export default UserCard;
