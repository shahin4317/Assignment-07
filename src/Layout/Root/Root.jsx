
import Navbar from '../../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;