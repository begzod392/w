let flag = document.getElementById('flags');
 
async function getData() {
    let response = await fetch('https://69491daf1282f890d2d53c45.mockapi.io/products');
    let data = await response.json();
    console.log(data);
    data.forEach(item => {
        let div = document.createElement('div');
        div.innerHTML = `
        <h3>${item.name}</h3><p>Price: $${item.price}</p><img src="${item.image}" alt="${item.name}" width="100">
        `;
        document.body.appendChild(div);
        div.classList.add('product-item');
    });
}
getData();
flag.addEventListener('click', getData);

 