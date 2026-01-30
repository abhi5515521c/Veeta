# Veetaa Netlify Deployment Guide

## 📋 Prerequisites
- GitHub account (✅ You have this)
- Netlify account (create one at https://www.netlify.com if you don't have it)
- Your repository pushed to GitHub (✅ Done: https://github.com/abhi5515521c/Veetaa)

## 🚀 Method 1: Deploy via Netlify UI (Recommended for Beginners)

### Step 1: Connect to Netlify
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select the repository: `abhi5515521c/Veetaa`

### Step 2: Configure Build Settings
Use these settings:
- **Base directory**: `veetaa-proto/veetaa-frontend`
- **Build command**: `npm install && npm run build`
- **Publish directory**: `veetaa-proto/veetaa-frontend/dist`
- **Node version**: 18 (set in netlify.toml already)

### Step 3: Deploy
1. Click "Deploy site"
2. Wait for the build to complete (2-5 minutes)
3. Your site will be live at: `https://random-name-12345.netlify.app`
4. You can customize the domain name in Site settings → Domain management

---

## 🔧 Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Initialize and Deploy
```bash
cd veetaa-proto/veetaa-frontend
netlify init
```

Follow the prompts:
- Choose "Create & configure a new site"
- Select your team
- Enter a site name (or leave blank for random)
- Build command: `npm run build`
- Publish directory: `dist`

### Step 4: Deploy
```bash
netlify deploy --prod
```

---

## ⚠️ Important Notes

### Backend Deployment Required
Your project has a **Python FastAPI backend** (`main_simple.py`, `scraper_service.py`).
Netlify **only hosts static sites** and cannot run Python backends.

You need to deploy the backend separately on:
- **Render**: https://render.com (Free tier available)
- **Railway**: https://railway.app (Free trial)
- **Vercel**: https://vercel.com (Serverless functions)
- **Fly.io**: https://fly.io (Free tier)

### Update API Endpoints
Once your backend is deployed, update the API endpoints in your frontend code to point to the backend URL.

---

## 🔄 Continuous Deployment
Once connected, any push to your `main` branch will automatically trigger a new deployment on Netlify!

---

## 🌐 Custom Domain (Optional)
After deployment, you can add a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

---

## 📝 Environment Variables
If your frontend needs environment variables:
1. Go to Site settings → Build & deploy → Environment
2. Add your variables (e.g., `VITE_API_URL=https://your-backend-url.com`)

---

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Backend Not Working
- Remember: You need to deploy the backend separately
- Update frontend API calls to use the deployed backend URL

### 404 Errors
- Make sure `netlify.toml` is in the repository root (✅ Done)
- The redirect rule in `netlify.toml` handles SPA routing

---

## 📚 Next Steps
1. Deploy frontend to Netlify (follow Method 1 or 2 above)
2. Deploy backend to Render/Railway
3. Update frontend code with backend API URL
4. Test the live application
5. Configure custom domain (optional)

## 🎉 Success!
Your Veetaa frontend will be live on Netlify with automatic deployments from GitHub!
