function Header() {
  return (
    <nav className="#eceff1 blue-grey lighten-5 navbar-fixed">
      <div className="nav-wrapper">
        <a href="!#" className="brand-logo" style={{ color: "#4db6ac" }}>
          e-commerce
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/dmtrack/ecommerce.git"
              style={{ color: "#4db6ac" }}
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
