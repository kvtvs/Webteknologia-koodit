const foodMenu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}];

const newFood = document.getElementById('newFood');


const addFood = String(newFood.value);

const regex = new RegExp(/^[A-ZÖÄÅ]{1}[a-zöäå]{4,64}([-,\\\/()\w\d\s]+)$/); 

let result = regex.test(addFood);

console.log(foodMenu);

//ASC
//foodMenu.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

//DESC
//foodMenu.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

// FILTERIN
/*newMenu = foodMenu.filter(function (item){
  return item.price <= 5.00;
});

console.log(newMenu);*/

/*const raisePrice = (array) => {
  let raisedPrices = array.map(price => price.price*1.15);
   console.log(raisedPrices);
}; */

//REDUCE
//foodMenu.reduce((a, b) => (a.price + b.price));
