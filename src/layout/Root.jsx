import { Outlet } from "react-router-dom";
import Nav from "../componants/Nav";
import Footer from "../componants/Footer";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;