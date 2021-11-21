import TwitchApi from 'node-twitch';

const twitch = new TwitchApi.default({
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
});

export let shushieChannel = {
    live: false,
    stats: {
        viewers: 0,
        title: '',
    },
}

async function run() {
    const channel = await twitch.getStreams({channel: 'rocketleague'});
    const stream = channel.data[0];
    if (stream === undefined) {
        shushieChannel = {
            live: false,
            stats: {
                viewers: 0,
                title: '',
            },
        }
        return;
    }
    if (stream.type === 'live') {
        shushieChannel.live = true;
        shushieChannel.stats.viewers = stream.viewer_count;
        shushieChannel.stats.title = stream.title;
    }
}

run();
setInterval(run, 60000);