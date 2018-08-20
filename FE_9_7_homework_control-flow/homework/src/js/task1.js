let login = prompt('Enter your login');
let password = null;
let hours = new Date().getHours();



if (!login) {
  alert('Canceled');
} else if (login.length < 4) {
  alert('I don’t know any users having name length less than 4 symbols ');
} else if (login.toLocaleLowerCase() === 'User'.toLocaleLowerCase()) {
  password = prompt('Enter you password');
  if (password.toLocaleLowerCase() === 'SuperUser'.toLocaleLowerCase()) {
    if (hours < 20) {
      alert('Good day!');
    } else {
      alert('Good evening!');
    }

  }
} else {
  alert('I don’t know you');
}