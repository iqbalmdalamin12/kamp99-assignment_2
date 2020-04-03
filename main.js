const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
//Patrick thought of the loop function
//for loop goes through images until the 5th one
for(let i = 1; i <= 5; i++) {

  //create the loop image
  const loopImage = document.createElement('img');
  //add the elements to creating an image link
  loopImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(loopImage);

  //when image is clicked on, display that as the new big image
  loopImage.onclick = function(e) {
  displayedImage.src = e.target.src;
  }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  //Md Al Amin Iqbal darken function
  const btnClass = btn.getAttribute('class');

  //if button is dark
  if(btnClass === 'dark') {

    //set it now to light and rename the button
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    //lighten the image
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else {
    //keep the class dark and name the button
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    //darken the image
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
