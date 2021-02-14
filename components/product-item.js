// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  /*
  <!-- li class="product">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
                    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
                    <p class="price">$109.95</p>
                    <button onclick="alert('Added to Cart!')">Add to Cart</button>
                </li -->
  */

  constructor(productID, imageLink, productName, productPrice)
  {
    let refreshProof = window.localStorage;

    super();
    let shadow = this.attachShadow({mode: 'open' });

    // for li element
    const listElement = document.createElement('li');
    listElement.setAttribute('class', 'product');

    // for img element 
    const image = listElement.appendChild(document.createElement('img'));
    image.setAttribute('src', imageLink);
    image.setAttribute('alt', productName);
    image.width = 200;
    image.style.maxHeight = "275px";


    // for 1st p element
    const title = listElement.appendChild(document.createElement('p'));
    title.innerHTML = productName;

    // for 2nd p element
    const price = listElement.appendChild((document.createElement('p')));
    price.innerHTML = "$" + productPrice;


    // for button element
    const clicker = listElement.appendChild((document.createElement('button')));

    let cartCounter = document.getElementById('cart-count');

    if (refreshProof.getItem(productID.toString()) == null) {
      clicker.innerHTML = "Add to Cart";
      clicker.setAttribute('onclick', "alert('Added to Cart!')");
    } else {
      clicker.innerHTML = "Remove from Cart";
      clicker.setAttribute('onclick', "alert('Removed from Cart!')");
    }

    if (!(refreshProof.getItem("counter") == null)) {
      cartCounter.innerHTML = refreshProof.getItem("counter");
    }

    //event listener for the button
    clicker.addEventListener('click', function() {
      if (refreshProof.getItem(productID.toString()) == null) {
        refreshProof.setItem(productID.toString(), "true");
        
        // increment cart count
        let incremented = parseInt(cartCounter.innerHTML);
        incremented++;
        cartCounter.innerHTML = incremented.toString();
        refreshProof.setItem("counter", incremented.toString());

        clicker.innerHTML = "Remove from Cart";
        clicker.setAttribute('onclick', "alert('Removed from Cart!')");
      } 
      else {
        refreshProof.removeItem(productID.toString());
        
        // decrement cart count
        let decremented = parseInt(cartCounter.innerHTML);
        decremented--;
        cartCounter.innerHTML = decremented.toString();
        refreshProof.setItem("counter", decremented.toString());

        clicker.innerHTML = "Add to Cart";
        clicker.setAttribute('onclick', "alert('Added to Cart!')");
      }
    
    
    });

    // for CSS
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', './styles/styles.css');

    // attach element to shadow DOM
    shadow.appendChild(linkElem);
    shadow.appendChild(listElement);
  }
}

customElements.define('product-item', ProductItem);