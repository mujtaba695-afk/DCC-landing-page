# 🎨 ASSET GUIDELINES & CHECKLIST
**C&W Core Landing Page Template - Image & Media Requirements**

---

## 📸 IMAGE SPECIFICATIONS

### **Required Images Overview**
You need a **minimum of 6 images** for a complete landing page:

| # | Asset Name | Purpose | Required Size | Format |
|---|------------|---------|---------------|--------|
| 1 | Hero Background | Main visual impact | 1920x1080px | JPG/WebP |
| 2 | Offering 1 Image | First service/offering | 800x600px | JPG/WebP |
| 3 | Offering 2 Image | Second service/offering | 800x600px | JPG/WebP |
| 4 | Amenity 1 Image | Gallery showcase | 800x800px | JPG/WebP |
| 5 | Amenity 2 Image | Gallery showcase | 800x800px | JPG/WebP |
| 6 | Amenity 3 Image | Gallery showcase | 800x800px | JPG/WebP |

**Optional:**
- Property brochure PDF
- Additional amenity images (can expand gallery to 4-6 images)

---

## 🖼️ DETAILED IMAGE REQUIREMENTS

### **1. Hero Background Image**
**Purpose:** First impression, sets tone for entire page  
**Recommended Dimensions:** 1920 x 1080px (16:9 ratio)  
**Minimum Dimensions:** 1600 x 900px  
**File Size:** <500KB (compressed)  
**Format:** JPG or WebP  

**Best Practices:**
- Architecture shot of the building exterior
- Taken during golden hour or blue hour
- Shows distinctive features
- High dynamic range, professional quality
- Subject should be on the right side (text appears on left)

**Example File Name:** `hero-property-name.jpg`

---

### **2 & 3. Offering Card Images**
**Purpose:** Showcase key selling points  
**Recommended Dimensions:** 800 x 600px (4:3 ratio)  
**File Size:** <300KB each  
**Format:** JPG or WebP  

**Best Practices:**
- **Offering 1 (Commercial):** Office interior, lobby, workspace
- **Offering 2 (Lifestyle):** Amenities, luxury features, hospitality elements
- Well-lit, professional photography
- Show people if possible (adds life and scale)
- Landscape orientation

**Example File Names:**
- `offering-office-space.jpg`
- `offering-lifestyle.jpg`

---

### **4-6. Amenity Gallery Images**
**Purpose:** Showcase lifestyle and building features  
**Recommended Dimensions:** 800 x 800px (1:1 ratio - square)  
**File Size:** <300KB each  
**Format:** JPG or WebP  

**Best Practices:**
- Equal dimensions for visual consistency
- Diverse shots (pool, gym, dining, lobby, etc.)
- Bright, inviting, aspirational
- Professional photography
- Can be square crop from larger images

**Suggested Content:**
1. Swimming pool/recreation area
2. Fitness center/wellness facilities
3. Dining/restaurant area
4. Lobby/common areas
5. Coworking/business lounge
6. Rooftop/terrace views

**Example File Names:**
- `amenity-pool.jpg`
- `amenity-gym.jpg`
- `amenity-dining.jpg`

---

## 📄 PDF BROCHURE (OPTIONAL)

**If using the "Download Brochure" feature:**

**File Type:** PDF  
**Max Size:** 10MB (5MB recommended)  
**Pages:** Any length  
**File Name:** `property-brochure.pdf`  
**Location:** Place in `images/` or root folder

**Update Required:** Edit `script.js` line ~275:
```javascript
link.href = 'images/property-brochure.pdf';  // Update this path
link.download = 'Your_Property_Brochure.pdf';  // Update download name
```

---

## 🗂️ FOLDER STRUCTURE

### **Recommended Setup:**
```
your-project/
├── index.html
├── style.css
├── script.js
├── logo-core.jpg              ← C&W Core logo (included)
└── images/                  ← CREATE THIS FOLDER
    ├── hero-building.jpg
    ├── offering-offices.jpg
    ├── offering-lifestyle.jpg
    ├── amenity-pool.jpg
    ├── amenity-gym.jpg
    ├── amenity-dining.jpg
    └── property-brochure.pdf  (optional)
```

---

## ⚙️ IMAGE OPTIMIZATION

### **Why Optimize?**
- Faster page load times
- Better SEO rankings
- Improved mobile experience
- Lower bandwidth costs

### **How to Optimize:**

