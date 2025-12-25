# FAC Email Backend Service

This is the backend service for handling contact form submissions from the FAC Company Profile website.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your Mailtrap credentials or SMTP credentials

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### POST /send
Sends an email with the contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+966 123456789",
  "companyName": "ABC Company",
  "service": "Talent Acquisition",
  "message": "I would like to inquire about your services",
  "lang": "en"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## Configuration

### Using Mailtrap (for testing)
1. Create a free account at [Mailtrap.io](https://mailtrap.io)
2. Get your credentials from the inbox settings
3. Add them to `.env`:
```
MAILTRAP_USER=your_username
MAILTRAP_PASS=your_password
```

### Using Gmail (for production)
1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password
3. Update `server.js` to use Gmail:
```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
```

## Email Template

The email template is located in `email-template.html`. You can customize it to match your branding.

## CORS Configuration

The server is configured to accept requests from any origin. For production, update the CORS configuration in `server.js` to only allow your frontend domain:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```
