import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import Counter from "./components/Counter"
import Header from "./components/Header"
import Auth from "./components/Auth"
import UserProfile from "./components/UserProfile"

function App() {
    const isAuthenticated = useSelector(
        (initialState) => initialState.auth.isAuthenticated
    )
    return (
        <Fragment>
            <Header />
            {isAuthenticated ? <UserProfile /> : <Auth />}
            <Counter />
        </Fragment>
    )
}

export default App
