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

  const myCat = document.getElementById('cat-noise')
  const catPhoto = document.getElementById('Cat-img')
  const catSound = document.getElementById('Cat')

  catSound.addEventListener('click', () => {
    myCat.play()
  });

  const myDog = document.getElementById('dog-noise')
  const dogButton = document.getElementById('Dog')
  const dogPhoto = document.getElementById('dog-img')

  dogButton.addEventListener('click', () => {
    myDog.play()
  })

  const h2el = document.querySelector('h2');

  dogButton.addEventListener('keydown', (event) => {
    if (event.key === 'd'){
      myDog.play();
      h2el.textContent = 'Dog';
    }
  })
  