# Email Setup Guide

## 🎯 Current Status
✅ **API Fixed**: The 500 error has been resolved
✅ **Form Working**: Appointments are being received and logged
🔄 **Email Pending**: Email functionality is ready but needs configuration

## 📧 Email Configuration Steps

### 1. Gmail App Password Setup
1. Go to your Google Account Settings: https://myaccount.google.com/
2. Enable **2-Factor Authentication** if not already enabled
3. Go to **Security** → **App passwords**
4. Select **Mail** as the app and **Other** as device
5. Generate the app password
6. Copy the 16-character password

### 2. Environment Variables
Create a `.env` file in your project root:

```bash
# Email Configuration
EMAIL_USER=pujanailstudio@gmail.com
EMAIL_PASS=PujaNails@2100
```

### 3. Enable Email Functionality
Uncomment the email code in `server/routes/appointment.ts`:

```typescript
// Remove the TODO comment and uncomment these lines:
const emailResult = await sendAppointmentEmails({
  name,
  phone,
  email,
  service,
  date,
  time,
  message
});

if (!emailResult.success) {
  console.error("Email sending failed:", emailResult.error);
  return res.status(500).json({
    success: false,
    message: "Failed to send confirmation emails. Please try again.",
  });
}
```

## 🧪 Testing

### Current Test (Working)
```bash
curl -X POST http://localhost:8080/api/appointment \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "phone":"1234567890",
    "email":"test@example.com",
    "service":"Test Service",
    "date":"2024-01-01",
    "time":"10:00"
  }'
```

**Response**: `{"success":true,"message":"Appointment submitted successfully!"}`

### After Email Setup
The same request will:
1. ✅ Log the booking
2. 📧 Send email to pujabarmanb9@gmail.com
3. 📧 Send confirmation to client's email

## 🔧 Troubleshooting

### Common Issues:
1. **"Invalid credentials"**: Check your app password
2. **"Less secure app access"**: Use app password, not regular password
3. **"Rate limit exceeded"**: Gmail has daily sending limits

### Debug Steps:
1. Check server console for error messages
2. Verify environment variables are loaded
3. Test email credentials manually

## 📱 Alternative: Calendly Integration

Since Calendly is already integrated, you can also:
- Use Calendly for booking management
- Keep the form for backup/contact purposes
- Calendly handles email notifications automatically

## 🎯 Next Steps

1. **Set up Gmail app password**
2. **Create .env file with credentials**
3. **Uncomment email code**
4. **Test with real email addresses**
5. **Monitor email delivery**

---

**Note**: The form is now working correctly. Email functionality is optional and can be enabled when needed. 