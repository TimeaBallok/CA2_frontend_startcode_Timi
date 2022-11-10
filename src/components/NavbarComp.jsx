import {Navbar, Nav, Container} from 'react-bootstrap'
import {NavLink} from "react-router-dom";


function NavbarComp() {

    const getClass = ({isActive}) => (isActive ? "nav-active" : null)

    return (
        <header className="container">
            <nav className="container">
                <NavLink to={"/"} className={getClass}>CA2-Startcode</NavLink>
                <NavLink to={"/about"} className={getClass}>About</NavLink>
                <NavLink to={"/login"} className={getClass}>Login</NavLink>
                <NavLink to={"/joke"} className={getClass}>Joke</NavLink>
                <NavLink to={"/coctails"} className={getClass}>Coctail</NavLink>
            </nav>
        </header>
        // <>
        //     <Navbar bg="dark" variant="dark">
        //         <Container>
        //             <Navbar.Brand as={Link} to="/">CA2-Startcode</Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <Nav.Link as={Link} to="/about">About</Nav.Link>
        //                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
        //                 <Nav.Link as={Link} to="/joke">Jokes</Nav.Link>
        //             </Nav>
        //         </Container>
        //     </Navbar>
        // </>

    );
}

export default NavbarComp;