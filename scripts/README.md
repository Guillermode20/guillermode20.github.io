# CV PDF Export Scripts

This directory contains scripts for automating CV export to PDF.

## Prerequisites

Install Puppeteer:
```bash
npm install puppeteer
```

Or add to your package.json:
```json
{
  "devDependencies": {
    "puppeteer": "^21.0.0"
  }
}
```

## Usage

### Basic Usage

1. Start your Hugo server:
```bash
hugo server
```

2. In another terminal, run the export script:
```bash
node scripts/export-cv-pdf.js
```

This will create a `cv.pdf` file in your project root.

### Advanced Usage

**Custom URL:**
```bash
node scripts/export-cv-pdf.js --url http://localhost:1313/cv/
```

**Custom Output Path:**
```bash
node scripts/export-cv-pdf.js --output output/will-hick-cv.pdf
```

**Both Options:**
```bash
node scripts/export-cv-pdf.js --url http://localhost:1313/cv/ --output my-cv.pdf
```

### Export from Production Site

```bash
node scripts/export-cv-pdf.js --url https://guillermode20.github.io/cv/ --output cv-production.pdf
```

## Adding to package.json

You can add npm scripts to make this easier:

```json
{
  "scripts": {
    "export-cv": "node scripts/export-cv-pdf.js",
    "export-cv:prod": "node scripts/export-cv-pdf.js --url https://guillermode20.github.io/cv/"
  }
}
```

Then run:
```bash
npm run export-cv
```

## Troubleshooting

**Error: Cannot find module 'puppeteer'**
- Run: `npm install puppeteer`

**Error: net::ERR_CONNECTION_REFUSED**
- Make sure Hugo server is running: `hugo server`

**PDF looks wrong**
- Check that your CV renders correctly in the browser first
- Try adjusting margins in the script

**Puppeteer installation issues on Windows**
- Run as administrator or use `npm install puppeteer --ignore-scripts`
