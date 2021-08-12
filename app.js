// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  const horseNoise = document.getElementById('Horse-Sound');
  const myHorse = document.getElementById('Horse-img');
  const noise = document.getElementById('Noise');


  noise.addEventListener('click', () => {
    horseNoise.play()
  });