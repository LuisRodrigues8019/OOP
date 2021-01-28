document.querySelector('.cart').addEventListener('click', (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').innerHTML
    const price = Number(document.querySelector('#price').innerHTML.replace('$', ""));
    const image = document.querySelector('#img').src
    
    fetch('/product/addProducts', { 
        method: "POST",
        headers: {"content-type" : "application/json; charset=UTF-8"},
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
        })
    })

    // Add a new item to the side-cart
    document.querySelector('.total').insertAdjacentHTML("beforebegin",`
        <li>
            <a class="photo"><img src=${image} class="cart-thumb" alt="" /></a>"
            <h6><a href="#">${name}</a></h6>
            <p>1x - <span class="price">€${price}</span></p>
        </li>
    `)
    console.log(price);
    // Modify the total of the side-cart
    let total = 0;

    document.querySelectorAll('.price').forEach(price_element => {
        total += Number(price_element.innerHTML.replace('$',""));
    })

    document.querySelector("#total_cart").innerHTML = total;
})