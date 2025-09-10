//import
const MimePost = require('@mimepost/mimepost-js');
//OR 
//import MimePost from '../src/index.js';

const client = new MimePost({
  apiToken: 'YOUR_API_TOKEN'
});

async function run() {
  try {
    const response = await client.sendEmail({
      template_uid: 'welcome_email_test',
      subject:      'Test Mail using MimePost Client!',
      from_name:    'Your Sender Name',
      from_email:   'sender@example.com',
      to: [{ email: 'to@example.com' }]
    });

    console.log('Send Email Response:', response); // <— print success
  } catch (err) {
    console.error('Error sending email:', err);     // <— print error
  }
}

run();

