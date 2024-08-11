const widthInput = document.getElementById('width');
const depthInput = document.getElementById('depth');
const ciwResult = document.getElementById('ciw-result');
const cidResult = document.getElementById('cid-result');

const horizontalDimensions = [90, 65, 40, 30, 90, 65, 40, 30];
const verticalDimensions = [60, 55, 30, 55, 60, 145, 125, 30];

widthInput.addEventListener('input', calculateCIW);
depthInput.addEventListener('input', calculateCID);

function calculateCIW() {
    const width = parseInt(widthInput.value, 10);
    let ciw = width;
    horizontalDimensions.forEach(dim => ciw -= dim);
    ciwResult.textContent = ciw;
}

function calculateCID() {
    const depth = parseInt(depthInput.value, 10);
    let cid = depth;
    verticalDimensions.forEach(dim => cid -= dim);
    cidResult.textContent = cid;
}

document.querySelector('.btn-logout').addEventListener('click', function() {
            window.location.href = 'index.html';
        });