**Option 1: Online Tools (Easiest)**
- [TinyPNG](https://tinypng.com/) - Compress JPG/PNG
- [Squoosh](https://squoosh.app/) - Advanced compression
- [CloudConvert](https://cloudconvert.com/) - Convert to WebP

**Option 2: Desktop Software**
- Adobe Photoshop - Save for Web
- GIMP (free) - Export with quality 75-85%

**Option 3: Bulk Processing**
- [ImageOptim](https://imageoptim.com/) (Mac)
- [Caesium](https://saerasoft.com/caesium/) (Windows)

**Target Quality:**
- JPG Quality: 75-85%
- WebP Quality: 80%
- Keep visual quality, reduce file size

---

## 📝 IMAGE PLACEMENT IN CODE

### **Quick Reference:**

```html
<!-- Hero Background -->
<div class="hero-bg" style="background-image: url('images/hero-building.jpg');"></div>

<!-- Offering 1 -->
<img src="images/offering-offices.jpg" alt="Modern office interior with premium finishes">

<!-- Offering 2 -->
<img src="images/offering-lifestyle.jpg" alt="Luxury amenities and hospitality">

<!-- Amenity 1 -->
<img src="images/amenity-pool.jpg" alt="Resort-style swimming pool">

<!-- Amenity 2 -->
<img src="images/amenity-gym.jpg" alt="State-of-the-art fitness center">

<!-- Amenity 3 -->
<img src="images/amenity-dining.jpg" alt="Premium dining experience">
```

---

## ✍️ WRITING ALT TEXT

**Alt text is crucial for:**
- Accessibility (screen readers)
- SEO (search engines)
- Display when images fail to load

**Good Alt Text Examples:**
- ✅ "Modern Grade A office space with floor-to-ceiling windows"
- ✅ "Infinity edge swimming pool overlooking Dubai skyline"
- ✅ "Premium fitness center with cardio and weight equipment"

**Bad Alt Text Examples:**
- ❌ "Image1"
- ❌ "Photo"
- ❌ "IMG_5847"

**Formula:** Type + Key Features + Location (if relevant)

---

## 📋 ASSET COLLECTION CHECKLIST

### **Before You Start:**
- [ ] Gather all images in one folder
- [ ] Check image quality (sharp, well-lit, professional)
- [ ] Verify you have rights to use all images
- [ ] Ensure images represent the actual property

### **Image Preparation:**
- [ ] Resize images to recommended dimensions
- [ ] Compress all images to target file sizes
- [ ] Convert to JPG or WebP format
- [ ] Rename files descriptively (not IMG_001.jpg)
- [ ] Create `images/` folder in project

### **Upload & Update:**
- [ ] Copy all images to `images/` folder
- [ ] Update all image paths in `index.html`
- [ ] Write descriptive alt text for each image
- [ ] Test all images load correctly

### **Brochure (if applicable):**
- [ ] PDF is professional quality
- [ ] File size under 10MB
- [ ] Uploaded to correct location
- [ ] Path updated in `script.js`

---

## 🎯 IMAGE SOURCING TIPS

### **Where to Get Images:**

**1. Professional Photography (Best)**
- Hire photographer for property shoot
- Highest quality, unique to your property
- Cost: $$$ but worth it

**2. Property Developer/Owner**
- Request marketing materials
- Often have professional shots
- Cost: Free (usually)

**3. Stock Photography (Temporary)**
- [Unsplash](https://unsplash.com/) - Free, high quality
- [Pexels](https://pexels.com/) - Free commercial use
- [Shutterstock](https://shutterstock.com/) - Premium, paid
- Use only for mockups/testing

**4. Existing Marketing Materials**
- Listings from property websites
- Developer brochures
- Previous marketing campaigns

---

## ⚠️ COMMON MISTAKES TO AVOID

| Mistake | Impact | Solution |
|---------|--------|----------|
| Using huge uncompressed images | Slow loading, poor UX | Compress to <500KB |
| Inconsistent image sizes | Broken layout | Follow size guide exactly |
| Generic stock photos | Unprofessional, not authentic | Use actual property images |
| Missing alt text | Bad SEO, accessibility | Write descriptive alt text |
| Wrong aspect ratios | Images stretched/cropped badly | Use recommended dimensions |
| Images not optimized for web | Page loads slowly | Use JPG/WebP, compress |

---

## 📊 IMAGE QUALITY CHECKLIST

Before uploading any image, verify:

- [ ] **Sharp & In Focus** - No blur or pixelation
- [ ] **Good Lighting** - Not too dark or overexposed
- [ ] **Proper Framing** - Subject centered, good composition
- [ ] **Professional Quality** - No phone snapshots
- [ ] **Correctly Sized** - Meets dimension requirements
- [ ] **Optimized File Size** - Under recommended limits
- [ ] **Descriptive Alt Text** - Written and added

---

## 🚀 PERFORMANCE TARGETS

**Ideal Page Weight:**
- Hero Image: <500KB
- Each Offering Image: <300KB
- Each Amenity Image: <300KB
- **Total Images:** <2MB

**Load Time Goals:**
- Desktop: <2 seconds
- Mobile: <3 seconds

**How to Test:**
- Open page in browser incognito mode
- Check Network tab in DevTools
- Use [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 💡 PRO TIPS

1. **Batch Process:** Resize and compress all images at once
2. **Consistent Style:** All images should have similar tone/style
3. **Mobile First:** Images look good on small screens too
4. **Update Regularly:** Refresh images as property develops
5. **Version Control:** Keep original high-res versions backed up

---

**Need More Help?**  
See `CUSTOMIZATION_GUIDE.md` for complete setup instructions.

Good luck! 📸✨
