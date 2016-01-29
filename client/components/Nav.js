var Nav = ({grab}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search grab={grab}/>
    </div>
  </nav>
);

window.Nav = Nav;
