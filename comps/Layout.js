import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    //children = app/return/component


    return(
        <>
            <div className="content">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default Layout