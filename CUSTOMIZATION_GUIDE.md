# 📋 CUSTOMIZATION GUIDE
**C&W Core Landing Page Template**

---

## 🚀 QUICK START (5 Steps to Launch)

1. **Copy the template folder** → Rename to your project
2. **Replace placeholder text** → Use find & replace for {{PLACEHOLDERS}}
3. **Add your images** → Follow the asset guidelines
4. **Update contact info** → Phone, email, WhatsApp
5. **Test and deploy** → Open in browser, check all sections

---

## 📝 PLACEHOLDER REFERENCE GUIDE

### **Meta & SEO**
| Placeholder | Example | Where to Find |
|-------------|---------|---------------|
| `{{PROPERTY_NAME}}` | "Marina Plaza" | `<title>`, `<h2>`, throughout page |
| `{{LOCATION}}` | "Dubai Marina" | `<title>`, meta tags |

### **Hero Section**
| Placeholder | Example | Location |
|-------------|---------|----------|
| `{{HERO_IMAGE_PATH}}` | `images/hero.jpg` | Hero background |
| `{{BADGE_TEXT}}` | "Premium Leasing" | Badge above headline |
| `{{HERO_HEADLINE_LINE1}}` | "Grade A Office Spaces" | H1 first line |
| `{{HERO_HEADLINE_LINE2}}` | "at Marina Plaza" | H1 second line |
| `{{HERO_DESCRIPTION}}` | "Setting new standards..." | Subtitle paragraph |

### **Trust Indicators** (3 items in hero)
| Placeholder | Example |
|-------------|---------|
| `{{TRUST_NUMBER_1}}` | "250m" |
| `{{TRUST_LABEL_1}}` | "Tower Height" |
| `{{TRUST_NUMBER_2}}` | "Grade A" |
| `{{TRUST_LABEL_2}}` | "Certification" |
| `{{TRUST_NUMBER_3}}` | "Direct" |
| `{{TRUST_LABEL_3}}` | "Metro Access" |

### **Offerings Section**
| Placeholder | Example |
|-------------|---------|
| `{{OFFERINGS_TITLE}}` | "Premium Office Solutions" |
| `{{OFFERINGS_SUBTITLE}}` | "Designed for modern business" |

**Offering Card 1:**
- `{{OFFERING_1_IMAGE}}` → Path to image
- `{{OFFERING_1_IMAGE_ALT}}` → Image description
- `{{OFFERING_1_BADGE}}` → "Commercial"
- `{{OFFERING_1_TITLE}}` → "Office Spaces"
- `{{OFFERING_1_DESCRIPTION}}` → Description paragraph
- `{{OFFERING_1_FEATURE_1}}` → "Premium Finishes"
- `{{OFFERING_1_FEATURE_2}}` → "Smart Technology"
- `{{OFFERING_1_FEATURE_3}}` → "Flexible Layouts"

**Offering Card 2:** (Same pattern with _2)

### **Specifications Grid** (4 items)
| Placeholder | Example | Icon Examples |
|-------------|---------|---------------|
| `{{SPEC_1_ICON}}` | "wind" | wind, bolt, shield-alt, leaf |
| `{{SPEC_1_TITLE}}` | "Premium HVAC" | |
| `{{SPEC_1_DESCRIPTION}}` | "Energy-efficient cooling" | |
| (Repeat for SPEC_2, 3, 4) | | |

