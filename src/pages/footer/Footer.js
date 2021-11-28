import Curve from "../../compnents/Curve";

export default function Footer() {
    return (
        <>
            <Curve/>
            <div className="footer center" style={{minHeight: '20vh'}}>
                <div className="center-inner">
                    <a href="https://twitch.shushie16.com" target="_blank" rel="noreferrer">
                        <img alt="Twitch logo" src="/static/img/icons/dark/twitch.svg" className="footer-social-icons"/>
                    </a>
                    <a href="https://youtube.shushie16.com" target="_blank" rel="noreferrer">
                        <img alt="Youtube logo" src="/static/img/icons/dark/youtube.svg" className="footer-social-icons"/>
                    </a>
                    <a href="https://twitter.shushie16.com" target="_blank" rel="noreferrer">
                        <img alt="Twitter logo" src="/static/img/icons/dark/twitter.svg" className="footer-social-icons"/>
                    </a>
                    <a href="https://instagram.shushie16.com" target="_blank" rel="noreferrer">
                        <img alt="Instagram logo" src="/static/img/icons/dark/instagram.svg" className="footer-social-icons"/>
                    </a>
                    <br/>
                    <p>
                        Website made by <a href="https://github.com/toffee1347" target="_blank" rel="noreferrer" style={{color: 'blue'}}>Toffee</a> with ❤️
                    </p>
                </div>
            </div>
        </>
    );
}