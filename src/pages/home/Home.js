import Slide from '@mui/material/Slide';
import Intro from '../videos/Videos';
import Socials from './Socials';

export default function Home() {
    return (
        <>
            <Slide direction="up" in={true} timeout={1000} onEntered={() => document.body.style.overflow = 'overlay'}>
                <div>
                    <div className="center">
                        <div className="center-inner">
                            <img alt="logo" className="home-main-image" src="/static/img/profile-nobg.png"/>
                            <Socials/>
                        </div>
                    </div>
                </div>
            </Slide>
            <Intro/>
        </>
    );
}