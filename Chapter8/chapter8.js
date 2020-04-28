var dreamCar = {
    make: "MAZDA",
    model: "MX5",
    color: "Red",
    year: "From the Future",
    bodyStyle: "Luxury Car",
    price: 4500
};
document.getElementById("pricetag")
  .innerHTML = dreamCar.price;

document.getElementById("modelyear")
  .innerHTML = dreamCar.year;

document.getElementById("body")
  .style.backgroundColor = dreamCar.color;

document.getElementById("body")
  .innerHTML = dreamCar.make + " " + dreamCar.model;
