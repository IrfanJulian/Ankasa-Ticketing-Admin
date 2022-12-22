import axios from "axios";

export const getFlight = () => async(dispatch) => {
    try {
        dispatch({type: 'GET_DATA_FLIGHT_PENDING'})
        const dataFlight = await axios({
            method: 'GET',
            url: 'https://63a1f7a4ba35b96522ed326e.mockapi.io/flight'
        })
        dispatch({type: 'GET_DATA_FLIGHT_SUCESS', payload: dataFlight})
        console.log(dataFlight);
    } catch (error) {
        console.log(error);
        dispatch({type: 'GET_DATA_FLIGHT_FAILED', payload: error.response})
    }
}