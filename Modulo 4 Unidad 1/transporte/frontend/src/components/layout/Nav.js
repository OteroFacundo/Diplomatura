import { Link } from 'react-router-dom';
const Nav = (props)=>{
    return(
<nav >
<div className="holder">
            <ul>
            <li><a class="activo" href="index.html">HOME</a></li>
            <li><a href="nosotros.html">NOSOTROS</a></li>        
            <li><a href="novedades.html">NOVEDADES</a></li>
            <li><a href="contacto.html">CONTACTO</a></li>

        </ul>
        </div>
    </nav>
    );
}
export default Nav;