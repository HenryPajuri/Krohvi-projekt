const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.getElementById('send_button');
const clearButton = document.getElementById('clear_button');
const tone_name = document.getElementById('tone_name');
const product_type = document.getElementById('product_type');
const transparency = document.getElementById('transparency');
const ammount = document.getElementById('ammount');
const finish_time = document.getElementById('finish_time');
const start_time = document.getElementById('start_time');
const date1 = document.getElementById('date2');
const user = document.getElementById('user');
const client = document.getElementById('client');
const comment2 = document.getElementById('comment2');


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    itemsArray.push(tone_name.value, client.value, product_type.value, ammount.value, transparency.value, finish_time.value, date1.value, user.value, comment2.value, start_time.value);
    //itemsArray.push(client.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(ammount.value + " purki " + product_type.value + " | baas " + transparency.value + ", Toon: " + tone_name.value + " | " + client.value + " |  Toonimise alguse kellaeg " + start_time.value + ", tuleb järgi " + finish_time.value + " | " + date1.value + " | sisestaja: " + user.value + " kommentaar: " + comment2.value);
    tone_name.value = "";
    client.value = "";
    product_type.value = "";
    ammount.value = "";
    transparency.value = "";
    finish_time.value = "";
    start_time.value = "";
    user.value = "";
    date1.value = "";
    comment2.value = "";
});

data.forEach(item => {
    liMaker(item);
});

clearButton.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
});