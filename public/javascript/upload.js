async function uploadClickHandler(event) {
    event.preventDefault();

    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
}

document.querySelector('.upload-btn').addEventListener('click', uploadClickHandler);