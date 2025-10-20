const puppeteer = require('puppeteer');
const path = require('path');

/**
 * Export CV to PDF using Puppeteer
 * 
 * Usage:
 *   node scripts/export-cv-pdf.js
 *   node scripts/export-cv-pdf.js --url http://localhost:1313/cv/
 *   node scripts/export-cv-pdf.js --output my-cv.pdf
 */

async function exportCVtoPDF() {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const urlIndex = args.indexOf('--url');
    const outputIndex = args.indexOf('--output');

    const cvUrl = urlIndex !== -1 ? args[urlIndex + 1] : 'http://localhost:1313/cv/';
    const outputPath = outputIndex !== -1 ? args[outputIndex + 1] : 'cv.pdf';

    console.log('🚀 Starting CV PDF export...');
    console.log(`📄 URL: ${cvUrl}`);
    console.log(`💾 Output: ${outputPath}`);

    let browser;
    try {
        // Launch browser
        browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        // Set viewport for consistent rendering
        await page.setViewport({
            width: 1200,
            height: 1600,
            deviceScaleFactor: 2
        });

        console.log('🌐 Navigating to CV page...');

        // Navigate to CV page
        await page.goto(cvUrl, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        console.log('📸 Generating PDF...');

        // Generate PDF with professional settings
        await page.pdf({
            path: outputPath,
            format: 'A4',
            margin: {
                top: '2cm',
                right: '2cm',
                bottom: '2cm',
                left: '2cm'
            },
            printBackground: true,
            preferCSSPageSize: false,
            displayHeaderFooter: false
        });

        console.log('✅ PDF generated successfully!');
        console.log(`📍 Location: ${path.resolve(outputPath)}`);

    } catch (error) {
        console.error('❌ Error generating PDF:', error.message);

        if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
            console.error('\n💡 Tip: Make sure Hugo server is running:');
            console.error('   hugo server');
        }

        process.exit(1);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

// Run the export
exportCVtoPDF();
