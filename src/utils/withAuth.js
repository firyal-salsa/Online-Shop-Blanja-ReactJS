import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

const withAuth = (WrappedComponent) => {
    return (props) => {
        const Router = useHistory()

        const { token: accessToken } = useSelector((state) => state.users)

        if (!accessToken) {
            Router.push("/")
            return null
        }

        return <WrappedComponent {...props} />
    }
}

export default withAuth
