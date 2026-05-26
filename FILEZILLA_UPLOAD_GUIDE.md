# Upload Your Website Using FileZilla FTP - Step by Step

## Part 1: Get Your FTP Credentials from IONOS (5 minutes)

### Step 1: Login to IONOS
1. Go to: **https://www.ionos.com**
2. Click **"Login"** (top right)
3. Enter your email and password

### Step 2: Find FTP Access
1. On the dashboard, look for **"Hosting"** or **"Websites & Shops"**
2. Click on it
3. You should see your hosting package (might say "Web Hosting" or show your domain)
4. Click the **gear icon ⚙️** or **"Manage"** button next to your package

### Step 3: Get FTP Details

Look for one of these options (varies by interface):

**Option A: "FTP Access" or "Access & Security"**
- Click "FTP Access" or "Access & Security"
- You'll see FTP credentials

**Option B: In the package overview**
- Scroll down to find "FTP" section
- Click "Show FTP details" or similar

**Option C: "Manage Hosting" → "Access Data"**
- Click "Access Data" or "Login Data"
- Find FTP section

### What to Write Down:

```
FTP Server/Host: _______________________
(Usually: ftp.yourdomain.com or an IP like 123.45.67.89)

FTP Username: _______________________
(Might be your email or something like u12345678)

FTP Password: _______________________
(If you don't see it, there's usually a "Show Password" button)

Port: 21
(Usually default is 21 - use this if not specified)
```

**📝 Write these down or keep the IONOS page open!**

---

## Part 2: Download FileZilla (3 minutes)

### Step 1: Download FileZilla
1. Go to: **https://filezilla-project.org/**
2. Click **"Download FileZilla Client"**
3. Choose your operating system:
   - Windows
   - Mac
   - Linux

### Step 2: Install FileZilla
1. **Windows**: Run the .exe file, click Next → Next → Install
2. **Mac**: Open the .dmg file, drag FileZilla to Applications
3. **Linux**: `sudo apt install filezilla` (or use your package manager)

### Step 3: Open FileZilla
- **Windows**: Start Menu → FileZilla
- **Mac**: Applications → FileZilla
- **Linux**: Applications menu → FileZilla

---

## Part 3: Connect to Your IONOS Server (2 minutes)

### FileZilla Layout:
When you open FileZilla, you'll see:
- **Top**: Connection boxes (Host, Username, Password, Port)
- **Left side**: Your computer files (Local site)
- **Right side**: Server files (Remote site) - empty until connected
- **Bottom**: Transfer queue

### Connect to IONOS:

1. **At the top of FileZilla, fill in these boxes:**

   ```
   Host: [Your FTP Server from Step 1]
   Username: [Your FTP Username from Step 1]
   Password: [Your FTP Password from Step 1]
   Port: 21
   ```

2. **Click "Quickconnect"** button

3. **Certificate Warning** (might appear):
   - If you see "Unknown certificate", click **"OK"** or **"Trust this certificate"**
   - Check "Always trust certificate" if asked
   - This is normal for IONOS

4. **Wait for Connection**:
   - You'll see connection messages at the top
   - When connected, you'll see folders appear on the **right side** (Remote site)

### If Connected Successfully:
You should see folders like:
- `htdocs` or `public_html` ← **This is your web root!**
- Maybe `logs`, `cgi-bin`, etc.

**✅ You're connected!**

---

## Part 4: Navigate to Your Web Directory (1 minute)

### On the RIGHT side (Remote site - your server):

