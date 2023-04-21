import Header from "../../components/Header/Header"
import { Outlet } from "react-router-dom";

const Layout: React.FunctionComponent = (): React.ReactElement => {
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout