// Product images configuration
const products = [
    { name: "headphones", width: 800, height: 600 },
    { name: "smartwatch", width: 800, height: 600 },
    { name: "backpack", width: 800, height: 600 },
    { name: "speaker", width: 800, height: 600 },
    { name: "tshirt", width: 800, height: 600 },
    { name: "jeans", width: 800, height: 600 },
    { name: "wallet", width: 800, height: 600 },
    { name: "shoes", width: 800, height: 600 }
];

// Function to download an image
async function downloadImage(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        return true;
    } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
        return false;
    }
}

// Download images sequentially to avoid browser download limits
async function downloadAllImages() {
    const statusElement = document.getElementById('downloadStatus');
    let successCount = 0;
    let failCount = 0;

    for (const product of products) {
        statusElement.textContent = `Downloading ${product.name}.jpg...`;
        const url = `https://picsum.photos/${product.width}/${product.height}?random=${Math.random()}`;
        const success = await downloadImage(url, `${product.name}.jpg`);
        
        if (success) {
            successCount++;
        } else {
            failCount++;
        }
        
        // Add a small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    statusElement.textContent = `Download complete! Successfully downloaded ${successCount} images. Failed: ${failCount}`;
    if (failCount > 0) {
        statusElement.style.color = 'red';
    } else {
        statusElement.style.color = 'green';
    }
} 