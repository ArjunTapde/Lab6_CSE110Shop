// Script.js

let thisStorage = window.localStorage;


window.addEventListener('DOMContentLoaded', async () => {
  // TODO
  let productListEL = document.getElementById('product-list');
  
  if (thisStorage.getItem('data') == null)
  {
    let data = await (await fetch('https://fakestoreapi.com/products')).json();
    thisStorage.setItem('data', JSON.stringify(data));
  }
  
  let dataStored = JSON.parse(thisStorage.getItem('data'));

  dataStored.forEach( product =>
    {
      let productEL = document.createElement('product-item');
      //productEl = new ProductItem(product.) imageLink, productName, productPrice
      productID = product.id
      imageLink = product.image;
      productName = product.title;
      productPrice = product.price;

      productEL = new ProductItem(productID, imageLink, productName, productPrice);
      productListEL.appendChild(productEL);


    })






});

