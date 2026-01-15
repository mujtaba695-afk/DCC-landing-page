# 🚀 QUICK START GUIDE
**C&W Core Landing Page Template - Get Started in 30 Minutes**

---

## 📦 WHAT YOU HAVE

This template contains:
- ✅ **index.html** - Template with {{PLACEHOLDERS}}
- ✅ **style.css** - Complete styling (no changes needed)
- ✅ **script.js** - All functionality (minor updates only)
- ✅ **logo-core.jpg** - C&W Core branded logo
- 📖 **CUSTOMIZATION_GUIDE.md** - Detailed instructions
- 📖 **ASSET_GUIDELINES.md** - Image requirements

---

## ⚡ 5-MINUTE SETUP

### **Step 1: Copy Template**
1. Copy entire `CW-Core-Landing-Template` folder
2. Rename to your project: `Marina-Plaza-Landing` (example)
3. Open folder in your code editor (VS Code recommended)

### **Step 2: Prepare Your Content**
Gather the following:
- Property name
- Location
- Contact info (email, phone, WhatsApp)
- 6 images (hero + 2 offerings + 3 amenities)
- Property description text
- Optional: PDF brochure

### **Step 3: Find & Replace**
Open `index.html` and use Find & Replace (Ctrl+H / Cmd+H):

**Essential Replacements:**
```
Find: {{PROPERTY_NAME}}
Replace: [Your Property Name]

Find: {{LOCATION}}
Replace: [Location]

Find: {{CONTACT_EMAIL}}
Replace: [your-email@cushwake.ae]

Find: {{CONTACT_PHONE}}
Replace: [+971 X XXX XXXX]

Find: {{WHATSAPP_NUMBER}}
Replace: [971XXXXXXXXX]

Find: {{PHONE_NUMBER}}
Replace: [+971XXXXXXXXX]
```

### **Step 4: Add Images**
1. Create `images/` folder in your project
2. Copy your 6 images into it
3. Update image paths in HTML:
```
{{HERO_IMAGE_PATH}} → images/hero.jpg
{{OFFERING_1_IMAGE}} → images/office.jpg
{{OFFERING_2_IMAGE}} → images/lifestyle.jpg
{{AMENITY_1_IMAGE}} → images/pool.jpg
{{AMENITY_2_IMAGE}} → images/gym.jpg
{{AMENITY_3_IMAGE}} → images/dining.jpg
```

### **Step 5: Test**
1. Open `index.html` in your browser
2. Check all sections load correctly
3. Test mobile view (right-click → Inspect → Toggle device toolbar)
4. Click all buttons to verify they work

---

## 📋 COMPLETE PLACEHOLDER LIST

### **How to Use:**
1. Copy this table to a spreadsheet
2. Fill in your content
3. Use Find & Replace to update all placeholders

| Placeholder | Your Content | Notes |
|-------------|--------------|-------|
| `{{PROPERTY_NAME}}` | | Used throughout |
| `{{LOCATION}}` | | E.g. "Sheikh Zayed Road" |
| `{{CONTACT_EMAIL}}` | | Your contact email |
| `{{CONTACT_PHONE}}` | | With country code |
| `{{WHATSAPP_NUMBER}}` | | Numbers only, no + |
| `{{PHONE_NUMBER}}` | | With + and spaces |
| | | |
| **HERO SECTION** | | |
| `{{HERO_IMAGE_PATH}}` | | Path to hero image |
| `{{BADGE_TEXT}}` | | E.g. "Premium Leasing" |
| `{{HERO_HEADLINE_LINE1}}` | | First line of H1 |
| `{{HERO_HEADLINE_LINE2}}` | | Second line of H1 |
| `{{HERO_DESCRIPTION}}` | | Subtitle paragraph |
| | | |
| **TRUST INDICATORS** | | |
| `{{TRUST_NUMBER_1}}` | | E.g. "303m" |
| `{{TRUST_LABEL_1}}` | | E.g. "Tower Height" |
| `{{TRUST_NUMBER_2}}` | | E.g. "Grade A" |
| `{{TRUST_LABEL_2}}` | | E.g. "Certified" |
| `{{TRUST_NUMBER_3}}` | | E.g. "Direct" |
| `{{TRUST_LABEL_3}}` | | E.g. "Metro Link" |
| | | |
| **OFFERINGS** | | |
| `{{OFFERINGS_TITLE}}` | | Section heading |
| `{{OFFERINGS_SUBTITLE}}` | | Section description |
| `{{OFFERING_1_IMAGE}}` | | Image path |
| `{{OFFERING_1_IMAGE_ALT}}` | | Image description |
| `{{OFFERING_1_BADGE}}` | | E.g. "Commercial" |
| `{{OFFERING_1_TITLE}}` | | Card title |
| `{{OFFERING_1_DESCRIPTION}}` | | Card description |
| `{{OFFERING_1_FEATURE_1}}` | | First feature |
| `{{OFFERING_1_FEATURE_2}}` | | Second feature |
| `{{OFFERING_1_FEATURE_3}}` | | Third feature |
| `{{OFFERING_2_IMAGE}}` | | Image path |
| `{{OFFERING_2_IMAGE_ALT}}` | | Image description |
| `{{OFFERING_2_BADGE}}` | | E.g. "Lifestyle" |
| `{{OFFERING_2_TITLE}}` | | Card title |
| `{{OFFERING_2_DESCRIPTION}}` | | Card description |
| `{{OFFERING_2_FEATURE_1}}` | | First feature |
| `{{OFFERING_2_FEATURE_2}}` | | Second feature |

