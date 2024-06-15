import {Link} from 'react-router-dom'
import {HeaderP,PHOME,Img} from "./header"


const Header = () => {
    return(

        <HeaderP>
            <Img src="../image-removebg-preview 8.png" alt="" />
            <Link to='/'><PHOME>HOME</PHOME></Link>
           
            <Link to='Sobre'><PHOME>SOBRE</PHOME> </Link>
            
            <Link to='contato'><PHOME>CONTATO</PHOME></Link>
            
            <Link to='Administradores'><PHOME>ADMINISTRADORES</PHOME></Link>
         
            <Link to='Login'><PHOME>LOGIN</PHOME></Link>
            
        </HeaderP>
    
    )
}
export default Header;