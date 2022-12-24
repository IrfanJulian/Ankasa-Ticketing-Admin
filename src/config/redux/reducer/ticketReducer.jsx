import { GET_DATA_TICKET, ADD_TICKET } from '../action/ticketAction';

const initialState = {
    dataTicketResult: false,
    isLoading: false,
    error: false,

    addTicketResult: {},
}

const ticket = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_TICKET:
            return{
                ...state,
                dataTicketResult: action.payload.data,
                isLoading: action.payload.isLoading,
                error: action.payload.errorMessage
            }
        case ADD_TICKET:
            return{
                ...state,
                dataTicketResult: action.payload.data,
                isLoading: true
            }
        default:
            return state
    }
}



export default ticket