import axios from 'axios'

export const getAPOD = (APODdata) => {
  return {
    type: 'GET_APOD',
    payload: {
      APODdata: APODdata
    }
  }
}

export const getAPODAsyncHandler = () => {
  return (dispatch, getState) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=3Qo4akjdvDQvy8Zhjf4ADK2IkIjkoS4FddhFRytQ')
    .then((data) => {
      dispatch(getAPOD(data.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
