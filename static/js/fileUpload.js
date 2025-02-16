// fileUpload.js
export function setupFileUpload() {
    const fileInput = document.querySelector('.file-upload input');
    const filesDiv = document.querySelector('.uploaded-files');

    fileInput.addEventListener('change', (e) => {
        filesDiv.innerHTML = '';
        Array.from(e.target.files).forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'uploaded-file';
            fileDiv.innerHTML = `
                ${file.name}
                ×
            `;
            filesDiv.appendChild(fileDiv);

            fileDiv.querySelector('.remove-file').addEventListener('click', () => {
                fileDiv.remove();
            });
        });
    });
}