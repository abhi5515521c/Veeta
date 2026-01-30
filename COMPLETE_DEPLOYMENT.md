# 🚀 Veetaa Complete Deployment Guide

## Overview
This guide will help you deploy **both frontend and backend** for a fully functional Veetaa application.

---

## Part 1: Deploy Backend (Python FastAPI) to Render

### Step 1: Push Backend Files to GitHub
Your backend is already in the GitHub repository at `veetaa-proto/` folder.

### Step 2: Deploy on Render
1. Go to https://render.com and sign up/login (use GitHub to login)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: **`abhi5515521c/Veetaa`**
4. Configure the service:
   - **Name**: `veetaa-backend`
   - **Root Directory**: `veetaa-proto`
   - **Runtime**: **Python 3**
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main_simple:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: **Free**

5. **Environment Variables** (IMPORTANT!):
   Click "Advanced" and add these environment variables:
   ```
   FIRECRAWL_API_KEY=<your-firecrawl-key>
   OPENAI_API_KEY=<your-openai-key>
   ```
   (Get these from your `.env` file in `veetaa-proto/.env`)

6. Click **"Create Web Service"**
7. Wait 5-10 minutes for deployment
8. **Copy your backend URL** (will be like: `https://veetaa-backend.onrender.com`)

---

## Part 2: Deploy Frontend to Netlify

### Option A: Using Netlify Drop (Fastest - Already Prepared!)

1. Your deployment package is ready at:
   ```
   c:\Users\sande\Desktop\Veetaa_main\veetaa-proto\veetaa-frontend\veetaa-deploy.zip
   ```

2. **BEFORE deploying**, update the API URL in `index.html`:
   - Open `veetaa-proto/veetaa-frontend/index.html`
   - Find line 324: `const API_BASE = "http://localhost:8001";`
   - Replace with your Render backend URL: `const API_BASE = "https://veetaa-backend.onrender.com";`
   - Rebuild: Run `npm run build` in `veetaa-proto/veetaa-frontend/`
   - Re-create the zip from the new `dist` folder

3. Go to: **https://app.netlify.com/drop**
4. Drag and drop the updated `veetaa-deploy.zip`
5. Get your live URL!

### Option B: Connect GitHub to Netlify (Recommended - Auto-deploy on push)

1. Go to https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select **`Veetaa`** repository
4. Configure build settings:
   - **Base directory**: `veetaa-proto/veetaa-frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `veetaa-proto/veetaa-frontend/dist`

5. **Environment Variables**:
   Add this in Netlify:
   ```
   VITE_API_URL=https://veetaa-backend.onrender.com
   ```

6. Click **"Deploy site"**

---

## Part 3: Connect Frontend to Backend

### Update the Frontend Code:

Edit `veetaa-proto/veetaa-frontend/index.html` line 324:

**Change from:**
```javascript
const API_BASE = "http://localhost:8001";
```

**Change to:**
```javascript
const API_BASE = "https://veetaa-backend.onrender.com"; // Your actual Render URL
```

Then rebuild and redeploy:
```bash
cd veetaa-proto/veetaa-frontend
npm run build
```

If using Netlify GitHub integration, just push to GitHub:
```bash
git add .
git commit -m "Update API base URL for production"
git push origin main
```

---

## Deployment Summary

After completing all steps:

| Component | Platform | URL |
|-----------|----------|-----|
| **Frontend** | Netlify | `https://your-site.netlify.app` |
| **Backend** | Render | `https://veetaa-backend.onrender.com` |
| **GitHub Repo** | GitHub | `https://github.com/abhi5515521c/Veetaa` |

---

## Quick Checklist

- [ ] Backend deployed on Render
- [ ] Backend URL copied
- [ ] Environment variables (FIRECRAWL_API_KEY, OPENAI_API_KEY) added to Render
- [ ] Frontend `index.html` updated with backend URL
- [ ] Frontend rebuilt (`npm run build`)
- [ ] Frontend deployed to Netlify
- [ ]  Test the live site!

---

## Testing Your Deployment

1. Visit your Netlify URL
2. Check the status indicator (should show "System Online")
3. Try searching for a product (e.g., "iPhone 15")
4. Verify price results load correctly
5. Test the "Deep Inspection" feature

---

## Troubleshooting

### Frontend shows "System Offline"
- Check if backend URL is correct in `index.html`
- Verify Render backend is running (visit backend URL directly)
- Check browser console for CORS errors

### Backend not responding
- Check Render logs for errors
- Verify environment variables are set correctly
- Ensure requirements.txt has all dependencies

### "No results found"
- Verify FIRECRAWL_API_KEY is set correctly in Render
- Check backend logs on Render dashboard
- Test backend directly: `https://your-backend.onrender.com/api/health`

---

## Free Tier Limitations

**Render Free Tier:**
- Backend spins down after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- 750 hours/month

**Netlify Free Tier:**
- 100GB bandwidth/month
- Unlimited deployments
- Instant loading

---

## Next Steps

1. Get a custom domain (optional)
2. Set up monitoring and analytics
3. Add more marketplaces to scraper
4. Implement caching for better performance

---

## Support

If you encounter issues:
1. Check Render logs: `https://dashboard.render.com`
2. Check Netlify deploy logs: `https://app.netlify.com`
3. Review browser console for frontend errors
4. Test backend health endpoint: `/api/health`

---

**Congratulations! Your Veetaa app is now live! 🎉**
