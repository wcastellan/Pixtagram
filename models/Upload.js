const cloudinary = require('cloudinary').v2;
require('../public/javascript/upload');
const apiSecret = cloudinary.config().api_secret;

// server-side function used to sign an Uplad widget upload
const Upload = () => {
    const timestamp = Math.round((new Date).getTime()/1000);

    const signature = cloudinary.utils.api_sign_request({
        timestamp: timestamp,
        source: 'uw',
        folder: 'sample'}, apiSecret);
        
        return { timestamp, signature }
    }


module.exports = { Upload };
