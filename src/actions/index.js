export const getAPOD = (APODdata) => {
  return {
    type: 'GET_APOD',
    payload: {
      APODdata: APODdata
    }
  }
}
