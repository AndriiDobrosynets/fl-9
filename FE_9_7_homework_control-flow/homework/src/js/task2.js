if (confirm('Do you want to play a game?')) {
  const PRIZE_SMALL = 2;
  const PRIZE_MEDIUM = 5;
  const PRIZE_LARGE = 10;
  const RANGE_MIN = 5;



  let doContinue = true;
  let rangeFrom = 0;
  let rangeTo = RANGE_MIN;
  let prizes = [PRIZE_SMALL, PRIZE_MEDIUM, PRIZE_LARGE];
  let prize = 0;


  while (doContinue) {
    let attempts = 2;
    let randomNumber = Math.round(Math.random() * rangeTo);
    let doWin = false;
    console.log(`Random ${randomNumber}`);

    for (attempts; attempts >= 0; attempts--) {
      let usersNumber = prompt(`
       Enter a number from ${rangeFrom} to ${rangeTo}
       Attems left: ${attempts}
       Total prize: ${prize}$
       Possible prize on current attempt: ${prizes[attempts]}
      `, 0);
      if (usersNumber === null) {
        break;
      } else if (parseInt(usersNumber) === randomNumber) {
        doWin = true;
        prize += prizes[attempts];
        break;
      }
    }


    if (doWin) {
      alert(`Congratulation! Your prize is: ${prize}`);
      doContinue = confirm('Do you want to continue?');
      if (doContinue) {
        rangeTo *= 2;
        for (let i = 0; i < prizes.length; i++) {
          prizes[i] *= 3;
        }
      }

    } else {
      alert(`Thank you for a game. Your prize is: ${prize} `);
      doContinue = confirm('Do you want to play again?');
      if (doContinue) {
        rangeTo = RANGE_MIN;
        prizes = [PRIZE_SMALL, PRIZE_MEDIUM, PRIZE_LARGE];
        prize = 0;
      } else {
        doContinue = false;
      }
    }

  }


} else {
  alert('You did not become a millionaire, but can.');
}