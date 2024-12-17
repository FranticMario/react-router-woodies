import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
    const location = useLocation();

    return ( 

        <>
            <Header />

            <main className="main">
                <Outlet />
            </main>

            {location.pathname !== "/" && <Footer />}
        </>
     );
}
 
export default RootLayout;