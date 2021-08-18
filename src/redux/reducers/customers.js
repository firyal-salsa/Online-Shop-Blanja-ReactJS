const initialState = {
    data : {},
    isAuth : false,
    token : null,
}

const customers = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case "SET_AUTH" : {
            return {
                ...state,
                isAuth: true,
                token : payload
            }
        }
        case "UNSET AUTH" : {
            return {
                ...state,
                isAuth: false,
                token: null,
                data: {},
            }
        }
        case "SET_customers" : {
            return {
                ...state,
                data: payload,
            }
        }
        default:
            return state
    }
}

export default customers