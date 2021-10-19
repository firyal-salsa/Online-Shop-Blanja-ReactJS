import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

function Private({ component: Component, ...rest }) {
    const { isAuth } = useSelector((state) => state.users)

    if (isAuth) {
        return (
            <Route
                {...rest}
                render={(props) => {
                    return <Component {...props} />
                }}
            />
        )
    } else {
        return <Redirect to="/login" />
    }
}

export default Private
