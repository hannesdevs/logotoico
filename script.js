const logo = document.getElementById('logo');
const convert = document.getElementById('convert');

convert.addEventListener('click', function() {
  const file = logo.files[0];
  const reader = new FileReader();

  if (file) {
    reader.readAsDataURL(file);
  } else {
    alert('Please select a file');
  }

  reader.onloadend = function() {
    const img = new Image();
    img.src = reader.result;

    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = this.width;
      canvas.height = this.height;

      ctx.drawImage(this, 0, 0);

      const dataURI = canvas.toDataURL('image/x-icon');

      const link = document.createElement('a');
      link.download = 'logo.ico';
      link.href = dataURI;
      link.click();
    }
  }
});
