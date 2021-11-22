import Slide from '@mui/material/Slide';
import Intro from '../intro/Intro';
import Videos from '../videos/Videos';
import Socials from './Socials';

export default function Home() {
    return (
        <>
            <div>
                <div className="center">
                    <div className="center-inner">
                        <Slide direction="up" in={true} timeout={1000} onEntered={() => document.body.style.overflow = 'overlay'}>
                            <div>
                                <img alt="logo" className="home-main-image" src="/static/img/profile-nobg.png"/>
                                <Socials/>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
            <Intro/>
            <Videos/>
        </>
    );
}