import React from "react";
import { Grid, Typography } from "@mui/material";

function subscribeClick(e) {
    e.preventDefault();
    window.open('https://www.youtube.com/channel/UCFphCAt9jZfJu-txxUjko2A?sub_confirmation=1', '', 'width=500, height=700');
}

function makeVideos(videos) {
    return (
        <Grid style={{width: '100%'}} container spacing={0}>
            <Grid item xl={2} lg={1} md={1} sm={0} xs={0}/>
            <Grid item xl={8} lg={10} md={10} sm={12} xs={12}>
                <Grid style={{width: '100%'}} container spacing={0}>
                    <div className="videos-container">
                        <Typography variant="h4" style={{marginBottom: '1rem', textAlign: 'center'}}>
                            <b>My Youtube Videos!</b>
                        </Typography>
                        <a href="https://www.youtube.com/channel/UCFphCAt9jZfJu-txxUjko2A?sub_confirmation=1" onClick={subscribeClick} className="youtube-link">
                            <div className="youtube-button">
                                Subscribe!
                            </div>
                        </a>
                    </div>

                    {videos.map((video, i) => {
                        if (i > 19) return <div key={i}/>;
                        return (
                            <Grid item xl={3} lg={3} md={4} sm={6} xs={6} key={i}>
                                <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noreferrer">
                                    <div className="video">
                                        <img src={video.thumbnail} alt={video.title}/>
                                        <p>{video.title}</p>
                                    </div>
                                </a>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
            <Grid item xl={2} lg={1} md={1} sm={0} xs={0}/>
        </Grid>
    );
}

export default class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: <></>,
            loading: true,
        };
        this.mounted = false;
        this.fetch();
    }

    async fetch() {
        try {
            this.videos = await (await fetch('/api/youtube')).json();
            if (this.mounted) {
                this.setState({
                    loading: false,
                    html: makeVideos(this.videos),
                });
            }
        } catch (e) {
            return;
        }
    }

    componentDidMount() {
        this.mounted = true;
        if (this.videos) {
            this.setState({
                loading: false,
                html: makeVideos(this.videos),
            });
        }
    }
    
    render() {
        return (
            <div className="videos">
                {
                    this.state.loading ? (
                        <div className="videos-loading">
                            <img src="/static/img/loading.gif" alt="loading" className="videos-loading-image"/>
                        </div>
                    ) : (
                        <>
                            {this.state.html}
                        </>
                    )

                }
            </div>
        );
    }
}