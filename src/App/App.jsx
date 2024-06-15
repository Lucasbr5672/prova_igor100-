import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Home/Home"
import Sobre from "../Sobre/Sobre"
import Contato from "../Contato/Contato"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Login from "../Login/Login"
import Administradores from "../Administradores/Administradores"



const App = () => {
    return(
        <BrowserRouter>
        <Header/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />               
                <Route path="/contato" element={<Contato/>} />               
                <Route path="/administradores" element={<Administradores/>} />               
                <Route path="/login" element={<Login/>}/>
             </Routes>
             <Footer/>
        </BrowserRouter>
    )
}
export default App;