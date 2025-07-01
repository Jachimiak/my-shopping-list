const list = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    let inputItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    
    listText.textContent = inputItem;
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem)
    })
});

button.addEventListener('keyup', function(e) {
    if (e.keycode ===13) {
    let inputItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    
    listText.textContent = inputItem;
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem)
    })
}
});

