const accountSid = 'your accountSID';
const authToken = 'your token';
const client = require('twilio')(accountSid, authToken);

try {
    client.messages
    .create({
     body: 'This is a test from Christian Retana?',
     from: '+19163419322',
     to: '+1123456789'
   })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err));
} catch (error) {
    console.log(error);
}
