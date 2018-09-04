// UI variables
const btnAddAction = document.getElementById('btn-add-action');
const actions = document.querySelector('.actions');
const fieldAddAction = document.getElementById('field-add-action');

let itemsCounter = 0;
const ITEMS_LIMIT = 10;

fieldAddAction.onkeyup = event => {
  const value = fieldAddAction.value.trim();
  if (value) {
    btnAddAction.disabled = false;
    btnAddAction.onclick = event => {
      addAction(value);
    };
  } else {
    btnAddAction.disabled = true;
  }
};

actions.onclick = event => {
  if (event.target.classList.contains('material-icons')) {
    event.target.textContent = 'check_box';
  }
  // remove action
  if (event.target.classList.contains('delete')) {
    console.log(event.target.parentElement.parentElement.remove());
    itemsCounter--;
  }

};

//create Action
function addAction(action) {
  if (itemsCounter < ITEMS_LIMIT) {
    const li = document.createElement('li');
    li.classList.add('actions__item');

    const actionsCheck = document.createElement('button');
    actionsCheck.className = 'actions__check';

    const iCheck = document.createElement('i');
    iCheck.className = 'material-icons delete-action';
    iCheck.appendChild(document.createTextNode('check_box_outline_blank'));

    const span = document.createElement('span');
    span.appendChild(document.createTextNode(action));

    actionsCheck.appendChild(iCheck);
    actionsCheck.appendChild(span);

    const actionsDelete = document.createElement('button');
    actionsDelete.className = 'actions__delete';
    actionsDelete.innerHTML = '<i class="material-icons delete">delete</i>';

    li.appendChild(actionsCheck);
    li.appendChild(actionsDelete);
    actions.appendChild(li);
    itemsCounter++;
    fieldAddAction.value = '';
  }
}
