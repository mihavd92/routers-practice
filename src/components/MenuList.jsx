import {NavLink} from "react-router-dom";


function MenuList() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacts">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuList;