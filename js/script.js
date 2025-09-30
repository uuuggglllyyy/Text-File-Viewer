document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileContentDiv = document.getElementById('fileContent');
    const errorText = document.getElementById('errorText');

    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];

        if (!file) {
            errorText.textContent = "Please select a file.";
            return;
        }

        if (file.type !== "text/plain") {
            errorText.textContent = "Only .txt files are allowed.";
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            fileContentDiv.textContent = event.target.result;
            errorText.textContent = "";
        };

        reader.onerror = (event) => {
            errorText.textContent = "Error reading file: " + event.target.error.code;
        };

        reader.readAsText(file);
    });
});