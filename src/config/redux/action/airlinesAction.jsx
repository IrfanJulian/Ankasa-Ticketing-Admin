import axios from "axios";

export const GET_DATA_AIRLINES = 'GET_DATA_AIRLINES';
export const ADD_DATA_AIRLINES = 'ADD_DATA_AIRLINES';
export const DELETE_DATA_AIRLINES = 'DELETE_DATA_AIRLINES';
const token = localStorage.getItem('token')

export const getDataAirlines = () => {
    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: GET_DATA_AIRLINES,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'GET',
            url: 'https://gentle-tights-jay.cyclic.app/airlines/all-airlines',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: GET_DATA_AIRLINES,
                payload: {
                    isLoading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3.')
            dispatch({
                type: GET_DATA_AIRLINES,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}


export const addAirlines = (data) => {
    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: ADD_DATA_AIRLINES,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'POST',
            url: 'https://gentle-tights-jay.cyclic.app/airlines/register',
            data: data,
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: ADD_DATA_AIRLINES,
                payload: {
                    isLoading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3.')
            dispatch({
                type: ADD_DATA_AIRLINES,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}


export const deleteDataAirlines = (id) => {
    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: DELETE_DATA_AIRLINES,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'DELETE',
            url: `https://gentle-tights-jay.cyclic.app/airlines/delete/${id}`,
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: DELETE_DATA_AIRLINES,
                payload: {
                    isLoading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log('3.')
            dispatch({
                type: DELETE_DATA_AIRLINES,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}