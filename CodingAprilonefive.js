const entry = prompt('Do you want to 1. Deposit or 2. Widthdraw?');
alert(typeof entry);
//create a variable called balance and give it an initial value
let balance = 300;
if (entry == 1) {
  const amount = Number(prompt('How much do you want to deposit?'));
  alert(`Your new balance is ${balance + amount}!`);
  if (balance + amount <= 0) {
    alert(`You dont have any money`);
  } else {
    alert(`You dont have money`);
  }
} else if (entry == 2) {
  const amount = Number(prompt('How much do you want to widthdrawl?'));
  alert(`You're new balance is ${balance - amount}!`);
}