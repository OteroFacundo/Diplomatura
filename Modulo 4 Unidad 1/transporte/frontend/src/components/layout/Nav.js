import{Link} from 'react-router-dom';
const Nav = (props)=>{
    return(
<nav >
<div className="holder">
            <ul>
            <li><Link  to="/">HOME</Link></li>
            <li><Link to="nosotros">NOSOTROS</Link></li>        
            <li><Link to="novedades">NOVEDADES</Link></li>
            <li><Link to="contacto">CONTACTO</Link></li>

        </ul>
        </div>
    </nav>
    );
}
export default Nav;