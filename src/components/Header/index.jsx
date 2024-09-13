import "./style.scss";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="#">AB</a>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Docs</a>
        </li>
        <li>
          <a href="#">Component</a>
        </li>
        <li>
          <a href="#">Examples</a>
        </li>
      </ul>
      <div className="login">
        <a href="#">Login</a>
      </div>
    </header>
  );
};

export default Header;
