const PROFILE_API = 'https://localhost:4000/api/profile';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API)
    .then(response => response.json())
    .then(profile =>
        dispatch({
          type: 'fetch-profile',
          profile
        })
    );

export const saveProfile = (dispatch, tempProfile) =>
    fetch(PROFILE_API, {
      method: 'PUT',
      body: JSON.stringify(tempProfile),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(profile => dispatch({
      type: 'save-profile',
      save: profile
    }));
