import { Grid } from "@mui/material";

export default function Socials() {
    return (
        <div className="socials">
            <Grid style={{width: '100%', maxWidth: '700px'}} container spacing={0}>
                <Grid item xs={12} md={6}>
                    <a href="https://twitch.shushie16.com" target="_blank" rel="noreferrer">
                        <div className="social-buttons twitch-button">
                            <div className="social-buttons-text">
                                <img alt="Twitch logo" src="/static/img/icons/twitch.svg"/>
                                Shushie16
                            </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://youtube.shushie16.com" target="_blank" rel="noreferrer">
                        <div className="social-buttons youtube-button">
                            <div className="social-buttons-text">
                                <img alt="Youtube logo" src="/static/img/icons/youtube.svg"/>
                                Shushie16 VODs
                            </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://twitter.shushie16.com" target="_blank" rel="noreferrer">
                        <div className="social-buttons twitter-button">
                            <div className="social-buttons-text">
                                <img alt="Twitter logo" src="/static/img/icons/twitter.svg"/>
                                @Shushie_16
                            </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a href="https://instagram.shushie16.com" target="_blank" rel="noreferrer">
                        <div className="social-buttons instagram-button">
                            <div className="social-buttons-text">
                                <img alt="Instagram logo" src="/static/img/icons/instagram.svg"/>
                                @Shushie_16
                            </div>
                        </div>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}