import { NavLink } from "react-router-dom";

export default function Header() {
  const NavLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Chi Siamo",
      url: "/who",
    },
    {
      title: "Form",
      url: "/form",
    },
  ];
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {NavLinks.map((curLink, index) => (
                  <li key={index} className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={curLink.url}>
                      {curLink.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
