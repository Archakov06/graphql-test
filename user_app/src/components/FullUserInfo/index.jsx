import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import { GET_USER } from 'queries';

import './FullUserInfo.pcss';

const FullUserInfo = ({
  id,
  visibleEditCountry,
  inputValue,
  onChangeInput,
  toggleVisibleInput,
  onSubmit,
}) => (
  <div className="full-user-info">
    <Query query={GET_USER} variables={{ id }} fetchPolicy="cache-and-network">
      {({ loading, error, data: { user } }) => {
        if (loading) {
          return <div className="loading">Loading...</div>;
        }
        if (error) {
          return <div className="error">Error :(</div>;
        }
        return (
          <div className="user-card">
            <div>
              <div className="user-card__avatar">
                <img src="/avatar.png" />
              </div>
              <h2>{user.full_name}</h2>
              <div className="user-card__old">{user.age} years</div>
              <div className="full-user-info__city">
                {!visibleEditCountry && <p onClick={toggleVisibleInput}>{user.city}</p>}
                {visibleEditCountry && (
                  <div className="full-user-info__city-input">
                    <span>Country:</span>
                    <input
                      type="text"
                      onChange={onChangeInput}
                      value={inputValue}
                      placeholder={user.city}
                    />
                    <button onClick={onSubmit}>Submit</button>
                  </div>
                )}
              </div>
            </div>
            <div className="line" />
            <div className="full-user-info__languages">
              {user.knowledge.map((obj, i) => (
                <div key={i}>
                  <b>{obj.language}</b>
                  <p>{obj.frameworks.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Query>
  </div>
);

FullUserInfo.propTypes = {
  id: PropTypes.string.isRequired,
  visibleEditCountry: PropTypes.bool,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  toggleVisibleInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FullUserInfo;
