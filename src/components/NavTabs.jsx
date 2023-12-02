import { Link, useLocation } from "react-router-dom";
// fixed navbar will keep the navbar at the top (relative to top of page) of the page despite scrolling

//Here we are using object destructuring assignment to pluck off our variables from the props object
//We assign them to their own variable names
// function NavTabs() {
//   const currentPage = useLocation().pathname;

//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link
//           to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Portfolio"
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Resume"
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Contact"
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <h1 className="text-muted">Portfolio of the Widewander</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
            <Link
              to="/Portfolio"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
            <Link
              to="/Resume"
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
            <Link
              to="/Contact"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

// export default NavTabs;
