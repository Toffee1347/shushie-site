import React from 'react';

function makeNotif(viewerCount, title, image) {
    const preloadImg = new Image();
    preloadImg.src = image;
    return (
        <abbr title={title}>
            <div className="notif-live">
                <div className="notif-live-text">
                    <a target="_blank" rel="noreferrer" href="https://twitch.tv/shushie16">
                        <span style={{color: 'red'}}>&#128308;</span> I'm Live on twitch with {viewerCount} viewers, Come join and chat with us!
                        <div className="notif-more-details" id="notifMoreDetails">
                            <img id="notifMoreDetailsImage" className="notif-more-details-image" src={image} alt=""/>
                            <p id="notifMoreDetailsText" style={{textAlign: 'center'}}>{title}</p>
                        </div>
                    </a>
                </div>
                <div className="notif-live-arrow" onClick={toggle}/>
                <div className="notif-live-arrow-container">
                    <span id="notifArrow" className="no-select">^</span>
                </div>
            </div>
        </abbr>
    );
}

function toggle() {
    if (window.animRunning) return;
    window.animRunning = true;
    const open = document.getElementById('notifArrow').style.transform === 'rotate(180deg)';
    document.getElementById('notifArrow').style.transform = open ? '' : 'rotate(180deg)';
    document.getElementById('notifMoreDetails').style.display = 'block';
    if (!open) {
        document.getElementById('notifMoreDetails').style.height = '0px';
        const imgHieght =  document.getElementById('notifMoreDetailsImage').getBoundingClientRect().height;
        const textHieght =  document.getElementById('notifMoreDetailsText').getBoundingClientRect().height;
        document.getElementById('notifMoreDetails').style.height = (10 + imgHieght + 16 + textHieght + 16) + 'px';
    } else {
        document.getElementById('notifMoreDetails').style.height = '0px';
    }
    setTimeout(() => {
        if (open) {
            document.getElementById('notifMoreDetails').style.display = 'none';
        }
        window.animRunning = false;
    }, 500);
}

export default class Notif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                live: false,
            },
            html: <></>,
        };
        this.live = false;
        this.mounted = false;
        this.status = {};
        this.fetch();
    }

    async fetch() {
        try {
            const status = await (await fetch('/api/twitch')).json();
            if (status.live) {
                this.live = true;
                this.status = status;
                if (this.mounted) {
                    this.setState({
                        status: this.status,
                        html: makeNotif(this.status.stats.viewers, this.status.stats.title, this.status.stats.image),
                    });
                }
            }
        } catch (e) {
            return;
        }
    }
    componentDidMount() {
        this.mounted = true;
        if (this.live) {
            this.setState({
                status: this.status,
                html: makeNotif(this.status.stats.viewers, this.status.stats.title, this.status.stats.image),
            });
        }
    }
    render() {
        return (
            <>
                {this.state.html}
            </>
        )
    }
}