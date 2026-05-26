# GHR Ventures - IONOS Deployment Guide

This guide covers multiple methods to deploy your Next.js website to IONOS hosting.

---

## Option 1: Static Export to IONOS Shared/Web Hosting (RECOMMENDED FOR SIMPLICITY)

This is the easiest method if you have IONOS shared hosting or web hosting.

### Step 1: Export as Static Site

On your local machine (after downloading the code):

```bash
# Navigate to project directory
cd app

# Install dependencies
yarn install

# Add export script to package.json
# Edit package.json and add to "scripts" section:
# "export": "next build && next export"

# Or run these commands:
npm run build
npx next export

# This creates an 'out' folder with static HTML/CSS/JS
```

### Step 2: Upload to IONOS

1. **Login to IONOS Control Panel**
   - Go to https://www.ionos.com/
   - Login to your account

2. **Access File Manager or FTP**
   - Navigate to "Hosting" section
   - Click "Manage" on your hosting package
   - Open "File Manager" or get FTP credentials

3. **Upload Files**
   - Upload all contents from the `out` folder to your public directory
   - Usually `/htdocs` or `/public_html`
   - **Important**: Upload the contents OF the out folder, not the folder itself

4. **Configure Domain**
   - Point your domain (ghrgrp.com) to the upload directory
   - In IONOS: Domains → Select your domain → Configure subdirectories

### Step 3: Configure .htaccess (for clean URLs)

Create a `.htaccess` file in your root directory:

```apache
# Enable rewrite engine
RewriteEngine On

# Redirect HTTP to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [L,R=301]
```

