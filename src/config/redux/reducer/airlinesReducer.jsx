import { GET_DATA_AIRLINES } from '../action/airlinesAction';

const initialState = {
    dataAirlinestResult: false,
    isLoading: false,
    error: false,
}

const airlines = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_AIRLINES:
            return{
                ...state,
                dataAirlinesResult: action.payload.data,
                isLoading: action.payload.isLoading,
                error: action.payload.errorMessage
            }
        default:
            return state
    }
}



export default airlines