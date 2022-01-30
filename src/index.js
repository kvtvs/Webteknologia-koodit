 //Task 1 - i

const letters = [];

document.addEventListener('keydown', event => {

  let pressedKey = event.key;
  //console.log('keydown:', event.key, event.keyCode);

  letters.push(pressedKey);
  console.log(letters);

  if(letters.join('') == 'hello'){
    alert('You typed hello!');
  };

});

// Task 1 - ii

document.addEventListener('dblclick', event => {
  console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});

// Task 1 - iii

const movingBox = document.querySelector('#box');
const textBox = document.querySelector('#text');

movingBox.addEventListener('mouseover', event => {  

  textBox.innerHTML = "Hahahhahahaha!";
  
});

movingBox.addEventListener('mouseout', event => {  

  textBox.innerHTML = "Please do not tickle me!";
  
});


// Task 1 - iv

const hurryMessage = () => {
  alert('Hurry up!');
};

const timer = setTimeout(hurryMessage, 15000);


// Task 1 - v

const idleTime = 0;

const idleAlert = () => {
  alert('Are you still there?');
};

const idleTimer = () => {

  const timer = setTimeout(timerIncrement, 15000);

  document.addEventListener('mousemove', () =>{
    idleTime = 0;
  });
  document.addEventListener('keydown', () =>{
    idleTime = 0;
  });
};

const timerIncrement = () =>{
  idleTime += 1;
  if (idleTime == 1){
    idleAlert();
  };
};  

