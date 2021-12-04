import owner from './data/profile.json';

const profile = (state = owner, action) => {
  switch (action.type) {
    case 'save-profile':
      return action.save;
    case 'fetch-profile':
      return action.profile;

    default:
      return state;
  }
};

export default profile;