*(See CUSTOMIZATION_GUIDE.md for complete list)*

---

## 🎨 IMAGE QUICK REFERENCE

| Image Type | Size | Location |
|------------|------|----------|
| Hero Background | 1920x1080px | Hero section |
| Offering Cards (2) | 800x600px each | Offerings section |
| Amenity Gallery (3) | 800x800px each | Amenities section |

**All images should be:**
- JPG or WebP format
- Compressed (<500KB for hero, <300KB for others)
- Professional quality

---

## ✅ PRE-LAUNCH CHECKLIST

**Content:**
- [ ] Property name replaced everywhere
- [ ] Contact info updated (email, phone, WhatsApp)
- [ ] All descriptions written
- [ ] Statistics and numbers verified

**Images:**
- [ ] All 6 images added to `images/` folder
- [ ] Hero image is high quality
- [ ] All image paths updated in HTML
- [ ] Alt text written for all images

**Testing:**
- [ ] Page opens in browser
- [ ] All sections visible
- [ ] Mobile view looks good
- [ ] All buttons clickable
- [ ] WhatsApp link works
- [ ] Phone link works

**Optional:**
- [ ] Brochure PDF uploaded
- [ ] PDF path updated in `script.js`
- [ ] Tested brochure download

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Images not showing | Check file paths match exactly (case-sensitive) |
| Sections look weird | Verify you didn't delete HTML tags |
| Find & Replace broke something | Undo and be more specific with search terms |
| Mobile looks wrong | Clear browser cache, test in incognito |
| Placeholder text still visible | You missed some replacements - search for `{{` |

---

## 📚 DOCUMENTATION

- **CUSTOMIZATION_GUIDE.md** - Complete placeholder reference
- **ASSET_GUIDELINES.md** - Image specs and optimization
- **WASL_TOWER_LANDING_PAGE_FINAL_REFERENCE.md** - Original example

---

## 🎯 TIME ESTIMATE

- **Minimal Setup:** 30 minutes
  - Replace basic placeholders
  - Add images
  - Test in browser

- **Complete Customization:** 2-3 hours
  - All content customized
  - Images optimized
  - Thorough testing
  - PDF brochure setup

- **Professional Polish:** 4-6 hours
  - Professional photography
  - Custom content writing
  - Cross-browser testing
  - Performance optimization

---

## 💡 TIPS FOR SUCCESS

1. **Start Simple:** Replace critical placeholders first (name, contact)
2. **Test Often:** Check in browser after each major change
3. **Save Originals:** Keep original template as backup
4. **Be Consistent:** Use same terminology throughout
5. **Mobile First:** Always check mobile view

---

**Ready to launch?** 🚀

Open `index.html` in your browser and see your new landing page!

For detailed instructions, see **CUSTOMIZATION_GUIDE.md**
