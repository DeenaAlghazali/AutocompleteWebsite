const input = document.querySelector('#text');
const button = document.querySelector('#btn');

button.addEventListener('click', ()=> {
    const data = input.value;
    xhrRequest('POST', '/search', data);
});