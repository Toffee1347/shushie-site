import fetch from "node-fetch";

export let videos = [];

async function fetchVideos() {
    const channel = (await fetch(`https://www.googleapis.com/youtube/v3/channels?key=${process.env.YOUTUBE_API_KEY}&id=UCFphCAt9jZfJu-txxUjko2A&part=contentDetails`)).json();
    const playlist = (await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=${channel.items[0].contentDetails.relatedPlaylists.uploads}&part=snippet&maxResults=50`)).json();
    
}