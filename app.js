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
    playSoundAndChangeText(horseNoise, 'Horse')
  });

  const myCat = document.getElementById('cat-noise')
  const catPhoto = document.getElementById('Cat-img')
  const catSound = document.getElementById('Cat')

  catSound.addEventListener('click', () => {
    playSoundAndChangeText(myCat, 'cat')
  });

  const myDog = document.getElementById('dog-noise')
  const dogButton = document.getElementById('Dog')
  const dogPhoto = document.getElementById('dog-img')


  function playSoundAndChangeText(sound, animalName) {
    //Use "sound" instead of dogSound to keep it generic
    sound.play();
    h2el.textContent = animalName;
  }
  
  dogButton.addEventListener('click', () => {
    playSoundAndChangeText(myDog, 'dog'); 
  })

  const h2el = document.querySelector('h2');

  document.addEventListener('keydown', (event) => {
    if (event.key === 'd'){
      playSoundAndChangeText(myDog, 'Dog');
    }
    
    if (event.key === 'c'){
      playSoundAndChangeText(myCat, 'Cat');
    }
      if (event.key === 'h'){
        playSoundAndChangeText(horseNoise, 'horse');
      }
    
  })
