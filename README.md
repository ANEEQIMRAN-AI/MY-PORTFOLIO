# 🚀 Aneeq Imran Portfolio - Standalone Version

## ⚡ Quick Start (30 Seconds)

**No installation required!** This is pure HTML, CSS, and JavaScript.

### Step 1: Extract Files
Extract the zip file to any folder on your computer.

### Step 2: Open in Browser
Double-click `index.html` or right-click → "Open with" → Your favorite browser.

**That's it!** Your portfolio is now running. 🎉

---

## 📁 File Structure

```
aneeq-portfolio-standalone/
├── index.html          ← Main file (open this in browser)
├── css/
│   ├── styles.css      ← Design tokens & animations
│   ├── layout.css      ← Responsive layout
│   └── components.css  ← Component styles
├── js/
│   ├── main.js         ← Core functionality
│   ├── nav.js          ← Navigation
│   ├── scroll.js       ← Scroll animations
│   └── form.js         ← Contact form
└── README.md           ← This file
```

---

## ✏️ How to Customize

### 1. Change Your Name
Open `index.html` with a text editor (VS Code, Notepad, etc.)

Find this line (around line 63):
```html
<h1 class="hero-title">Aneeq Imran</h1>
```

Replace with your name:
```html
<h1 class="hero-title">Your Name Here</h1>
```

### 2. Change Your Title
Find (around line 64):
```html
<p class="hero-subtitle">AI Engineer & ML Researcher</p>
```

Replace with your title:
```html
<p class="hero-subtitle">Your Title Here</p>
```

### 3. Update Email
Search for `aneeqimran.ai@gmail.com` and replace with your email.

### 4. Change Profile Image
Find (around line 84):
```html
<img src="https://files.manuscdn.com/..." alt="Aneeq Imran" class="hero-profile-image">
```

Replace the `src` with your image URL:
```html
<img src="YOUR_IMAGE_URL" alt="Your Name" class="hero-profile-image">
```

### 5. Update CV Download Link
Find (around line 71):
```html
<a href="https://files.manuscdn.com/..." class="btn btn-secondary" download="Aneeq_Imran_CV.pdf">
```

Replace with your CV URL:
```html
<a href="YOUR_CV_URL" class="btn btn-secondary" download="Your_Name_CV.pdf">
```

### 6. Edit Projects
Find the projects section (around line 200+) and edit each project card:

```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-year">2025</p>
    </div>
    <p class="project-description">Your project description</p>
    <div class="project-tech">
        <span class="tech-badge">Technology 1</span>
        <span class="tech-badge">Technology 2</span>
    </div>
    ...
</article>
```

### 7. Change Colors
Open `css/styles.css` and find (around line 13):

```css
:root {
    --color-accent-primary: #00d4ff;      /* Electric blue */
    --color-accent-secondary: #00f0ff;    /* Light cyan */
    --color-bg: #0f1419;                  /* Dark background */
    --color-text-primary: #f5f5f5;        /* Light text */
}
```

Change the hex colors to your preferred colors.

### 8. Update Skills
Find the "About Me" section (around line 107) and edit the skill tags:

```html
<span class="skill-tag">Python</span>
<span class="skill-tag">JavaScript</span>
```

### 9. Update Social Links
Find the contact section (around line 450) and update:

```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">LinkedIn</a>
```

---

## 🎨 Customizing Styles

### Global Styles
Edit `css/styles.css` for:
- Colors
- Fonts
- Animations
- Spacing

### Layout Styles
Edit `css/layout.css` for:
- Navigation
- Hero section
- Responsive design
- Section layouts

### Component Styles
Edit `css/components.css` for:
- Buttons
- Cards
- Forms
- Badges

---

## 🔧 Using a Code Editor

**Recommended:** Use VS Code (free, powerful)

1. Download [VS Code](https://code.visualstudio.com/)
2. Open the folder: File → Open Folder → Select your portfolio folder
3. Edit files directly in VS Code
4. Save changes (Ctrl+S)
5. Refresh browser (F5) to see changes

---

## 📱 Testing on Mobile

### In Browser
1. Press `F12` to open DevTools
2. Click the device toggle (top-left)
3. Select a mobile device

### On Real Phone
1. Find your computer's IP address:
   - Windows: Open Command Prompt, type `ipconfig`, look for IPv4 Address
   - Mac/Linux: Open Terminal, type `ifconfig`, look for inet

2. On your phone, open: `http://YOUR_IP:8000` (if using Python server)

Or just open the HTML file directly on your phone.

---

## 🌐 Deploy to Internet

### Option 1: Netlify (Easiest)
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your folder
3. Done! Your site is live

### Option 2: GitHub Pages
1. Create a GitHub account
2. Create a new repository named `portfolio`
3. Upload your files
4. Go to Settings → Pages → Enable GitHub Pages
5. Your site is live at `https://YOUR_USERNAME.github.io/portfolio`

### Option 3: Vercel
1. Go to [Vercel](https://vercel.com)
2. Import your project
3. Deploy
4. Done!

---

## 🆘 Troubleshooting

**Styles not loading?**
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

**Images not showing?**
- Check the image URL is correct
- Make sure the URL is accessible (not a local file path)

**JavaScript not working?**
- Press `F12` → Console tab → Check for error messages
- Make sure all JS files are in the `js/` folder

**Can't open the file?**
- Right-click `index.html` → "Open with" → Choose your browser

---

## 📝 Tips

1. **Use a text editor** - VS Code, Sublime Text, or even Notepad
2. **Save before refreshing** - Always save changes before F5
3. **Keep backups** - Save a copy before making big changes
4. **Test on mobile** - Use DevTools to check responsiveness
5. **Use DevTools** - Press F12 to inspect and debug

---

## ✅ Customization Checklist

- [ ] Changed name and title
- [ ] Updated profile image
- [ ] Updated email
- [ ] Updated CV download link
- [ ] Edited projects section
- [ ] Updated skills
- [ ] Changed colors (optional)
- [ ] Updated social links
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Deployed to internet

---

## 🎉 You're Ready!

Your portfolio is complete and ready to customize. Edit the HTML, CSS, and JavaScript files to make it your own!

Good luck with your AI engineering career! 🚀

---

## 📚 Resources

- **HTML Help:** [MDN HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS Help:** [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript Help:** [MDN JS Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Color Picker:** [Coolors.co](https://coolors.co)
- **Font Finder:** [Google Fonts](https://fonts.google.com)

---

**Questions?** Check the MDN documentation or search Google for your specific question.
