import React from 'react';
import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';

function NavBar () {
    return(
        <header className="bg-indigo-300 container-fluid shadow-xl text-gray-600 body-font mb-5">
            <nav className="flex justify-between">
                <h2>MANGWITAS</h2>
                <ul>
                    <li>
                        <Link to="/category/Gore" className="mr-5 hover:text-gray-900">Gore</Link>
                        <Link to="/category/Comedia" className="mr-5 hover:text-gray-900">Comedia</Link>
                        <Link to="/category/Shounen" className="mr-5 hover:text-gray-900">Shounen</Link>
                    </li>
                </ul>
                <div>
                    <CardWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;