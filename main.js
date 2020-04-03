const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
//Patrick thought of the for loop to click throught the images
for(let i = 1; i < 6; i++) {

  //creates new img element
  const loopImage = document.createElement('img');
  //adds the components of the image link
  loopImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(loopImage);

  //sets image based on the one clicked
  loopImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}

/* Wiring up the Darken/Lighten button */
//Md Al Amin Iqbal lighten/darken function
btn.onclick = function() {

  const darkLight = btn.getAttribute('class');

  if(darkLight === 'dark') {

    //change button name to ligjt
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    //lighten the image
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } 

  else {

    //change button name to darken
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    //darken the image
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
