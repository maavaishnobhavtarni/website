# 🪔 Adi Shakti Maa Vaishno Bhavtarni Mandir, Titwala
### Official Production-Ready Static Website for GitHub Pages

A sacred, beautiful, and fully responsive multilingual digital Darbar for **Adi Shakti Maa Vaishno Bhavtarni Mandir, Titwala, Maharashtra, India**.

Inspired by traditional Indian devotional aesthetics, this website combines deep maroon, saffron, vermilion, radiant gold accents, and warm ivory tones with full Devanagari typography support for **English**, **Hindi (हिन्दी)**, and **Marathi (मराठी)**.

---

## 🌟 Key Highlights & Features

- **100% Static & Serverless**: Built using pure HTML5, CSS3, and Vanilla JavaScript. Requires **no backend, no database, no Node.js/npm, no paid API keys**, and no build process.
- **GitHub Pages Ready**: Uses strict relative paths (`./`) so it works seamlessly on custom domains or GitHub Pages project URLs like `https://<username>.github.io/<repo-name>/`.
- **Trilingual Support**: Instant, reactive language switching between **English**, **हिन्दी**, and **मराठी**, with `localStorage` preference memory and bundled fallback dictionaries.
- **Live YouTube Darshan Player**: Configurable player with traditional temple arch framing, graceful offline card with Aarti timings, and direct YouTube channel links.
- **Dynamic Indian Standard Time (IST) Status Badge**: Automatically computes whether the Mandir is currently *Open for Darshan*, *On Afternoon Break (Reopens at 4:00 PM)*, or *Closed for the Night*.
- **Darshan Timings**: Complete daily schedule (Morning: 7:00 AM – 2:00 PM | Afternoon Break: 2:00 PM – 4:00 PM | Evening: 4:00 PM – 8:30/9:00 PM | Navratri: 7:00 AM – 11:00 PM).
- **Interactive Photo Gallery**: Category filters (Temple Exterior, Entrance & Interior, Maa Darshan, Navratri, Chowki) with a full-screen keyboard-accessible Lightbox modal (Prev / Next / ESC to close).
- **Festival & Chowki Calendar**: Easily editable JavaScript data array featuring Chaitra Navratri, Sharad Navratri, Maha Ashtami, Dussehra, Mata Ki Chowki, and Bhajan Sandhya with "View Details" modals.
- **Mandir Seva & Offerings (Donation)**: Dual-card layout with QR Code display, UPI ID copy button, QR download button, individual bank detail copy buttons, and "Copy All Bank Details" button.
- **Google Maps & Directions**: Responsive Titwala pilgrim map embed with 1-click "Get Directions" navigation.
- **Zero Broken Images**: Ships with built-in, high-quality devotional placeholder artwork for all images and QR codes so the site looks stunning right out of the box before you add your actual photos.

---

## 📁 Repository Folder Structure

```
adi-shakti-maa-mandir/
├── index.html                   # Master HTML structure
├── style.css                    # Devotional theme styles, responsive layouts & animations
├── script.js                    # Modular JS logic, configuration & data arrays
├── README.md                    # Setup, customization & deployment documentation
├── assets/
│   ├── images/
│   │   ├── temple-main.jpg      # Temple main shikhara / exterior photograph
│   │   ├── temple-entrance.jpg  # Temple entrance & toran dwar photograph
│   │   ├── maa-darshan.jpg      # Maa Vaishno Bhavtarni holy sanctum darshan
│   │   ├── temple-interior.jpg  # Garbhagriha & prayer hall interior
│   │   ├── navratri.jpg         # Navratri celebrations & Akhand Jyot photograph
│   │   └── gallery/
│   │       ├── gallery-1.jpg    # Gallery photo 1
│   │       ├── gallery-2.jpg    # Gallery photo 2
│   │       ├── gallery-3.jpg    # Gallery photo 3
│   │       ├── gallery-4.jpg    # Gallery photo 4
│   │       ├── gallery-5.jpg    # Gallery photo 5
│   │       ├── gallery-6.jpg    # Gallery photo 6
│   │       ├── gallery-7.jpg    # Gallery photo 7
│   │       └── gallery-8.jpg    # Gallery photo 8
│   ├── donations/
│   │   └── donation-qr.png      # Official Mandir Seva UPI QR code image
│   └── logo/
│       └── temple-logo.png      # Sacred Mandir emblem / logo (256x256 PNG)
└── locales/
    ├── en.json                  # English translation strings
    ├── hi.json                  # Hindi (हिन्दी) translation strings
    └── mr.json                  # Marathi (मराठी) translation strings
```

