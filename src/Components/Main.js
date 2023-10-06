import logo from "../Images/NodeJS Transparent Logo 02.png"

export default function MainContent() {
    return (
        <main>
            <div class="main-content">
                <h1 className="main-header">Fun facts about React</h1>

                <ul className="facts">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>
                        Powers thousands of enterprise apps, including mobile apps
                    </li>
                </ul>
            </div>

            {/* <div className="large-logo">
                <img src={logo} alt="React Large Logo" />
            </div> */}
        </main>
    );
}