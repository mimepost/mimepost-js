# mimepost-js

A tiny and beginner-friendly Node.js SDK for the [MimePost](https://mimepost.com) API.

## Installation

```bash
npm install @mimepost/mimepost-js
```

## Usage

```javascript
//import
const MimePost = require('@mimepost/mimepost-js');
//OR 
//import MimePost from '../src/index.js';

const client = new MimePost({
  apiToken: 'YOUR_API_KEY'
});

async function run() {
  try {
    const response = await client.sendEmail({
      template_uid: 'welcome_email_test',
      subject:      'Test Mail Node SDK using MimePost Client!',
      from_name:    'Your Sender Name',
      from_email:   'info@example.com',
      to: [{ email: 'to@example.com' }]
    }); 

    console.log('Send Email Response:', response); // <— print success
  } catch (err) {
    console.error('Error sending email:', err);     // <— print error
  }
}

run();


// List templates
//const templates = await client.listTemplates();

// Get a single template
//const template = await client.getTemplate('welcome_email');

```

The SDK was created from the Postman collection in `postman.json`. Refer to that file or the official MimePost documentation for all available endpoints and parameters.
