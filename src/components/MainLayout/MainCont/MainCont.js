import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Confirmation from "../../pages/Confirmation/Confirmation";

function MainCont({children}){
    return (
        <>
            <Navbar />
            <main>
                {children}
                <Routes>
                    <Route path="/confirmation" element={<Confirmation/>} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default MainCont