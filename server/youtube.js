import fetch from "node-fetch";

export let videos = [];

async function fetchVideos() {
    const playlist = await (await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=UUFphCAt9jZfJu-txxUjko2A&part=snippet&maxResults=50`)).json();
    videos = [];
    playlist.items.forEach(item => {
        videos.push({
            title: item.snippet.title,
            id: item.snippet.resourceId.videoId,
            thumbnail: item.snippet.thumbnails.medium.url,
            timestamp: new Date(item.snippet.publishedAt).getTime(),
            description: item.snippet.description,
        });
    });
}

fetchVideos();
setInterval(fetchVideos, 60000);