import { useNavigate } from "react-router-dom"

const withNavigate = (WrappedComponent) => (props) => {
    const navigate = useNavigate()

    return <WrappedComponent {...props} navigate={navigate} />
}

export default withNavigate
