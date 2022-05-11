import React from 'react';
import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';

function NavBar () {
    return(
        <header className="bg-indigo-300 container-fluid shadow-xl text-gray-600 body-font mb-5">
            <nav className="flex justify-between">
                <Link to="/" className="mr-5 hover:text-gray-900">Mangwitas</Link>
                <ul>
                    <li>
                        <Link to="/category/Gore" className="mr-5 hover:text-gray-900">Gore</Link>
                        <Link to="/category/Comedia" className="mr-5 hover:text-gray-900">Comedia</Link>
                        <Link to="/category/Shounen" className="mr-5 hover:text-gray-900">Shounen</Link>
                    </li>
                </ul>
                <CardWidget/>
            </nav>
        </header>
    )
}

export default NavBar;