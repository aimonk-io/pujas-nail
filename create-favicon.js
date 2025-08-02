import pngToIco from 'png-to-ico';
import fs from 'fs';
import path from 'path';

async function createFavicon() {
  try {
    // Convert the 32x32 PNG to ICO
    const ico = await pngToIco('public/favicon-32x32.png');
    
    // Write the ICO file
    fs.writeFileSync('public/favicon.ico', ico);
    
    console.log('✅ Favicon.ico created successfully!');
    console.log('📁 Location: public/favicon.ico');
  } catch (error) {
    console.error('❌ Error creating favicon:', error);
  }
}

createFavicon(); 