**Font Awesome Icons:** Find icons at [fontawesome.com/icons](https://fontawesome.com/icons) (use just the name, not "fa-")

### **Trust Badges** (4 certifications)
| Placeholder | Example |
|-------------|---------|
| `{{BADGE_1}}` | "Grade A Certified" |
| `{{BADGE_2}}` | "LEED Gold" |
| `{{BADGE_3}}` | "RERA Compliant" |
| `{{BADGE_4}}` | "ISO 9001" |

### **Floor Statistics** (5 stats)
| Placeholder | Example |
|-------------|---------|
| `{{FLOOR_SECTION_LABEL}}` | "Specifications" |
| `{{FLOOR_DESCRIPTION}}` | Full paragraph about the building |
| `{{STAT_1_NUMBER}}` | "45" |
| `{{STAT_1_LABEL}}` | "Total Floors" |
| (Repeat STAT_2 through 5) | |

**Note:** Add or remove `<div class="stat">` blocks as needed

### **Developer Vision Section** (OPTIONAL)
*This section is optional - you can remove it entirely or customize:*

| Placeholder | Example |
|-------------|---------|
| `{{VISION_LABEL}}` | "Impact & Legacy" |
| `{{VISION_TITLE}}` | "Developer Portfolio" |
| `{{VISION_SUBTITLE}}` | "Leading real estate developer" |
| `{{VISION_STAT_1_NUMBER}}` | "50+ Buildings" |
| (Repeat for stats 2-4) | |

### **Amenities Gallery** (3 images)
| Placeholder | Example |
|-------------|---------|
| `{{AMENITIES_TITLE}}` | "World-Class Amenities" |
| `{{AMENITY_1_IMAGE}}` | `images/pool.jpg` |
| `{{AMENITY_1_ALT}}` | "Infinity Pool" |
| `{{AMENITY_1_LABEL}}` | "Resort-Style Pool" |
| (Repeat for AMENITY_2 and 3) | |

### **Contact Section**
| Placeholder | Example |
|-------------|---------|
| `{{CONTACT_LABEL}}` | "Private Viewing" |
| `{{CONTACT_TITLE}}` | "Schedule Your Tour" |
| `{{CONTACT_DESCRIPTION}}` | "Our experts are ready..." |
| `{{CONTACT_PHONE}}` | "+971 4 245 2100" |
| `{{CONTACT_EMAIL}}` | "leasing@cushwake.ae" |

### **Sticky Hub** (Mobile buttons)
| Placeholder | Example |
|-------------|---------|
| `{{WHATSAPP_NUMBER}}` | "971567121822" (no + or spaces) |
| `{{PHONE_NUMBER}}` | "+971567121822" |

---

## 🎨 ASSET REQUIREMENTS

### **Image Specifications**

| Asset | Recommended Size | Format | Notes |
|-------|------------------|--------|-------|
| **Hero Background** | 1920x1080px | JPG/WebP | High quality, compress to <500KB |
| **Offering Cards** | 800x600px | JPG/WebP | Equal aspect ratio for both |
| **Amenity Gallery** | 800x800px | JPG/WebP | Square format recommended |
| **Logo** | Transparent PNG | PNG | Already included in template as `logo-core.jpg` |

### **Brochure PDF**
- Update the PDF path in `script.js` (line ~275)
- Or replace file: `Wasl Images/WT BROCH (24cm)_V14 (1)_0.pdf`

---

## ⚡ FASTEST METHOD: Find & Replace

Instead of manually editing each placeholder, use your code editor's **Find & Replace All**:

### **Example Workflow:**
1. Open `index.html` in VS Code or any editor
2. Press `Ctrl+H` (Windows) or `Cmd+H` (Mac)
3. Find: `{{PROPERTY_NAME}}`
4. Replace: `Marina Plaza`
5. Click **Replace All**
6. Repeat for all placeholders

### **Recommended Order:**
1. Property name and location (appears most)
2. Contact information (phone, email, WhatsApp)
3. Hero section content
4. Offering cards
5. Specifications and badges
6. Statistics and amenities
7. Image paths

---

## 📂 FILE & FOLDER SETUP

```
your-new-project/
├── index.html          ← Edit placeholders here
├── style.css           ← No changes needed
├── script.js           ← Update PDF path if using brochure
├── logo-core.jpg        ← C&W Core logo (included)
└── images/            ← Create this folder for your assets
    ├── hero.jpg
    ├── offering-1.jpg
    ├── offering-2.jpg
    ├── amenity-1.jpg
    ├── amenity-2.jpg
    ├── amenity-3.jpg
    └── brochure.pdf
```

---

## ✅ PRE-LAUNCH CHECKLIST

### **Content**
- [ ] All {{PLACEHOLDERS}} replaced
- [ ] Property name updated throughout
- [ ] Contact information verified
- [ ] Statistics and numbers accurate
- [ ] All descriptions proofread

### **Images**
- [ ] Hero image added and optimized
- [ ] Offering images added (2)
- [ ] Amenity images added (3)
- [ ] All images compressed (<500KB each)
- [ ] Alt text descriptive and accurate

### **Contact & Forms**
- [ ] Email address updated
- [ ] Phone number updated
- [ ] WhatsApp number updated (with country code)
- [ ] Brochure PDF uploaded (if using download feature)

### **Testing**
- [ ] Open in Chrome/Safari
- [ ] Test on mobile device
- [ ] Click all buttons
- [ ] Submit test form
- [ ] Check WhatsApp link opens
- [ ] Check phone link works
- [ ] Download brochure works (if applicable)

### **SEO**
- [ ] Page title updated
- [ ] Meta description updated
- [ ] Meta keywords updated
- [ ] All images have alt text

---

## 🎯 COMMON CUSTOMIZATION SCENARIOS

### **Scenario 1: Different Property Type (Retail/Mixed-Use)**
- Change `OFFERING_1_BADGE` to "Retail" or "Mixed-Use"
- Update feature lists to match property type
- Replace office-specific specs with retail specs

### **Scenario 2: Fewer or More Statistics**
- Remove or add `<div class="stat">` blocks
- Adjust grid layout in CSS if needed (usually automatic)

### **Scenario 3: Remove Developer Vision Section**
- Delete entire `<section class="section-specs">` for vision
- Page will still work perfectly

### **Scenario 4: Different Brand Colors**
- Edit `style.css` variables at the top
- Change `--cw-red`, `--cw-black`, etc.

---

## 🆘 TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| Images not showing | Check file paths are correct and images are in the right folder |
| Sections look broken | Make sure you didn't delete any HTML tags, only replaced placeholder text |
| Form not working | This is normal - forms need backend setup, currently shows success message only |
| Mobile layout issues | Clear browser cache, test in incognito mode |
| Brochure won't download | Update PDF path in `script.js` line 275 |

---

## 📞 NEED HELP?

- Reference the original Wasl Tower page for examples
- Check `WASL_TOWER_LANDING_PAGE_FINAL_REFERENCE.md` for complete documentation
- Compare your customized version against the template

---

**Time Estimate:** 2-3 hours for a complete customization
**Skill Level:** Basic HTML knowledge helpful but not required

Good luck with your new landing page! 🚀
