import { addition ,subtraction,multiplication,division } from './calculating-module';


const root = document.getElementById('root');
const container = document.createElement('div');
container.className = 'container';
const card = document.createElement('div');
card.className = 'card';
const signs = ['+','-','*','/'];

const input = document.createElement('input');
input.type = 'text';
const signsWrap = document.createElement('div');
signsWrap.className = 'signs-wrap';

const equalBtn = document.createElement('button');
equalBtn.className = 'button';
equalBtn.innerText = '=';

const clearBtn = document.createElement('button');
clearBtn.className = 'button';
clearBtn.innerText = 'C';




for(let i = 0; i <= 9; i++) {
  const btn = document.createElement('button');
  btn.className = 'button';
  btn.value = i;
  btn.innerText = i;
  signsWrap.appendChild(btn);
}

signs.forEach(sign => {
  const btn = document.createElement('button');
  btn.className = 'button';
  btn.value = sign;
  btn.innerText = sign;
  signsWrap.appendChild(btn);
})



signsWrap.appendChild(equalBtn);
signsWrap.appendChild(clearBtn);
card.appendChild(input);
card.appendChild(signsWrap);
container.appendChild(card);
root.appendChild(container);


signsWrap.addEventListener('click',(e) => {
  input.value += e.target.value;
})

clearBtn.addEventListener('click',() => {
  input.value = '';
})


equalBtn.addEventListener('click',() => {
  const expresion = input.value;
  const numbers = expresion.split(/[\s*/+-]+/g);
  const operator = expresion.split(/[0-9]/g)[1];
  const operant1 = Number(numbers[0]);
  const operant2 = Number(numbers[1]);
  calculate(operant1,operant2,operator);
})

function calculate(operator1,operator2,sign) {
  switch (sign) {
    case '+' : {
      input.value = addition(operator1,operator2);
      break;
    }
    case '-' : {
      input.value = subtraction(operator1,operator2);
      break;
    }
    case '*' : {
      input.value = multiplication(operator1,operator2);
      break;
    }
    case '/' : {
      input.value = division(operator1,operator2);
      break;
    }
    default :
    input.value = '';
  }
}


















