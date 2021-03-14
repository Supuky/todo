import * as api from '../api';

export const getLists = () => async (dispatch) => {
    try {
        // response -> db -> get all list
        const { data } = await api.fetchLists()

        // To reducer
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createList = (list) => async (dispatch) => {
    try {
        // response -> create list -> db
        const { data } = await api.createList(list)

        // To reducer
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const updateList = (id, list) => async (dispatch) => {
    try {
        // reponse update -> list -> db
        const { data } = await api.updateList(id, list);

        // To reducer
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteList = (id) => async (dispatch) => {
    try {
        // response -> list delete
        await api.deleteList(id);

        // To reducer
        dispatch({ type: 'DELETE', payload: id })

    } catch (error) {
        console.log(error.message);
    }
}