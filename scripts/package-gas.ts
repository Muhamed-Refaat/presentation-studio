/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Fix for ES module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define directories
const distDir = path.resolve(__dirname, '../dist');
const outDir = path.resolve(__dirname, '../app-script-package');

function packageGAS() {
  console.log('📦 Starting Google Apps Script packaging...');

  // Ensure output directory exists and is clean
  if (fs.existsSync(outDir)) {
    console.log('🧹 Cleaning existing output directory...');
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  // Check if dist folder exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ Error: dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Read generated dist/index.html
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found.');
    process.exit(1);
  }

  let htmlContent = fs.readFileSync(indexPath, 'utf-8');

  // Inline CSS files
  const cssRegex = /<link\s+[^>]*href=["']([^"']+\.css)["'][^>]*>/gi;
  htmlContent = htmlContent.replace(cssRegex, (match, cssPath) => {
    // Resolve clean absolute path inside dist folder (handle potential leading slash)
    const cleanCssPath = cssPath.startsWith('/') ? cssPath.slice(1) : cssPath;
    const fullCssPath = path.join(distDir, cleanCssPath);

    if (fs.existsSync(fullCssPath)) {
      console.log(`🎨 Inlining CSS: ${cleanCssPath}`);
      const cssContent = fs.readFileSync(fullCssPath, 'utf-8');
      return `<style>\n${cssContent}\n</style>`;
    } else {
      console.warn(`⚠️ Warning: CSS file not found at ${fullCssPath}`);
      return match;
    }
  });

  // Inline JS files
  const jsRegex = /<script\s+[^>]*src=["']([^"']+\.js)["'][^>]*>\s*<\/script>/gi;
  htmlContent = htmlContent.replace(jsRegex, (match, jsPath) => {
    // Resolve clean absolute path inside dist folder (handle potential leading slash)
    const cleanJsPath = jsPath.startsWith('/') ? jsPath.slice(1) : jsPath;
    const fullJsPath = path.join(distDir, cleanJsPath);

    if (fs.existsSync(fullJsPath)) {
      console.log(`⚡ Inlining JS: ${cleanJsPath}`);
      const jsContent = fs.readFileSync(fullJsPath, 'utf-8');
      return `<script type="module">\n${jsContent}\n</script>`;
    } else {
      console.warn(`⚠️ Warning: JS file not found at ${fullJsPath}`);
      return match;
    }
  });

  // Write the final packaged index.html inside outDir
  const outIndexPath = path.join(outDir, 'index.html');
  fs.writeFileSync(outIndexPath, htmlContent, 'utf-8');
  console.log(`\n✅ Packaged HTML written to: ${outIndexPath}`);

  // Create Code.gs file for Google Apps Script entrypoint
  const codeGsContent = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Serves the HTML presentation application.
 * This is the entrypoint for Google Apps Script Web App deployment.
 */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('ASAR Spatial Presentation Studio')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Example server-side function to demonstrate Google Apps Script integration.
 * In a real GAS project, you can invoke this from the frontend using 'google.script.run'.
 */
function getPresentationMetadata() {
  return {
    title: "ASAR Spatial Presentation Studio",
    organization: "Borg El Arab Technological University",
    department: "IT Department",
    project: "Adaptive Smart Autonomous Robot (ASAR)",
    compiledAt: new Date().toISOString()
  };
}
`;

  const codeGsPath = path.join(outDir, 'Code.gs');
  fs.writeFileSync(codeGsPath, codeGsContent, 'utf-8');
  console.log(`✅ Apps Script code file written to: ${codeGsPath}`);
  console.log('\n🎉 Google Apps Script packaging completed successfully!\n');
}

packageGAS();