---

## 🚀 How to Deploy on GitHub Pages (Step-by-Step)

### Method A: Uploading via GitHub Web Interface (Simplest)

1. **Create a New GitHub Repository**:
   - Log in to your account at [GitHub.com](https://github.com).
   - Click the **`+`** icon in the top right corner and choose **New repository**.
   - Name your repository (for example: `adi-shakti-maa-mandir`).
   - Choose **Public** (required for free GitHub Pages).
   - Check **Add a README file** or leave it blank, then click **Create repository**.

2. **Upload Website Files**:
   - On your new repository page, click **Add file** → **Upload files**.
   - Drag and drop all the files and folders from this project (`index.html`, `style.css`, `script.js`, `locales/`, and `assets/`).
   - Scroll down to the bottom, enter a commit message like `"Initial deployment of Mandir website"`, and click **Commit changes**.

3. **Enable GitHub Pages**:
   - Click on the **Settings** tab (the gear icon at the top of your repository).
   - In the left sidebar, click on **Pages** (under the "Code and automation" section).
   - Under **Build and deployment**:
     - **Source**: Select **Deploy from a branch**.
     - **Branch**: Select `main` (or `master`) and keep folder as `/ (root)`.
     - Click **Save**.

4. **Visit Your Live Website**:
   - Wait 1 to 2 minutes for GitHub Pages to build the site.
   - Refresh the **Pages** page. You will see a banner at the top:
     > *"Your site is live at `https://<your-username>.github.io/adi-shakti-maa-mandir/`"*
   - Click the link to open your live website!

---

### Method B: Uploading via Git Command Line (Recommended for Developers)

If you have Git installed on your computer:

```bash
# 1. Navigate to the project directory
cd adi-shakti-maa-mandir

# 2. Initialize Git
git init

# 3. Add all files to staging
git add .

# 4. Commit the files
git commit -m "Initial commit of Adi Shakti Maa Vaishno Bhavtarni Mandir website"

# 5. Set branch name to main
git branch -M main

# 6. Link to your GitHub repository
git remote add origin https://github.com/<your-username>/adi-shakti-maa-mandir.git

# 7. Push to GitHub
git push -u origin main
```

Then follow **Step 3** above in your GitHub repository's **Settings → Pages** to activate deployment.

---

## ⚙️ How to Customize Your Temple Website

All customizable settings are located in one clean, clearly documented object at the top of `script.js` (`TEMPLE_CONFIG`). You never need to touch the layout code to make updates!

### 1. Updating YouTube Live Darshan or Channel Link
Open `script.js` and locate `TEMPLE_CONFIG.youtube`:
```javascript
youtube: {
  // 1. When a live stream is ongoing, change hasActiveStream to true:
  hasActiveStream: false, // Set to true during live broadcasts

  // 2. Insert your YouTube Video ID (e.g., from https://youtu.be/dQw4w9WgXcQ):
  videoId: "", // e.g. "dQw4w9WgXcQ"

  // 3. Your official YouTube Channel URL:
  channelUrl: "https://www.youtube.com/@AdiShaktiMaaVaishnoBhavtarni",

  // 4. (Optional) Direct live stream URL:
  liveStreamUrl: ""
}
```
*Note: If `hasActiveStream` is `false` or `videoId` is empty, the website automatically displays an elegant offline devotional card with Aarti timings and a channel link. No false "live" claims are ever made.*

### 2. Replacing Temple Photographs
Simply replace the image files in `assets/images/` with your actual temple photos (keeping the same filenames):
- **Main Temple View**: `assets/images/temple-main.jpg`
- **Temple Entrance / Toran Dwar**: `assets/images/temple-entrance.jpg`
- **Maa Darshan (Holy Sanctum)**: `assets/images/maa-darshan.jpg`
- **Temple Interior / Prayer Hall**: `assets/images/temple-interior.jpg`
- **Navratri Celebrations**: `assets/images/navratri.jpg`
- **Gallery Images**: Add your photos into `assets/images/gallery/` and add their titles and captions inside the `TEMPLE_CONFIG.gallery` array in `script.js`.

### 3. Replacing the Donation QR Code & Bank Account Details
1. **Donation QR Code Image**:
   - Replace `assets/donations/donation-qr.png` with your official Mandir Trust UPI QR code image.
2. **Bank Transfer & UPI Details**:
   - Open `script.js` and update `TEMPLE_CONFIG.donations`:
   ```javascript
   donations: {
     upiId: "yourmandir@upi", // Your verified temple UPI ID
     accountHolder: "Adi Shakti Maa Vaishno Bhavtarni Mandir Trust",
     bankName: "State Bank of India",
     accountNumber: "123456789012",
     ifscCode: "SBIN0001234",
     branchName: "Titwala Branch, Maharashtra",
     payeeName: "Adi Shakti Maa Bhavtarni Mandir"
   }
   ```

### 4. Updating Temple Address & Google Maps Location
Open `script.js` and update `TEMPLE_CONFIG.maps`:
```javascript
maps: {
  searchQuery: "Adi Shakti Maa Vaishno Bhavtarni Mandir, Titwala, Maharashtra",
  embedUrl: "https://www.google.com/maps/embed?pb=...", // Paste Google Maps Embed iframe URL
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Adi+Shakti+Maa+Vaishno+Bhavtarni+Mandir+Titwala+Maharashtra"
}
```

### 5. Adding or Editing Festivals and Events
Open `script.js` and scroll to `TEMPLE_CONFIG.festivals`. Add or edit items directly:
```javascript
{
  id: "my-special-festival",
  category: "navratri", // 'navratri', 'chowki', or 'pujas'
  nameEn: "Special Festival Name",
  nameHi: "विशेष उत्सव का नाम",
  nameMr: "विशेष उत्सवाचे नाव",
  dateEn: "Expected Dates",
  dateHi: "अनुमानित तिथि",
  dateMr: "अपेक्षित तारीख",
  timingsEn: "7:00 AM – 10:00 PM",
  timingsHi: "प्रातः 7:00 – रात्रि 10:00",
  timingsMr: "सकाळी 7:00 ते रात्री 10:00",
  descEn: "Festival description in English.",
  descHi: "उत्सव का हिंदी में विवरण।",
  descMr: "उत्सवाचे मराठीत वर्णन.",
  image: "./assets/images/navratri.jpg"
}
```

### 6. Updating Contact Phone / Email
Open `script.js` and update `TEMPLE_CONFIG.contact`:
```javascript
contact: {
  phone: "+91 98765 43210", // Leave as "" to hide until phone is confirmed
  email: "seva@adishaktititwala.org", // Leave as "" to hide until email is confirmed
  youtube: "https://www.youtube.com/@AdiShaktiMaaVaishnoBhavtarni",
  facebook: "", // Optional
  instagram: "" // Optional
}
```
*Note: Fields with empty quotes `""` are automatically hidden on the website so no placeholder or fake contact info is ever shown to devotees.*

---

## 🔄 How to Update the Site After Deployment

Whenever you want to update festival dates, add new photos, or update bank details:
1. Make your edits in your local files or directly on GitHub.com by clicking the pencil icon on any file.
2. Commit your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update Navratri timings and add new gallery photos"
   git push origin main
   ```
3. GitHub Pages will automatically rebuild and deploy your changes within 60 seconds!

---

## 📱 Browser & Device Compatibility

- **Mobile Phones**: iOS Safari, Android Chrome, Samsung Internet, Firefox Mobile.
- **Tablets**: iPadOS Safari, Android Tablets.
- **Desktops**: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge.
- **Screen Sizes Tested**: 320px (iPhone SE) to 3840px (4K Displays).

---

## 🕉️ Devotional Benediction

> **“जहाँ माँ पर विश्वास है, वहाँ हर कठिनाई का सामना करने की शक्ति है। माँ भवतारिणी सभी पर अपनी कृपा बनाए रखें।”**  
> **“Where there is faith in Maa, there is courage to face every challenge. May Maa Bhavtarni guide us towards peace, compassion, and righteousness.”**

**जय माता दी! | Jai Mata Di!**
