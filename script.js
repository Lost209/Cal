const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');
const ciwResult = document.getElementById('ciw-result');
const cidResult = document.getElementById('cid-result');
const carpetAreaResult = document.getElementById('carpet-area-result');

const horizontalDimensions = [90, 65, 40, 30, 90, 65, 40, 30];
const verticalDimensions = [60, 55, 30, 55, 60, 145, 125, 30];

widthInput.addEventListener('input', calculateCIW);
depthInput.addEventListener('input', calculateCID);

function calculateCIW() {
    const width = parseInt(widthInput.value, 10);
    let ciw = width;
    horizontalDimensions.forEach(dim => ciw -= dim);
    ciwResult.textContent = ciw;
    updateCarpetArea(); // Call updateCarpetArea here
}

function calculateCID() {
    const depth = parseInt(depthInput.value, 10);
    let cid = depth;
    verticalDimensions.forEach(dim => cid -= dim);
    cidResult.textContent = cid;
    updateCarpetArea(); // Call updateCarpetArea here
}

function updateCarpetArea() {
    const ciw = parseInt(ciwResult.textContent, 10);
    const cid = parseInt(cidResult.textContent, 10);
    const carpetArea = ciw * cid;
    carpetAreaResult.textContent = carpetArea + ' sq ft';
}

document.querySelector('.btn-logout').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
