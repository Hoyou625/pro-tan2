import logo from './assets/main_logo.jpg';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        /* header 컴포넌트 */
        <header className='top'>
            <div className='logo'>
                <NavLink to='/'>
                    <img src={logo} className='App-logo' alt='logo' />
                </NavLink>
            </div>
            <nav className='gnb'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/product'>Product</NavLink>
                    </li>
                    <li>
                        <NavLink to='/counter'>Counter</NavLink>
                    </li>
                    <li>
                        <NavLink to='/input'>Input</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;