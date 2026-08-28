# 📸 My Photography Website

A beautiful, multilingual photography portfolio website — free to host on GitHub Pages!

## 🌍 Languages
- English (EN)
- Spanish (ES)
- Catalan (CAT)

## 🚀 How to Deploy (Free on GitHub Pages)

### Step 1: Create a GitHub Account (2 minutes)
1. Go to **https://github.com**
2. Click **"Sign up"**
3. Enter your email, create a username and password
4. Verify your email

### Step 2: Create a Repository
1. Click the **"+" icon** (top right) → **"New repository"**
2. Name it: **`yourusername.github.io`** (replace with YOUR username)
3. Select **"Public"**
4. Check **"Add a README file"**
5. Click **"Create repository"**

### Step 3: Upload Your Website Files
1. In your new repository, click **"Add file" → "Upload files"**
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `css/` folder
   - `js/` folder
3. Click **"Commit changes"**

### Step 4: Your Site is Live! 🎉
- Wait 1–2 minutes
- Visit: **`https://yourusername.github.io`**
- Your photography website is now live on the internet — FREE forever!

## 📝 How to Update Your Website

### Change Your Brand Name
1. Open `js/translations.js`
2. Find `"brand-name": "My Photography"` (in all 3 languages)
3. Replace with your real brand name
4. Save and re-upload the file

### Add Your Own Photos
1. Open `index.html`
2. Find the gallery section
3. Add a new line like:
   ```html
   <div class="gallery-item" data-category="nature">
     <img src="images/your-photo.jpg" alt="Your photo">
   </div>
   ```
4. Put your photo in the `images/` folder
5. Save and re-upload

### Change Your Bio
1. Open `js/translations.js`
2. Find `"about-text"` in each language
3. Replace with your own text
4. Save and re-upload

## 💰 Monetization (When You're Ready)

### Add Your Shop Links
1. Create a free account at Redbubble/Society6
2. Open `index.html`
3. Find the shop section — replace `href="#"` with your store link

### Add Your Tip Link
1. Create a free account at buymeacoffee.com
2. Open `index.html`
3. Find the support section — replace `href="#"` with your link

### Add Your Gear Links
1. Open `index.html`
2. Find the gear section — replace `href="#"` with your affiliate links

## 🎨 Customization

### Change Colors
Open `css/style.css` and change the `--accent` color:
```css
:root {
  --accent: #e8a33d;  /* Change this to your favorite color */
}
```

### Change Hero Background
Open `css/style.css` and find:
```css
.hero {
  background-image: url('YOUR-IMAGE-LINK-HERE');
}
```

## 📁 File Structure
```
photography-website/
├── index.html          (main page)
├── css/
│   └── style.css       (styling)
├── js/
│   ├── script.js       (gallery, lightbox, mobile menu)
│   └── translations.js (EN/ES/CAT text)
└── README.md           (this file)
```

## ❓ Need Help?
- **GitHub Pages guide:** https://docs.github.com/en/pages
- **GitHub support:** https://support.github.com