import React from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../Stateprovider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [ {basket}] = useStateValue();

    return (
        <div className = "navbar">
        <div className = "logo">
           <Link style = {{textDecoration: "none"}} to = "/"><h2>Order Catalogue</h2></Link> 
        </div>
        <Link to = "/dashboard"><button>Dashboard</button></Link>
        <div className = "nav-item">
        <Link to = '/cart' ><ShoppingCartIcon /><span>{basket?.length}</span></Link>
            
        </div>
        </div>
    )
}

export default Navbar
