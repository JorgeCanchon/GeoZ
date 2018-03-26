export const increment = () => ({ type: "Increment" });
export const decrement = () => ({ type: "Decrement" });

export const getGeozona = () => ({ type: "GET_GEOZONA" });
export const removeGeozona = id => ({ type: "REMOVE_GEOZONA", id });
export const editGeozona = () => ({ type: "EDIT_GEOZONA" });
export const addGeozona = obj => ({ type: "ADD_GEOZONA", id: obj.id});