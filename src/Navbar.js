export default function Navbar() {
    return (
        <header>
            <nav className="nav-items">
                <div>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt="Logo" />
                </div>

                <ul className="unordered-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}