1. **Double-click** on the `htdocs` folder (or `public_html` if you don't see htdocs)
2. You're now inside your website's root directory
3. This is where your website files go

### Check What's Inside:
- If you see old website files, you'll delete them in the next step
- If it's empty, perfect!

---

## Part 5: Clear Old Files (2 minutes) - SKIP IF EMPTY

**Only do this if you have old files to remove:**

### On the RIGHT side (server - htdocs folder):

1. **Select all files/folders**:
   - Click one file
   - Press `Ctrl + A` (Windows/Linux) or `Cmd + A` (Mac)
   - All files should be highlighted

2. **Delete them**:
   - Right-click → **"Delete"**
   - Or press `Delete` key
   - Confirm deletion if asked

3. **Wait for deletion** to complete
   - You'll see progress in the bottom panel
   - The right side should now be empty

**✅ Server is now clean and ready!**

---

## Part 6: Upload Your Website (10 minutes)

### Step 1: Extract Your Download

**If you haven't already:**
1. Download from: https://ghr-multi-brand.preview.emergentagent.com/ghr-ventures-READY-TO-UPLOAD.zip
2. **Windows**: Right-click → "Extract All" → Choose a location
3. **Mac**: Double-click the zip file
4. You should now have a folder with your website files

### Step 2: Locate Your Website Files

Find the extracted folder on your computer. It should contain:
- `index.html`
- `.htaccess` (might be hidden)
- Folders: `construction`, `management`, `equities`, `_next`

### Step 3: Navigate in FileZilla

**LEFT side (Local site - your computer):**
1. Use the folder navigation at the top-left
2. Navigate to where you extracted your website files
3. You should see all your website files listed

**RIGHT side (Remote site - server):**
1. Make sure you're still in `htdocs` (or `public_html`)
2. It should be empty (or you just cleared it)

### Step 4: Upload EVERYTHING

**Important: Upload ALL files including hidden .htaccess**

**Method 1 - Drag and Drop (Easiest):**
1. On the **LEFT side**, select ALL files:
   - Click one file
   - Press `Ctrl + A` (Windows/Linux) or `Cmd + A` (Mac)
2. **Drag** all selected files from left to right
3. Drop them in the right panel (your server)

**Method 2 - Right-Click Upload:**
1. On the **LEFT side**, select all files (`Ctrl + A` or `Cmd + A`)
2. Right-click on selected files
3. Choose **"Upload"**

### Step 5: Watch the Upload

- **Bottom panel** shows transfer progress
- **Green** = successful upload
- **Red** = error (rare)
- You'll see file names scrolling as they upload

**Upload time: 5-10 minutes** depending on internet speed

### Step 6: Verify Upload

After upload completes:

**On the RIGHT side (server), you should see:**
- `index.html` ✓
- `.htaccess` ✓ (might need to enable "Show hidden files" in View menu)
- `404.html` ✓
- `construction/` folder ✓
- `management/` folder ✓
- `equities/` folder ✓
- `_next/` folder ✓
- `404/` folder ✓
- `UPLOAD_INSTRUCTIONS.txt` ✓

**✅ All files uploaded!**

---

## Part 7: Check Hidden .htaccess File (Important!)

The `.htaccess` file is crucial but might be hidden.

### To see hidden files in FileZilla:

1. Click **"Server"** menu (top)
2. Select **"Force showing hidden files"** ✓
3. Or go to: **View** → **"Show hidden files"** ✓

### Verify .htaccess is there:

On the RIGHT side (server), look for `.htaccess`
- It should be at the same level as `index.html`
- File size: about 1-2 KB

**If you don't see it:**
1. Make sure "Show hidden files" is enabled
2. Check your extracted files on your computer - it should be there
3. Manually drag just the `.htaccess` file from left to right

**✅ .htaccess is uploaded!**

---

## Part 8: Test Your Website (5 minutes)

### Wait a Moment
- After upload, wait 2-3 minutes
- IONOS cache needs to clear

### Visit Your Website

Open your browser and test:

1. **Main site:**
   - https://www.ghrgrp.com
   - https://ghrgrp.com

2. **Check for HTTPS:**
   - You should see a padlock 🔒 in the address bar
   - If not, wait 5 minutes (SSL can take time)

3. **Test all pages:**
   - Click navigation links
   - Visit: /construction, /management, /equities
   - Test subpages
   - Try mobile menu (resize browser)

### What to Check:

- [ ] Homepage loads
- [ ] HTTPS working (padlock icon)
- [ ] Navigation links work
- [ ] All pages load (no 404 errors)
- [ ] CSS/styling looks correct
- [ ] Images load (logos, Sam's photo)
- [ ] Contact info shows: (732) 740-3742, sam@ghrgrp.com
- [ ] Mobile responsive (resize browser)

**🎉 If everything works, YOU'RE LIVE!**

---

## Troubleshooting

### Problem: Can't connect to FTP

**Check:**
- ✅ FTP credentials are correct (copy-paste from IONOS)
- ✅ Port is set to `21`
- ✅ Host doesn't have extra spaces
- ✅ Username/password are correct
- ✅ Try `ftp.yourdomain.com` or the IP address

**Try:**
- Wait 5 minutes and retry (server might be temporarily busy)
- Check IONOS status page
- Contact IONOS support: 1-866-991-2631

### Problem: Certificate warning

**Solution:**
- This is normal for IONOS FTP
- Click "OK" or "Trust certificate"
- Check "Always trust" box
- Continue connecting

### Problem: Upload fails or times out

**Solutions:**
1. **Check internet connection** - make sure it's stable
2. **Try smaller batches**:
   - Upload folders one at a time
   - First: `index.html` and `.htaccess`
   - Then: each folder separately
3. **Increase timeout**:
   - FileZilla: Edit → Settings → Connection → Timeout
   - Set to: 60 seconds

### Problem: Site shows 404 or doesn't load

**Check:**
1. ✅ Files uploaded to correct folder (`htdocs` or `public_html`)
2. ✅ `index.html` is in the root (not inside a subfolder)
3. ✅ `.htaccess` is present
4. ✅ Wait 5-10 minutes for cache to clear
5. ✅ Clear browser cache (Ctrl+Shift+Delete)

### Problem: CSS not loading / site looks broken

**Solutions:**
1. Check `_next` folder uploaded completely
2. Clear browser cache
3. Try incognito/private browsing mode
4. Check browser console (F12) for errors

### Problem: .htaccess missing

**Solutions:**
1. Enable "Show hidden files" in FileZilla (View menu)
2. Check your extracted files on computer
3. Manually upload just `.htaccess` file
4. Make sure file is named exactly `.htaccess` (with dot at start)

### Problem: Pages work but no HTTPS (no padlock)

**Solutions:**
1. Wait 10-15 minutes for SSL to activate
2. Check IONOS SSL settings (should have free Let's Encrypt)
3. `.htaccess` should force HTTPS (it's included in your files)
4. Try accessing with `https://` in front

---

## FileZilla Tips

### Save Your Connection (for next time):

1. In FileZilla: **File** → **Site Manager** (or Ctrl+S)
2. Click **"New Site"**
3. Name it: "IONOS - GHR Ventures"
4. Enter your FTP details
5. Click **"Connect"**

**Next time:** Just open Site Manager and double-click to connect!

### Speed Up Uploads:

1. **Edit** → **Settings** → **Transfers**
2. Set "Maximum simultaneous transfers" to: **4-8**
3. Uploads will be faster

### View Transfer Queue:

- Bottom panel shows what's uploading
- Green checkmarks = successful
- You can pause/resume transfers

---

## Making Updates Later

When you want to update your website:

### Quick Updates:
1. Open FileZilla
2. Connect to IONOS (use Site Manager)
3. Navigate to `htdocs`
4. Drag new files from left (computer) to right (server)
5. Choose "Overwrite" when asked
6. Done!

### Full Updates:
1. Download new build package
2. Extract files
3. Connect to IONOS via FileZilla
4. Delete old files
5. Upload new files
6. Test!

---

## Summary Checklist

Before you start:
- [ ] FTP credentials from IONOS
- [ ] FileZilla downloaded and installed
- [ ] Website files downloaded and extracted

Upload process:
- [ ] Connect FileZilla to IONOS
- [ ] Navigate to `htdocs` folder
- [ ] Clear old files (if any)
- [ ] Upload all files (including .htaccess)
- [ ] Verify .htaccess is present
- [ ] Test website at www.ghrgrp.com

Done:
- [ ] Website loads
- [ ] HTTPS working
- [ ] All pages work
- [ ] Mobile responsive
- [ ] You're LIVE! 🎉

---

## Quick Reference

**FTP Connection:**
- Host: [from IONOS]
- Username: [from IONOS]
- Password: [from IONOS]
- Port: 21

**Upload Destination:**
- Folder: `htdocs` or `public_html`
- Upload ALL files from your extracted download

**Critical Files:**
- `index.html` - Homepage
- `.htaccess` - Makes everything work
- `_next/` folder - CSS and JavaScript

**Support:**
- IONOS: 1-866-991-2631
- FileZilla Help: https://filezilla-project.org/support.php

---

## Your Download Link

**Windows (ZIP):**
https://ghr-multi-brand.preview.emergentagent.com/ghr-ventures-READY-TO-UPLOAD.zip

**Mac/Linux (TAR.GZ):**
https://ghr-multi-brand.preview.emergentagent.com/ghr-ventures-READY-TO-UPLOAD.tar.gz

---

**You've got this! Follow these steps and your website will be live in about 20 minutes!** 🚀

**Stuck on any step? Let me know and I'll help!**
