import axios from "axios";

export const GET_DATA_TICKET = "GET_DATA_TICKET";
export const ADD_TICKET = "ADD_TICKET";

export const getDataTicket = () => {
    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: GET_DATA_TICKET,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'GET',
            url: 'http://localhost:3006/ticket/getstockticket'
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: GET_DATA_TICKET,
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
                type: GET_DATA_TICKET,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const addTicket = (data) => {
    return(dispatch) => {

        console.log('2.');
        // isLoading 
        dispatch({
            type: ADD_TICKET,
            payload: {
                isLoading: true,
                data: false,
                errorMessage: false
            }
        })

        // getData 
        axios({
            method: 'POST',
            url: 'http://localhost:3006/ticket/register',
            data: data
        })
        .then((response) => {
            console.log('3.')
            dispatch({
                type: ADD_TICKET,
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
                type: ADD_TICKET,
                payload: {
                    isLoading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}