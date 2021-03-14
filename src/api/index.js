import axios from 'axios';

const url = 'https://todolistsappy.herokuapp.com/lists';

export const fetchLists = () => axios.get(url);
export const createList = (newList) => axios.post(url, newList);
export const updateList = (id, updatedList) => axios.patch(`${url}/${id}`, updatedList);
export const deleteList = (id) => axios.delete(`${url}/${id}`);