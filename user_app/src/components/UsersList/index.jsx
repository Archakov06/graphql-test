import React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_USERS } from 'queries';

import UserCard from '../UserCard';

import './UsersList.pcss';

const UsersList = () => (
  <div className="users-list">
    <Query query={GET_ALL_USERS}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div className="loading">Loading...</div>;
        }
        if (error) {
          return <div className="error">Error :(</div>;
        }
        return data.allUsers.map(user => (
          <UserCard
            key={user.id}
            {...user}
            languages={user.knowledge.map(o => o.language).join(', ')}
          />
        ));
      }}
    </Query>
  </div>
);

export default UsersList;
