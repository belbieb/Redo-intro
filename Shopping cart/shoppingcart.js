var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta", "Gluten-Free ChocoCake", 'Lactose-Free Bar One', "Sugar-Free Coke", 'Moca Kit Kat', "Fanta Grape"];
var prices = [7.5, 9.5, 8.5, 7.5, 10.5, 15.1, 13, 15.2, 12, 12, 9];
var quantities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;
var totalRemoveAmt = 0;
var add_total = 0;
var checkOutButton

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    if (quantities[x] > 0) {
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalRemoveAmt -= prices[x];

        display_all();
        }
    }

   function displayTotal() {
    document.getElementById("total").innerHTML += "<br/>Total order amount is R" + (totalOrderAmt + totalRemoveAmt).toFixed(2);
    }
var checkOutButton = document.getElementById("checkOutButton");
checkOutButton.addEventListener("click", displayTotal);

function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}