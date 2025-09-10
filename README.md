# mimepost-js

A tiny and beginner-friendly Node.js SDK for the [MimePost](https://mimepost.com) API.

## Installation

```bash
npm install mimepost-js
```

## Usage

```javascript
const MimePostClient = require('mimepost-js');

const client = new MimePostClient({ apiToken: 'YOUR_API_TOKEN' });

// Send a transactional email
await client.sendEmail({
  template_uid: 'welcome_email',
  subject: 'Welcome!',
  from_email: 'from@example.com',
  to: [{ email: 'to@example.com' }]
});

// List templates
const templates = await client.listTemplates();

// Get a single template
const template = await client.getTemplate('welcome_email');
```

The SDK was created from the Postman collection in `postman.json`. Refer to that file or the official MimePost documentation for all available endpoints and parameters.
