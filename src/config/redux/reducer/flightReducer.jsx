const initialState = {
    flight: {},
    isLoading: false
}

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_FLIGHT_PENDING':
            return{
                state,
                isLoading: true
            }
        case 'GET_DATA_FLIGHT_SUCESS':
            return{
                state,
                flight: action.payload,
                isLoading: false
            }
        case "GET_DATA_FLIGHT_FAILED" :
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default flightReducer