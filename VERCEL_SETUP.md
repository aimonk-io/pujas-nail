# Vercel Serverless Function Setup

## ✅ **What's Been Created:**

1. **`/api/appointment.js`** - Main appointment submission handler
2. **`/api/test.js`** - Test endpoint to verify API is working
3. **`vercel.json`** - Vercel configuration
4. **Updated form** - Now submits to `/api/appointment`

## 🔧 **Setup Steps:**

### 1. **Deploy to Vercel**
```bash
vercel --prod
```

### 2. **Set Environment Variables**
In your Vercel dashboard, go to Settings → Environment Variables and add:

**For Email Functionality:**
- `EMAIL_USER` = Your Gmail address (e.g., `your-email@gmail.com`)
- `EMAIL_PASS` = Your Gmail app password

**To get Gmail App Password:**
1. Go to Google Account settings
2. Enable 2-factor authentication
3. Generate an app password for "Mail"
4. Use that password as `EMAIL_PASS`

### 3. **Test the API**
Visit: `https://your-domain.vercel.app/api/test`
Should return: `{"message":"API is working!","timestamp":"...","method":"GET"}`

## 🎯 **Features:**

### **Appointment API (`/api/appointment`):**
- ✅ Validates required fields
- ✅ Processes discount codes (FIRST10C = 10% off)
- ✅ Sends email to business owner
- ✅ Sends confirmation email to client
- ✅ Handles errors gracefully
- ✅ Works without email credentials (just logs)

### **Email Features:**
- **Business Email**: Sent to `pujabarmanb9@gmail.com`
- **Client Email**: Sent to the email provided in the form
- **Discount Info**: Shows if discount was applied
- **Contact Info**: Updated phone number (+91 8101267975)

## 🔍 **Testing:**

1. **Test API**: `GET /api/test`
2. **Test Form**: Submit appointment form
3. **Check Logs**: Vercel dashboard → Functions → Logs

## 🚨 **Troubleshooting:**

### **If emails don't send:**
- Check environment variables are set
- Verify Gmail app password is correct
- Check Vercel function logs

### **If form submission fails:**
- Check browser console for errors
- Verify API endpoint is accessible
- Check Vercel function logs

### **If you get 405 errors:**
- Make sure you're using POST method
- Check the API route is correct

## 📧 **Email Templates:**

The API sends two emails:

1. **Business Notification** - To `pujabarmanb9@gmail.com`
2. **Client Confirmation** - To the client's email

Both include:
- Appointment details
- Discount code status
- Contact information

## 🎉 **Success!**

Once deployed and configured, your form will:
- ✅ Submit to Vercel serverless function
- ✅ Send emails (if configured)
- ✅ Process discount codes
- ✅ Show appropriate success/error messages
- ✅ Work in production on Vercel 