import { Outlet, Link } from 'react-router-dom';

import Nav from "./header/Nav.jsx"
import Footer from "./footer/Footer.jsx"

const Root = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;