### ⚠️ Limitations of Static Export
- No server-side rendering (SSR)
- No API routes (the contact forms won't work)
- No dynamic server functions

Since your forms just display contact info now, this works perfectly!

---

## Option 2: Deploy to IONOS VPS/Cloud Server (FULL NEXT.JS FEATURES)

If you have an IONOS VPS or Cloud Server, you can run the full Next.js application.

### Step 1: Set Up IONOS VPS

1. **Access Your VPS**
   ```bash
   ssh root@your-server-ip
   ```

2. **Update System**
   ```bash
   apt update && apt upgrade -y
   ```

3. **Install Node.js**
   ```bash
   # Install Node.js 18.x (LTS)
   curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
   apt install -y nodejs
   
   # Verify installation
   node --version
   npm --version
   
   # Install yarn
   npm install -g yarn
   ```

### Step 2: Upload and Configure Application

1. **Upload Your Code**
   ```bash
   # Option A: Use SCP from your local machine
   scp ghr-ventures-code.tar.gz root@your-server-ip:/var/www/
   
   # Option B: Use Git
   cd /var/www
   git clone your-repository-url
   ```

2. **Extract and Install**
   ```bash
   cd /var/www
   tar -xzf ghr-ventures-code.tar.gz
   cd app
   yarn install
   ```

3. **Configure Environment**
   ```bash
   # Edit .env file
   nano .env
   
   # Update NEXT_PUBLIC_BASE_URL to your domain:
   NEXT_PUBLIC_BASE_URL=https://www.ghrgrp.com
   ```

4. **Build Production Version**
   ```bash
   yarn build
   ```

### Step 3: Install and Configure PM2 (Process Manager)

```bash
# Install PM2
npm install -g pm2

# Start Next.js with PM2
pm2 start yarn --name "ghr-ventures" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

### Step 4: Configure Nginx as Reverse Proxy

1. **Install Nginx**
   ```bash
   apt install -y nginx
   ```

2. **Create Nginx Configuration**
   ```bash
   nano /etc/nginx/sites-available/ghrgrp.com
   ```

3. **Add This Configuration**
   ```nginx
   server {
       listen 80;
       server_name ghrgrp.com www.ghrgrp.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

4. **Enable Site and Restart Nginx**
   ```bash
   ln -s /etc/nginx/sites-available/ghrgrp.com /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   ```

### Step 5: Configure SSL with Let's Encrypt

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d ghrgrp.com -d www.ghrgrp.com

# Auto-renewal is set up automatically
```

### Step 6: Configure Firewall

```bash
# Allow HTTP, HTTPS, and SSH
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
```

---

## Option 3: Use Vercel + IONOS Domain (EASIEST & BEST PERFORMANCE)

Vercel is made by the creators of Next.js and offers the best performance.

### Step 1: Deploy to Vercel

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy Your Project**
   - Click "Add New Project"
   - Upload your code or connect GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add your environment variables from .env file

### Step 2: Point IONOS Domain to Vercel

1. **Get Vercel DNS Records**
   - In Vercel: Project Settings → Domains
   - Add your domain: ghrgrp.com
   - Vercel will show DNS records to add

2. **Update IONOS DNS**
   - Login to IONOS control panel
   - Go to Domains → Select ghrgrp.com → DNS Settings
   - Add the A and CNAME records provided by Vercel
   
   **Typical records:**
   ```
   Type: A
   Host: @
   Value: 76.76.21.21 (Vercel's IP - check your dashboard)
   
   Type: CNAME
   Host: www
   Value: cname.vercel-dns.com
   ```

3. **Verify Domain**
   - Back in Vercel, click "Verify"
   - DNS propagation can take 5-60 minutes
   - Vercel will automatically configure SSL

### Benefits of This Method:
- ✅ Automatic deployments on code changes
- ✅ Global CDN for fast loading worldwide
- ✅ Automatic SSL certificates
- ✅ Zero server maintenance
- ✅ Free for personal/commercial projects

---

## Option 4: IONOS Deploy Now

IONOS offers "Deploy Now" for static sites and some frameworks.

1. **Check if Available**
   - Login to IONOS
   - Look for "Deploy Now" in your dashboard
   - Check if Next.js is supported

2. **Connect Repository**
   - Connect your GitHub/GitLab repository
   - Configure build settings
   - Deploy

---

## Recommended Approach

**For GHR Ventures, I recommend:**

### If You Want Simplicity:
→ **Option 1 (Static Export)** - Works great since your site is mostly static now with contact info only

### If You Want Best Performance:
→ **Option 3 (Vercel + IONOS Domain)** - Professional hosting, zero maintenance, free tier available

### If You Need Full Control:
→ **Option 2 (IONOS VPS)** - Complete control, good if you have other apps to host

---

## DNS Configuration Reference

Regardless of hosting method, here's how to configure DNS at IONOS:

1. **Login to IONOS**
2. **Navigate to**: Domains → Your domain (ghrgrp.com) → DNS
3. **Add/Edit Records**:

**For IONOS hosting:**
```
A Record: @ → Your IONOS server IP
A Record: www → Your IONOS server IP
```

**For Vercel:**
```
A Record: @ → Vercel IP (76.76.21.21)
CNAME: www → cname.vercel-dns.com
```

---

## Testing After Deployment

1. **Check DNS Propagation**
   - Visit: https://www.whatsmydns.net/
   - Enter: ghrgrp.com
   - Verify it points to correct IP/server

2. **Test Website**
   - Visit: https://www.ghrgrp.com
   - Test all pages:
     - Main landing page
     - /construction, /management, /equities
     - All navigation links
     - Contact pages

3. **Check SSL Certificate**
   - Look for padlock icon in browser
   - Certificate should be valid and trusted

---

## Troubleshooting

### Site Not Loading
- Check DNS propagation (can take up to 48 hours)
- Verify firewall rules allow HTTP/HTTPS
- Check server/service is running: `pm2 status`

### 404 Errors
- Verify .htaccess configuration (static hosting)
- Check Nginx configuration (VPS)
- Ensure all files uploaded correctly

### Slow Performance
- Enable caching in Nginx
- Use CDN (Cloudflare with IONOS domain)
- Optimize images

---

## Support

**IONOS Support:**
- Phone: 1-866-991-2631
- Help Center: https://www.ionos.com/help

**Need Help?**
Let me know which deployment method you choose and I can provide more specific guidance!

---

**Quick Start Recommendation:**
1. Download code from: https://ghr-multi-brand.preview.emergentagent.com/ghr-ventures-code.tar.gz
2. Choose **Option 3 (Vercel)** for fastest setup
3. Point your IONOS domain to Vercel
4. Done in ~15 minutes! ✅
