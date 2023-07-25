// get user value 
let user;
user = prompt('Select rock, scissors or paper');

// get PC value

let computer;
let random = Math.random();
computer = Math.floor(random * 3); // (max - min) + min : max는 3, min은 0

//compare

if (computer === 0){
  computer = 'rock'
  console.log(computer);
  if (user === 'rock'){
    alert(`Computer choose ${computer}, Draw!`);
  } else if (user === 'scissors') {
    alert(`Computer choose ${computer}, You loose`);
  } else if (user === 'paper') {
    alert(`Computer choose ${computer}, You win!`);
  } else  {
    alert('Plz check you entered right option');
  }
} else if (computer === 1){
  computer = 'scissors'
  console.log(computer);

  if (user === 'rock'){
    alert(`Computer choose ${computer}, You loose`);
  } else if (user === 'scissors') {
    alert(`Computer choose ${computer}, Draw!`);
  } else if (user === 'paper') {
    alert(`Computer choose ${computer}, You win!`);
  } else  {
    alert('Plz check you entered right option');
  }
} else if(computer === 2){
  computer = 'paper'
  console.log(computer);

  if (user === 'rock'){
    alert(`Computer choose ${computer}, You win!`);
  } else if (user === 'scissors') {
    alert(`Computer choose ${computer}, You loose`);
  } else if (user === 'paper') {
    alert(`Computer choose ${computer}, Draw`);
  } else  {
    alert('Plz check you entered right option');
  }
}



