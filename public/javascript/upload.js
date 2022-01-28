async function uploadFormHandler(event) {
    event.preventDefault();
  
    const image = document.querySelector('img[name="image"]').value.trim();
    const cloudinary_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (image) {
      const response = await fetch('upload', {
        method: 'POST',
        body: JSON.stringify({
          name,
          avatar,
          cloudinary_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.upload-form').addEventListener('submit', uploadFormHandler);