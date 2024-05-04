import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const { Brand } = Navbar;
const { Item } = Dropdown;

function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Brand>
        <Link to={"/"}>
          <img
            src="/public/logo.png"
            className="mr-3 h-9 sm:h-12"
            alt="Flowbite React Logo"
          />
        </Link>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bolirana
        </span>
      </Brand>
      <div className="flex md:order-2">
        <div className="bg-cyan-500 p-2 mx-1 rounded text-white hover:bg-cyan-700">
        <h4><Link to='/login'>Login</Link></h4>
        </div>
        <div className="bg-teal-500 p-2 mx-1 rounded text-white hover:bg-teal-700">
        <h4><Link to='/registro'>Registro</Link></h4>
        </div>
      </div>

      <Navbar.Collapse>
        <Navbar.Link active>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/">Mas</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/">Contacto</Link>
        </Navbar.Link>
        <Dropdown arrowIcon={true} inline label={"Servicios"}>
          <Item>
            <Link to="/campeonatos">Campoeonato</Link>
          </Item>
          <Item>
            <Link to="/eventos">Eventos</Link>
          </Item>
          <Item>
            <Link to="/alquiler">Alquiler</Link>
          </Item>
        </Dropdown>
        <Navbar.Toggle />
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
