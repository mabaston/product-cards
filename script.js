var products = [
    {
        "id":1,
        "title":"Fjallraven",
        "price":109.95,
        "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate":3.9,
            "count":120
        }
    },
    {
        "id":2,
        "title":"Slim Fit T-Shirts ",
        "price":22.3,
        "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate":4.1,
            "count":259
        }
    },
    {
        "id":3,
        "title":"Mens Jacket",
        "price":55.99,
        "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate":4.7,
            "count":500
        }
    },
    {
        "id":4,
        "title":"Mens Slim Fit",
        "price":15.99,
        "description":"The color could be slightly different between on the screen and in practice.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate":2.1,
            "count":430
        }
    },
    {
        "id":5,
        "title":"Gold Silver Bracelet",
        "price":695,
        "description":"From our Legends Collection, the Naga was inspired by the mythical water dragon.",
        "category":"jewelery",
        "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate":4.6,
            "count":400
        }
    }
];

const container = document.querySelector('.container');

for(let product of products) {

    container.innerHTML +=   `<div class="card-container">
                                <img class="product-image" src="${product.image}">
                                <div class="card-contents">
                                    <h3>${product.title}</h3>

                                    <div class="rating-session">
                                        <img class="star-icon" src="images/star-icon.png">
                                        <span>${product.rating.rate}</span>
                                    </div>
                                    
                                    <p>${product.description}</p>
                                    <div class="card-contents-bottom-container">
                                        <h2>$${product.price}</h2>
                                        <button>Buy now</button>
                                    </div>
                                </div>
                            </div>`
}