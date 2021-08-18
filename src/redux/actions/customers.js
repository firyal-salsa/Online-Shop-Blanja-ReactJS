class customers {
    AuthSet = (token) => {
        return {
            type: "SET_AUTH",
            payload: token,
        }
    }

    AuthClear = () => {
        return {
            type: "UNSET_AUTH",
        }
    }

    customerSet = (data) => {
        return {
            type: "SET_CUSTOMERS",
            payload: data,
        }
    }
}

export default new customers()