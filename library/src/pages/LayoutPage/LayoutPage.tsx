import {useSelector} from "react-redux";
import { Outlet} from "react-router-dom";

import type { RootState } from "../../redux/ReduxStore";
import { LoginRegisterModal } from "../../features/authentication";
import './LayoutPage.css';
import { Footer, Navbar } from "../../features/Navigation";

export  default function LayoutPage(){
    const state=useSelector((state:RootState)=>state.modal);
    return(
        <div className="layout-page">
            {state.displayLogin && <LoginRegisterModal />}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}