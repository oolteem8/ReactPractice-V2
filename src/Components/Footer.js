import TwitterLogoFooter from "../Images/Twitter Logo Footer.png"
import FacebookLogoFooter from "../Images/Facebook Logo Footer.png"
import InstagramLogoFooter from "../Images/Instagram Logo Footer.webp"
import GithubLogoFooter from "../Images/Github Logo Footer.png"

export default function Footer() {
    return (
        <footer>
            <img src={TwitterLogoFooter} alt="Twitter Logo Footer" className="bottom-logo" />
            <img src={FacebookLogoFooter} alt="Facebook Logo Footer" className="bottom-logo" />
            <img src={InstagramLogoFooter} alt="Instagram Logo Footer" className="bottom-logo" />
            <img src={GithubLogoFooter} alt="Github Logo Footer" className="bottom-logo" />
        </footer>
    )
}