import express from 'express';
import http from 'http';
import fs from 'fs';
import { shushieChannel } from './twitch.js';

const app = express();
export const server = http.createServer(app);

const pages = ['/'];
const __dirname = import.meta.url.replace('/server/server.js', '').replace('file:///', '');

app.use((req, res, next) => {
    const subDomain = req.get('Host').split('.')[0];
    if ((req.get('X-Forwarded-Proto') !== 'https' && req.get('Host') === 'shushie16.com') || req.get('Host') === 'www.shushie16.com' || req.get('Host') === 'shushie16.herokuapp.com') return res.redirect(`https://shushie16.com${req.url}`);
    else if (subDomain === 'yt' || subDomain === 'youtube') res.redirect('https://www.youtube.com/channel/UCFphCAt9jZfJu-txxUjko2A');
    else if (subDomain === 'instagram') res.redirect('https://www.instagram.com/shushie_16');
    else if (subDomain === 'twitch') res.redirect('https://twitch.tv/shushie16');
    else if (subDomain === 'twitter') res.redirect('https://twitter.com/Shushie_16');
    else next();
});

app.get('*', async (req, res) => {
    let url = req.url.split('?')[0];
    let file;

    if (url === '/utils.json') {
        return res.status(200).json(shushieChannel);
    }
    else {
        if (pages.includes(url)) {
            file = `./build/index.html`
        }
        else {
            return res.status(404).sendFile(`${__dirname}/build/index.html`);
        };
    };

    let fileExists = fs.existsSync(file);
    res.status(fileExists ? 200 : 404);
    res.sendFile(fileExists ? `${__dirname}${file.replace('.', '')}` : `${__dirname}/build/index.html`);
});


server.listen(process.env.PORT || 80, () => console.log(`Server opened on port ${process.env.PORT || 80}`));