import ProfilePic from "../Images/Cypher.png"
import FacebookPic from "../Images/Facebook Logo.png"
import YouTubePic from "../Images/YouTube Logo.png"

export default function Info() {
    return (
        <div>
            <figure id="profile-pic">
                {/* The profile picture is the background image. */}
            </figure>

            <header>
                <h1>Oolteem8 Industries</h1>
                <h3>Developer of Things</h3>
                <p className="mini-text">oolteem8.com</p>
            </header>

            <figure className="main-links">
                <a href="facebook.com">
                    <button><img src={FacebookPic} alt="Facebook Logo" />Email</button>
                </a>

                <a href="youtube.com">
                    <button><img src={YouTubePic} alt="YouTube Logo" />YouTube</button>
                </a>
            </figure>
        </div>
    )
}