const UPDATE_USER_ID = 'UPDATE_USER_ID'
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PROFILE = 'UPDATE_PROFILE'

let initialState = {
  userid: 0,
  username: '',
  profile: ''
}

export default function reducer(state = initialState, action){
  switch(action.type) {
    default:
      return state
  }
}

export function updateUserId(userid){
  return {
    type:UPDATE_USER_ID,
    payload: userid
  }
}
export function updateUsername(username){
  return {
    type:UPDATE_USERNAME,
    payload: username
  }
}
export function updateProfile(profile){
  return {
    type:UPDATE_PROFILE,
    payload: profile
  }
}