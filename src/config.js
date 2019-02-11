/**
 * @description replace the 'XXXXXXXXXXXXXXXX' with your API keys
 * @link https://twitter.com
 */
// module.exports = {
//   consumer_key: 'XXXXXXXXXXXXXXXX',  
//   consumer_secret: 'XXXXXXXXXXXXXXXX',
//   access_token_key: 'XXXXXXXXXXXXXXXX',  
//   access_token_secret: 'XXXXXXXXXXXXXXXX'
// }



module.exports = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}
