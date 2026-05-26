# Deploy GHR Ventures to IONOS Shared Hosting - Complete Walkthrough

This guide will walk you through exporting your Next.js site as static HTML and uploading to IONOS.

---

## Prerequisites

- ✅ IONOS shared hosting or web hosting account
- ✅ Your code downloaded from: https://ghr-multi-brand.preview.emergentagent.com/ghr-ventures-code.tar.gz
- ✅ Node.js installed on your computer (to build the site)

---

## Part 1: Prepare Your Site for Static Export (10 minutes)

### Step 1: Extract Your Code

1. **Download the code** (if you haven't already)
   - Link: https://ghr-multi-brand.preview.emergentagent.com/ghr-ventures-code.tar.gz

2. **Extract the archive**
   - **Windows**: Right-click → Extract All
   - **Mac**: Double-click the .tar.gz file
   - **Linux**: `tar -xzf ghr-ventures-code.tar.gz`

3. **Open Terminal/Command Prompt**
   - **Windows**: Press `Win + R`, type `cmd`, press Enter
   - **Mac**: Press `Cmd + Space`, type "Terminal", press Enter
   - **Linux**: Press `Ctrl + Alt + T`

4. **Navigate to the app folder**
   ```bash
   cd path/to/extracted/app
   # Example on Windows: cd C:\Users\YourName\Downloads\app
   # Example on Mac: cd ~/Downloads/app
   ```

---

### Step 2: Install Dependencies

In the terminal, run:

```bash
npm install
```

**Or if you have Yarn:**
```bash
yarn install
```

This will take 2-5 minutes. You'll see a progress bar.

**Wait until you see:**
```
added 350 packages in 2m
```

---

### Step 3: Update Configuration for Static Export

We need to tell Next.js to export as static HTML.

1. **Open `next.config.js` in a text editor**
   - Use Notepad (Windows), TextEdit (Mac), or any code editor
   - File location: `app/next.config.js`

2. **Replace the entire content with this:**

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

3. **Save the file**

**What this does:**
- `output: 'export'` - Tells Next.js to create static HTML files
- `images: { unoptimized: true }` - Allows images to work without Next.js image optimization
- `trailingSlash: true` - Ensures clean URLs work properly

---

### Step 4: Build the Static Site

In the terminal, run:

```bash
npm run build
```

**This will:**
1. Compile your Next.js code
2. Generate static HTML files
3. Create an `out` folder with everything needed

**You should see:**
```
✓ Generating static pages (18/18)
✓ Finalizing page optimization
Export successful. Files written to /path/to/app/out
```

**Time:** 2-3 minutes

---

### Step 5: Verify the Output

1. **Check that the `out` folder was created**
   - Look in your `app` folder
   - You should see a new folder named `out`

2. **Check the contents**
   ```bash
   ls out
   # or on Windows:
   dir out
   ```

   You should see:
   ```
   index.html
   construction/
   management/
   equities/
   _next/
   404.html
   ```

**✅ Your static site is ready!**

---

## Part 2: Upload to IONOS (15 minutes)

### Method A: Using IONOS File Manager (Easier)

#### Step 1: Login to IONOS

1. **Go to IONOS**
   - Visit: https://www.ionos.com
   - Click "Login" (top right)

2. **Login with your credentials**
   - Enter your email and password
   - Click "Login"

#### Step 2: Access File Manager

1. **Go to Hosting**
   - From the IONOS dashboard, look for "Hosting" or "Web Hosting"
   - Click on it

2. **Select Your Package**
   - Find your hosting package (the one for ghrgrp.com)
   - Click "Manage" or "Overview"

3. **Open File Manager**
   - Look for "File Manager" button
   - Click to open it
   - A new window will open showing your files

#### Step 3: Navigate to Public Directory

1. **Find your public directory**
   - Usually named: `htdocs` or `public_html` or `/`
   - This is where your website files go
   - Double-click to open it

2. **Clear existing files (if any)**
   - If there are old files, you may want to back them up first
   - Select all files
   - Delete them (or move to a backup folder)

#### Step 4: Upload Your Site

1. **Upload the contents of the `out` folder**
   
   **IMPORTANT**: Upload the **CONTENTS** of the `out` folder, NOT the `out` folder itself.

2. **In File Manager:**
   - Click "Upload" button
   - Navigate to your `app/out` folder on your computer
   - Select **ALL** files and folders inside `out`:
     - `index.html`
     - `construction` folder
     - `management` folder
     - `equities` folder
     - `_next` folder
     - `404.html`
     - Any other files

3. **Click Upload**
   - The upload will begin
   - **Time:** 5-10 minutes depending on your internet speed
   - You'll see a progress bar

4. **Wait for completion**
   - Make sure all files are uploaded
   - Don't close the browser until it says "Upload complete"

---

### Method B: Using FTP (Advanced Users)

#### Step 1: Get FTP Credentials

1. **In IONOS Dashboard**
   - Go to Hosting → Your package → FTP Access
   - Note down:
     - **FTP Server**: ftp.yourdomain.com
     - **Username**: Your FTP username
     - **Password**: Your FTP password
     - **Port**: Usually 21

#### Step 2: Download FTP Client

If you don't have one, download **FileZilla** (free):
- Visit: https://filezilla-project.org/
- Download and install

#### Step 3: Connect via FTP

1. **Open FileZilla**

2. **Enter credentials at the top:**
   - Host: `ftp.yourdomain.com` (or IP address from IONOS)
   - Username: Your FTP username from IONOS
   - Password: Your FTP password
   - Port: `21`

3. **Click "Quickconnect"**
   - FileZilla will connect to your server
   - You'll see your server files on the right side

#### Step 4: Upload Files

1. **On the left side (local):**
   - Navigate to your `app/out` folder
   - You should see all your site files

2. **On the right side (server):**
   - Navigate to `htdocs` or `public_html`
   - This is your web root

3. **Upload everything:**
   - Select **ALL** files in the `out` folder (left side)
   - Right-click → "Upload"
   - Or drag and drop to the right side

4. **Wait for upload to complete**
   - Watch the transfer queue at the bottom
   - All files should turn green when done

---

## Part 3: Configure for Clean URLs (5 minutes)

To make URLs work properly (without .html extensions), we need to add a `.htaccess` file.

### Step 1: Create .htaccess File

1. **Create a new file** on your computer
   - Use Notepad (Windows) or TextEdit (Mac)
   - Name it: `.htaccess` (note the dot at the start)

2. **Add this content:**

```apache
# Enable rewrite engine
RewriteEngine On

# Force HTTPS (redirect HTTP to HTTPS)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

# Serve index.html for directories
DirectoryIndex index.html

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Custom error pages
ErrorDocument 404 /404.html

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

3. **Save the file**
   - Make sure it's named `.htaccess` (with the dot!)
   - On Windows, you might need to save as "All Files" type

### Step 2: Upload .htaccess

1. **Upload to your web root**
   - Using File Manager or FTP
   - Place it in the same directory as `index.html`
   - Usually `htdocs` or `public_html`

2. **Verify it's there**
   - You should see `.htaccess` in your file list
   - It might be hidden - enable "Show hidden files" if needed

---

## Part 4: Point Domain to Hosting (If Needed)

If your domain isn't already pointing to your IONOS hosting:

### Step 1: Find Your Hosting IP

1. **In IONOS Dashboard**
   - Go to Hosting → Your package
   - Look for "Technical Details" or "Server Information"
   - Note the **IP Address** (e.g., 123.45.67.89)

### Step 2: Update DNS

1. **Go to Domains**
   - In IONOS Dashboard → Domains & SSL
   - Click on `ghrgrp.com`

2. **Click DNS Settings**

3. **Update A Record**
   - Type: `A`
   - Name/Host: `@` (or leave blank)
   - Points to: Your hosting IP address
   - TTL: `3600`

4. **Update WWW Record**
   - Type: `CNAME`
   - Name/Host: `www`
   - Points to: `ghrgrp.com` (or your hosting IP)
   - TTL: `3600`

5. **Save changes**

**Note:** DNS changes take 5 minutes to 48 hours to propagate (usually 30 minutes)

---

## Part 5: Test Your Website (5 minutes)

### Step 1: Clear Browser Cache

1. **Clear your browser cache**
   - Press `Ctrl + Shift + Delete` (Windows/Linux)
   - Press `Cmd + Shift + Delete` (Mac)
   - Check "Cached images and files"
   - Click "Clear data"

### Step 2: Test All Pages

Visit each page and verify it loads correctly:

- [ ] **https://www.ghrgrp.com** (main landing page)
- [ ] **https://www.ghrgrp.com/construction**
- [ ] **https://www.ghrgrp.com/construction/services**
- [ ] **https://www.ghrgrp.com/construction/about**
- [ ] **https://www.ghrgrp.com/construction/contact**
- [ ] **https://www.ghrgrp.com/management**
- [ ] **https://www.ghrgrp.com/management/services**
- [ ] **https://www.ghrgrp.com/management/owners**
- [ ] **https://www.ghrgrp.com/management/tenants**
- [ ] **https://www.ghrgrp.com/management/contact**
- [ ] **https://www.ghrgrp.com/equities**
- [ ] **https://www.ghrgrp.com/equities/criteria**
- [ ] **https://www.ghrgrp.com/equities/submit**
- [ ] **https://www.ghrgrp.com/equities/contact**

### Step 3: Check Functionality

Test these features:

- [ ] **Navigation works** (all links clickable)
- [ ] **Mobile menu works** (resize browser to test)
- [ ] **Division logos display** (Construction, Management, Equities)
- [ ] **Sam's photo shows** (on Construction/About)
- [ ] **Contact info correct** (732) 740-3742, sam@ghrgrp.com
- [ ] **HTTPS works** (padlock icon in browser)
- [ ] **No broken images** (all images load)

### Step 4: Test on Different Devices

- [ ] Desktop browser (Chrome, Firefox, Safari)
- [ ] Mobile phone
- [ ] Tablet

### Step 5: Check DNS Propagation

If site isn't loading yet:
- Visit: https://www.whatsmydns.net/
- Enter: `ghrgrp.com`
- Check if it shows your IONOS hosting IP
- May take up to 48 hours (usually 30 minutes)

---

## Troubleshooting

### Problem: Pages Show 404 Error

**Solution:**
- Check that `.htaccess` file was uploaded
- Verify `.htaccess` has correct content
- Make sure file is in the root directory (with index.html)

### Problem: CSS/Styling Not Loading

**Solution:**
- Check that `_next` folder was uploaded completely
- Clear browser cache (Ctrl + Shift + Delete)
- Check browser console for errors (F12)

### Problem: Images Not Loading

**Solution:**
- Verify all image URLs are accessible
- Check that images were uploaded
- Look at browser console (F12) for 404 errors

### Problem: Site Shows Old Content

**Solution:**
- Clear browser cache
- Try incognito/private browsing mode
- Wait for CDN/cache to clear (can take 5-10 minutes)

### Problem: "Internal Server Error" (500)

**Solution:**
- Check `.htaccess` syntax
- Try removing `.htaccess` temporarily
- Check IONOS error logs in control panel

### Problem: Only Homepage Works, Other Pages 404

**Solution:**
- Verify `.htaccess` is present and correct
- Check that all folders (construction, management, equities) were uploaded
- Contact IONOS support to enable mod_rewrite

### Problem: DNS Not Propagating

**Solution:**
- Wait 24-48 hours
- Check whatsmydns.net
- Contact IONOS support if still not working after 48 hours

---

## Making Updates Later

When you want to update your website:

### Step 1: Make Changes Locally

1. Edit files in your `app` folder
2. Test locally if needed: `npm run dev`

### Step 2: Rebuild Static Site

```bash
cd app
npm run build
```

### Step 3: Upload New Files

1. Upload updated files from `out` folder
2. Overwrite existing files on server
3. Clear browser cache
4. Test changes

**Tip:** Only upload the files you changed to save time

---

## Performance Tips

### Enable Compression

Already included in `.htaccess` above ✓

### Optimize Images

If site is slow:
1. Use smaller image files
2. Convert to WebP format
3. Resize large images before uploading

### Enable Caching

Already included in `.htaccess` above ✓

### Use IONOS CDN

If available in your package:
1. Go to IONOS Dashboard
2. Look for "CDN" option
3. Enable it for faster global loading

---

## Security Recommendations

### 1. Enable SSL Certificate

**In IONOS:**
- Go to SSL/TLS
- Enable free Let's Encrypt certificate
- Force HTTPS (already in `.htaccess`)

### 2. Secure File Permissions

**Add to `.htaccess`:**
```apache
# Prevent directory browsing
Options -Indexes

# Protect .htaccess file
<Files .htaccess>
Order allow,deny
Deny from all
</Files>
```

### 3. Keep Backups

- Download a backup of your `out` folder
- Keep it on your computer
- Update after each deployment

---

## Quick Reference

### Your Files Location

**Local Computer:**
```
app/
  └── out/              ← Upload contents of this folder
      ├── index.html
      ├── construction/
      ├── management/
      ├── equities/
      └── _next/
```

**IONOS Server:**
```
htdocs/               ← Your web root
  ├── index.html
  ├── .htaccess       ← Create this
  ├── construction/
  ├── management/
  ├── equities/
  └── _next/
```

### Commands Cheat Sheet

```bash
# Navigate to app folder
cd path/to/app

# Install dependencies
npm install

# Build static site
npm run build

# Output location
cd out
```

### Important URLs

- **IONOS Login**: https://www.ionos.com
- **Your Website**: https://www.ghrgrp.com
- **DNS Check**: https://www.whatsmydns.net/
- **FileZilla**: https://filezilla-project.org/

### Support

**IONOS Support:**
- Phone: 1-866-991-2631
- Email: Through IONOS control panel
- Help Center: https://www.ionos.com/help

---

## Summary Checklist

Before going live, make sure:

- [ ] All files uploaded to correct directory
- [ ] `.htaccess` file created and uploaded
- [ ] DNS pointing to IONOS hosting
- [ ] SSL certificate enabled
- [ ] All pages tested and working
- [ ] Mobile version tested
- [ ] Contact information correct
- [ ] Images loading properly
- [ ] No console errors (F12)

---

## Estimated Total Time

- **Preparation & Build**: 15 minutes
- **Upload**: 10 minutes
- **Configuration**: 5 minutes
- **Testing**: 10 minutes
- **DNS Wait**: 30-60 minutes

**Total Active Time**: ~40 minutes  
**Total with DNS**: 1-2 hours

---

**You're all set! Your GHR Ventures website is now live on IONOS shared hosting! 🎉**

**Website**: https://www.ghrgrp.com
