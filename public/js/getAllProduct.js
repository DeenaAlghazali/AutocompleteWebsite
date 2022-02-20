// axios.get('/getAllProducts')
//   .then(function (response) {
//     response.data.forEach(el => {
//         const card = document.querySelector('.card');
//         const div = document.createElement('div');
//         const h3 = document.createElement('h3');
//         h3.textContent = el.title;
//         const img = document.createElement('img');
//         img.src = response.image;
//         console.log(response.image);
//         div.appendChild(h3);
//         div.appendChild(img);
//         card.appendChild(div);

//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// const axios = require('axios');
(function xhrRequest () {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                const data =JSON.parse(xhr.responseText);
                data.forEach(el => {
                    const card = document.querySelector('.card');
                    const div = document.createElement('div');
                    const h3 = document.createElement('h3');
                    h3.textContent = el.title;
                    const img = document.createElement('img');
                    img.src = el.image;
                    // console.log(el);
                    div.appendChild(h3);
                    div.appendChild(img);
                    card.appendChild(div);

                });
            } else if(xhr.status === 404) {
                console.log('404 NOT FOUND');
            }
        }
    }
    xhr.open('GET','https://fakestoreapi.com/products');
    xhr.send();  
}('/getAllProducts'));


