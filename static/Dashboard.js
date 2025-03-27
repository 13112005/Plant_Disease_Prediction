function createCropCard(crop) {
    const card = document.createElement('div');
    card.className = 'crop-card';
    
    card.innerHTML = `
        <img src="${crop.image}" alt="Crop scan" class="crop-image">
        <div class="crop-info">
            <div class="disease-tag ${crop.status}">${crop.disease}</div>
            <p><strong>Description:</strong> ${crop.description}</p>
            <p><strong>Treatment:</strong> ${crop.treatment}</p>
            <div>Confidence: ${crop.confidence}</div>
        </div>
    `;
    
    return card;
}

function updateCropGrid() {
    fetch('/scans')
        .then(response => response.json())
        .then(cropData => {
            const grid = document.getElementById('crop-grid');
            grid.innerHTML = '';
            cropData.forEach(crop => {
                grid.appendChild(createCropCard(crop));
            });
        })
        .catch(error => console.error('Error fetching scans:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    // Update crop grid
    updateCropGrid();
    setInterval(updateCropGrid, 5000);

    // Handle action block clicks
    document.querySelectorAll('.action-block').forEach(block => {
        block.addEventListener('click', () => {
            const url = block.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});