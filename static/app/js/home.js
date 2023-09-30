const cameraPreview = document.getElementById("camera-preview");
const startCameraButton = document.getElementById("start-camera");

// Function to start the camera
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        cameraPreview.srcObject = stream;
        cameraPreview.classList.remove("hidden");
        startCameraButton.disabled = true; // Disable the "Start Camera" button once started
    } catch (error) {
        console.error("Error accessing camera:", error);
    }
}

// Event listener for the "Start Camera" button
startCameraButton.addEventListener("click", () => {
    startCamera();
});

// Function to remove image preview
const closeIcon = document.querySelector(".delete");
closeIcon.addEventListener("click", function () {
    const header = document.getElementById("header");
    const stream = cameraPreview.srcObject;

    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
    }

    cameraPreview.srcObject = null;
    cameraPreview.classList.add("hidden");
    startCameraButton.disabled = false; // Enable the "Start Camera" button
    header.style.display = "block"; // Show the header
});
