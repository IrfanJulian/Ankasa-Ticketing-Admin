import axios from "axios";

export const GET_DATA_AIRLINES = 'GET_DATA_AIRLINES';

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
            url: 'http://localhost:3006/airlines'
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