const input = document.querySelector('#text');
const button = document.querySelector('#btn');




button.addEventListener('click', ()=> {
    const data = input.value;
    axios.post ('/search', {
        data : data 
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
    // xhrRequest('POST', '/search', data);
});
