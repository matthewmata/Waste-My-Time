const axios = require('axios')
const API_key = require('./config.js');

let getBbsFallingVideo = () => {
	return axios
		.get('https://www.googleapis.com/youtube/v3/search', {
			headers: {
        key: API_key.key,
        part: 'snippet',
        q: 'cats',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
		})
		.then(data => console.log(data))
		.catch(err => console.error(err))

}

module.exports = getBbsFallingVideo
getBbsFallingVideo();

let getBbsFallingVideo = () => {
	return axios
		.get('https://www.googleapis.com/youtube/v3/search', {
			headers: {
        key: API_key.key,
        part: 'snippet',
        q: 'cats',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
		})
		.then(data => console.log(data))
		.catch(err => console.error(err))
}


// const getReposByUsername = () => axios
//   .get(`https://api.github.com/users/matthewmata/repos`, {
//     headers: { Authorization: 'fba60a2c8a79f283a4dbf907a62f60f2e6aedfad' },
//   })
//   .then(data => console.log(data));

// module.exports.getReposByUsername = getReposByUsername;
// getReposByUsername();