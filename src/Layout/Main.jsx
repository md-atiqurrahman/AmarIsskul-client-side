import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import ApplyArea from '../pages/Shared/ApplyArea/ApplyArea';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ApplyArea></ApplyArea>
            <Footer></Footer>
        </div>
    );
};

export default Main;