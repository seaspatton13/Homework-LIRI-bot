console.log('this is loaded');
// var env = require('dotenv').config();

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    api_key: process.env.OMDB_API_KEY
};


exports.bit = {
    api_id: process.env.BIT_API_ID
};