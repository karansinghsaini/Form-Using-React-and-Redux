import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../Css/App.css';
const Navbar = () => {

    return(
        <nav className='navbar'>
            <Link to='/'><button className=' button homebutton'>Home</button></Link>
            <Link to='/adduser'><button className='button loginbutton'>Add User</button></Link>     
        </nav>
    )
}
export default withRouter (Navbar);