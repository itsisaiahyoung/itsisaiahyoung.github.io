const text = "Hello! I'm Isaiah Young, a young software developer. I'm passionate about technology and love creating innovative solutions. Welcome to my portfolio!";
const delay = 50;
let i =0; 

function typeWriter() {
  if(i < text.length) {
    document.getElementById('about-p').innerHTML += text.charAt(i);
    i++;

    setTimeout(typeWriter, delay);
  }
}

typeWriter();

