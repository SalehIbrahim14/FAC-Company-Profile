# FAC Company Profile - Complete Setup

## Project Structure
- `src/` - Angular frontend application
- `backend/` - Node.js email backend service

## Quick Start

### 1. Frontend Setup (Angular)
```bash
# Install dependencies
npm install

# Start development server
npm start
```

The frontend will run on `http://localhost:4200`

### 2. Backend Setup (Node.js Email Service)

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit backend/.env and add your email credentials

# Start the server
npm start
```

The backend will run on `http://localhost:3000`

## Email Service Configuration

### Option 1: Using Mailtrap (Recommended for Testing)
1. Create a free account at [Mailtrap.io](https://mailtrap.io)
2. Get your credentials from the inbox settings
3. Update `backend/.env`:
```env
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
```

### Option 2: Using Gmail (For Production)
1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password
3. Update `backend/server.js` transporter configuration:
```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-specific-password'
  }
});
```

## Running Both Services

### Terminal 1 - Backend:
```bash
cd backend
npm start
```

### Terminal 2 - Frontend:
```bash
npm start
```

## Features

### Contact Form
- Name (required)
- Email (required)
- Phone
- Company Name
- Service (dropdown with 7 HR service options)
- Message (required)

### Available Services:
1. Talent Acquisition / اكتساب المواهب
2. Performance Management / إدارة الأداء
3. Compensation & Benefits / التعويضات والمزايا
4. Organizational Development / التطوير التنظيمي
5. Training & Development / التدريب والتطوير
6. HR Compliance & Policy / الامتثال والسياسات في الموارد البشرية
7. Other / أخرى

### Email Features:
- Bilingual support (Arabic/English)
- Service selection from dropdown
- HTML email templates
- Form validation
- Success/error notifications

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure:
1. Backend is running on port 3000
2. Frontend is running on port 4200
3. CORS is enabled in `backend/server.js`

### Email Not Sending
1. Check your `.env` credentials
2. Verify the email service configuration
3. Check server logs in the backend terminal
4. Ensure backend server is running

## Production Deployment

### Frontend (Angular)
```bash
npm run build
```
Deploy the `dist/` folder to your hosting service.

### Backend (Node.js)
1. Update CORS to allow only your domain
2. Use production email service (not Mailtrap)
3. Update the API URL in `src/app/services/email.service.ts`
4. Deploy to Node.js hosting (Heroku, DigitalOcean, AWS, etc.)

## Environment Variables

Create `backend/.env` with:
```env
MAILTRAP_USER=your_username
MAILTRAP_PASS=your_password

# Or for production SMTP
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password
```
