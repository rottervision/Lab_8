

var shoppingList =
    [
    {
      name: "lettuce",
      price: 2.00
},
    {
      name: "milk",
      price: 4.10
},
    {
      name: "chocolate",
      price: 3.50
}
];
function addToList(){

var newItemName = document.getElementById('itemName').value;

var newItemPrice = document.getElementById('itemPrice').value;

var obj = {
  name: newItemName,
  price: newItemPrice
};

shoppingList.push(obj);

}

for (var i=0; i<shoppingList.length; i++){
  console.log(shoppingList[i].name, " $ " + shoppingList[i].price.toFixed(2));

   var printedList = document.createElement('div');

        // printedList.id="Grocery_List"
    printedList.innerHTML = shoppingList[i].name + " $ " + shoppingList[i].price.toFixed(2);

    document.body.appendChild(printedList);

}

 shoppingList.totalAmount = function(){

   var total = 0;
        for (var i = 0; i < shoppingList.length; i++) {
        total = total + shoppingList[i].price;
             }
       return total.toFixed(2);
 };

var printedTotal = document.createElement('div');

printedTotal.innerHTML = "Total $ " + shoppingList.totalAmount();

document.body.appendChild(printedTotal);
