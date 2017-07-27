const initialState = {
  APODdata: {}
}

const APODreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_APOD':
      return {
        APODdata: action.payload.APODdata
      }
    default:
      return state
  }
}
export default APODreducer
