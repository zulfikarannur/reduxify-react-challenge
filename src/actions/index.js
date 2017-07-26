export const getAPOD = (APODdata) => {
  return {
    type: 'getAPOD',
    payload: {
      APODdata: APODdata
    }
  }
}
