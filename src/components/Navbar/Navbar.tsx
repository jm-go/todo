import "./Navbar.scss";

type NavbarProps = {
  // onReset function is called when the Reset button is clicked.
  onReset: () => void;
};

// This component displays the logo and a reset button.
const Navbar = ({ onReset }: NavbarProps) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">My Todos</h1>
      {/* Reset button to clear all tasks. */}
      <button className="navbar__reset" onClick={onReset}>
        Reset
      </button>
    </nav>
  );
};

export default Navbar;
