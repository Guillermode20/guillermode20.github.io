# CV Section - User Guide

## Overview

This CV section allows you to write your curriculum vitae in Markdown and export it as a PDF directly from your browser.

## How to Edit Your CV

1. **Main CV File**: Edit `content/cv/index.md` to update your CV content
2. **Markdown Formatting**: Use standard Markdown syntax:
   - `#` for main headings
   - `##` for section headings
   - `###` for subsection headings
   - `-` for bullet points
   - `**text**` for bold text
   - `*text*` for italic text
   - `[Link Text](URL)` for links

## Exporting to PDF

### Method 1: Browser Print (Recommended)

1. Navigate to your CV page on the website
2. Click the "📄 Export to PDF" button
3. In the print dialog:
   - Select "Save as PDF" as the destination
   - Choose appropriate margins (recommended: 2cm)
   - Make sure "Background graphics" is enabled for best results
4. Save the PDF

### Method 2: Using Browser Print Dialog Directly

1. Navigate to your CV page
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Follow the same steps as Method 1

### Method 3: Headless PDF Generation (Advanced)

For automated PDF generation, you can use a script with Puppeteer or similar tools.

Install dependencies (if not already installed):
```bash
npm install puppeteer
```

Create a script `scripts/export-cv-pdf.js`:
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to your CV page
  await page.goto('http://localhost:1313/cv/', {
    waitUntil: 'networkidle0'
  });
  
  // Generate PDF
  await page.pdf({
    path: 'cv.pdf',
    format: 'A4',
    margin: {
      top: '2cm',
      right: '2cm',
      bottom: '2cm',
      left: '2cm'
    },
    printBackground: true
  });
  
  await browser.close();
  console.log('PDF generated successfully!');
})();
```

Run the script:
```bash
# Start Hugo server first
hugo server

# In another terminal
node scripts/export-cv-pdf.js
```

## Customizing the CV Layout

### Styling

The CV layout includes custom CSS in `layouts/cv/single.html`. You can customize:

- Colors: Modify CSS variables like `--primary-color`
- Fonts: Adjust font families and sizes
- Spacing: Change margins and padding
- Print layout: Modify the `@media print` section

### Adding Sections

Simply add new sections to your `content/cv/index.md` using Markdown:

```markdown
## New Section

### Subsection Title

Content goes here.
```

## Creating Multiple CV Versions

If you need different CV versions (e.g., technical vs. managerial), create separate files:

```bash
hugo new cv/technical-cv.md
hugo new cv/academic-cv.md
```

Each will be accessible at its own URL and can be exported separately.

## Tips for Best Results

1. **Keep it Concise**: PDFs work best with 1-2 pages
2. **Use Consistent Formatting**: Stick to the template structure
3. **Test Before Exporting**: Preview how it looks in print mode
4. **Links**: Remember that PDFs will have clickable links
5. **Page Breaks**: Use `---` (horizontal rules) to suggest page breaks if needed

## Troubleshooting

**PDF looks different from web view:**
- Check if "Background graphics" is enabled in print settings
- Some browsers handle print differently; try Chrome or Firefox

**Content is cut off:**
- Reduce margins or font sizes
- Break content into smaller sections

**Links don't work in PDF:**
- Ensure you're using proper Markdown link syntax: `[Text](URL)`

## File Structure

```
content/cv/
  └── index.md          # Your main CV content

layouts/cv/
  ├── single.html       # Template for individual CV pages
  └── list.html         # Template for CV listing page

archetypes/
  └── cv.md            # Template for new CV entries
```
