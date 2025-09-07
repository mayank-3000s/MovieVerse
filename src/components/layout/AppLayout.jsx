import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import { LoadingPage } from "../../pages/LoadingPage";

const AppLayout = ()=>{

    const Navigation = useNavigation();
    if(Navigation.state === "loading") return < LoadingPage />
    
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout;