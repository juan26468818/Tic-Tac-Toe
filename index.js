const canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}