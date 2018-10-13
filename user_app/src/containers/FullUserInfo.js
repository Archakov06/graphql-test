import { compose, withState, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';

import { GET_USER, CHANGE_USER_CITY } from 'queries';

import FullUserInfo from 'components/FullUserInfo';

export default compose(
  graphql(CHANGE_USER_CITY),
  withState('visibleEditCountry', 'showEditCountry', false),
  withState('inputValue', 'setInputValue', ''),
  withHandlers({
    onChangeInput: ({ setInputValue }) => e => {
      setInputValue(e.target.value);
    },
    toggleVisibleInput: ({ showEditCountry, visibleEditCountry }) => () => {
      showEditCountry(!visibleEditCountry);
    },
    onSubmit: ({ showEditCountry, setInputValue, inputValue, id, mutate }) => () => {
      mutate({
        variables: {
          userID: id,
          city: inputValue,
        },
        refetchQueries: [
          {
            query: GET_USER,
            variables: { id },
          },
        ],
      });
      setInputValue('');
      showEditCountry(false);
    },
  }),
)(FullUserInfo);
