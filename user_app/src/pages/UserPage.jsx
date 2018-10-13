import React from 'react';
import { Link } from 'react-router-dom';

import FullUserInfo from 'containers/FullUserInfo';

const UserPage = props => {
  return (
    <div className="wrapper wrapper--white">
      <div className="container">
        <div>
          <Link className="goBack" to="/">
            Back
          </Link>
        </div>
        <FullUserInfo id={props.match.params.id} />
      </div>
    </div>
  );
};

export default UserPage;
