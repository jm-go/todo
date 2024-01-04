import './Navbar.scss';

type NavbarProps = {
    onReset: () => void;
};

const Navbar = ({ onReset }: NavbarProps) => {
    return (
        <nav className="navbar">
            <h1 className="navbar__title">MY TODOS</h1>
            <button className="navbar__reset" onClick={onReset}>RESET</button>
        </nav>
    );
};

export default Navbar;