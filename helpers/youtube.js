const axios = require('axios')
const API_key = require('./config.js');

// let getBbsFallingVideo = () => {
// 	return axios
// 		.get('https://www.googleapis.com/youtube/v3/search', {
// 			data: {
// 				'maxResults': 1,
// 				'part': 'snippet',
// 				'q': 'Babies falling down',
// 				'type': 'video',
// 				'key': API_key
// 			}
// 		})
// 		.then(data => console.log(data))
// 		.catch(err => console.error(err))

// }

// getBbsFallingVideo();

// const getReposByUsername = ()=> axios
//   .get(`https://api.github.com/users/matthewmata/repos`, {
//     headers: { Authorization: 'fba60a2c8a79f283a4dbf907a62f60f2e6aedfad' },
//   }).then(data => console.log(data));

// module.exports.getReposByUsername = getReposByUsername;
// getReposByUsername();