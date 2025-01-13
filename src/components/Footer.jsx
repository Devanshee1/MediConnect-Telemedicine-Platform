import "./Footer.css";
import logo1 from './Images/logo1.png';
export const Footer = () => {
    return <footer className="footer-container">
        <div className="footer-items">
            <div>
                <h3>MediConnect</h3>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Carrers</li>
                    <li>Press</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3>For patients</h3>
                <ul>
                    <li>Search for doctors</li>
                    <li>Search for clinics</li>
                    <li>Search for hospitals</li>
                    <li>Book Diagnostic Tests</li>
                    <li>Book Full Body Checkups</li>
                    <li>Covid Hospital listing</li>
                    <li>Read health articles</li>
                    <li>Read about medicines</li>
                    
                </ul>
            </div>
            {/* <div>
                <h3>For doctors</h3>
                <ul>
                    <li>MediConnect Profile</li>
                </ul>
                <h3>For clinics</h3>
                <ul>
                    <li>Ray by MediConnect</li>
                    <li>MediConnect Reach</li>
                    <li>Ray Tab</li>
                    <li>MediConnect Pro</li>
                </ul>
            </div> */}
            {/* <div>
                <h3>For hospitals</h3>
                <ul>
                    <li>Insta by MediConnect</li>
                    <li>Qikwell by MediConnect</li>
                    <li>MediConnect Profile</li>
                    <li>MediConnect Reach</li>
                    <li>MediConnect Drive</li>
                </ul>
            </div> */}
            <div>
                <h3>More</h3>
                <ul>
                    <li>Help</li>
                    <li>Developers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Healthcare Directory</li>
                    <li>MediConnect Health Wiki</li>
                    <li>Corporate Wellness</li>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Youtube</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
        <div className="footer-logo">
            <img src={logo1} />
            <h3>Copyright © 2017, MediConnect. All rights reserved.</h3>
        </div>

    </footer>
}