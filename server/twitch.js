import TwitchApi from 'node-twitch';

const twitch = new TwitchApi.default({
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
});

export let channel = {
    live: false,
    stats: {
        viewers: 0,
        title: '',
    },
}

async function run() {
    const twitchChannel = await twitch.getStreams({channel: 'harry'});
    const stream = twitchChannel.data[0];
    if (stream === undefined) {
        channel = {
            live: false,
            stats: {
                viewers: 0,
                title: '',
                image: ''
            },
        }
        return;
    }
    if (stream.type === 'live') {
        channel.live = true;
        channel.stats.viewers = stream.viewer_count;
        channel.stats.title = stream.title;
        channel.stats.image = stream.getThumbnailUrl();
    }
}

run();
setInterval(run, 60000);