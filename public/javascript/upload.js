document.addEventListener('DOMContentloaded', async () => {
  const response = await fetch('/api/upload');
  const data = await response.json();

  const options = {
    cloudName: data.cloudname,
    apiKey: data.apikey,
    uploadSignatureTimestamp: data.timestamp,
    uploadSignature: data.signature,
    cropping: false,
    folder: 'sample'
  }

  const processResults = (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log(result)

      var str = JSON.stringify(result, null, 4);
      document.getElementById('sampledata').innerHTML += str;
    }
  }

  const myWidget = window.cloudinary.createUploadWidget(
    options,
    processResults
  )
  document
    .getElementById('upload')
    .addEventListener('click', () => myWidget.open(), false)
})