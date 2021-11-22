import React from 'react';

function makeNotif(viewerCount, title) {
    return (
        <abbr title={title}>
            <a target="_blank" rel="noreferrer" href="https://twitch.tv/shushie16">
                <div className="notif-live">
                    <span style={{color: 'red'}}>&#128308;</span> I'm Live on twitch with {viewerCount} viewers, Come join and chat with us!
                </div>
            </a>
        </abbr>
    );
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
                        html: makeNotif(this.status.stats.viewers, this.status.stats.title),
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
                html: makeNotif(this.status.stats.viewers, this.status.stats.title),
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