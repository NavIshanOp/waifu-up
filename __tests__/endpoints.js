const Client = require('../index.js');

// Create an instance of the Client class with the authorization token
const client = new Client('YOUR_AUTH_TOKEN');

// Test the getFact() method
client.getFact()
  .then((fact) => {
    console.log('Fact:', fact);
  })
  .catch((error) => {
    console.error('Error retrieving fact:', error);
  });

// Test the getWaifu() method
client.getWaifu()
  .then((waifu) => {
    console.log('Waifu:', waifu);
  })
  .catch((error) => {
    console.error('Error retrieving waifu:', error);
  });

// Test the getQuote() method
client.getQuote()
  .then((quote) => {
    console.log('Quote:', quote);
  })
  .catch((error) => {
    console.error('Error retrieving Quote:', error);
  });

  client.getAngry()
  .then((angry) => {
    console.log('Angry:', angry); // Corrected variable name here
  })
  .catch((error) => {
    console.error('Error retrieving Angry:', error);
  });

  client.getBaka()
  .then((baka) => {
    console.log('Baka:', baka); // Corrected variable name here
  })
  .catch((error) => {
    console.error('Error retrieving Angry:', error);
  });

  client.getYes()
  .then((yes) => {
    console.log('Yes:', yes); // Corrected variable name here
  })
  .catch((error) => {
    console.error('Error retrieving Angry:', error);
  });