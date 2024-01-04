import './Navbar.scss';

type NavbarProps = {
    onReset: () => void;
};

const Navbar = ({ onReset }: NavbarProps) => {
    return (
        <nav className="navbar">
            <h1 className="navbar__title">My Todos</h1>
            <button className="navbar__reset" onClick={onReset}>Reset</button>
        </nav>
    );
};

export default Navbar;