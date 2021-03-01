import React from 'react'
import { Link } from 'react-router-dom';

interface Props {

}
const Footer: React.FC<Props> = () => {
    return (
        <footer className="flex w-full items-center h-20 items-center bg-hoverblue text-white justify-around">
            <div className="flex flex-row space-x-10">
                <a href="https://www.facebook.com/pathsala">Facebook</a>
                <a href="https://www.instagram.com/pathsala" target="blank">Instagram</a>
                <a href="https://www.twitter.com/pathsala">Twitter</a>
            </div>
            <div className="flex flex-row space-x-10">
                <Link to="/terms-conditions">Terms and Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div>2021 All rights reserved</div>

        </footer>
    );
}

export default Footer;