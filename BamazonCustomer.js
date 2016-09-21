var mysql = require("mysql");
var inquirer = require('inquirer');
var userRespond;
var userselected;

var connection =mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"guagua",
    database:"Bamazon"
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
  runSearch();
});

connection.query('SELECT * FROM `Products` WHERE `StockQuantity` > "1"', function (error, results, fields) {

console.log("working")
});

var runSearch = function (){
  inquirer.prompt({
      name: "itemID",
      type: "input",
      message: "what's the product ID you would like to buy?",
  }).then(function(answer){
      var query = 'SELECT itemID ProductName, DepartmentName, Price, StockQuantity FROM Products WHERE ?'
      connection.query(query, {itemID: answer.itemID}, function(error,res){
        for (var i = 0; i<res.length; i++) {
          var userRespond = "ProductName: " + res[i].ProductName+ "|| DepartmentName: " + res[i].DepartmentName + "|| Price: " + res[i].Price;
          var testID = res[i].ProductName;
          var ProductQuantity = res[i].StockQuantity;
          var unitPrice = res[i].Price;
          console.log(userRespond)
          console.log("selected product name: " + testID)
          }
      quantitySearch(ProductQuantity,testID,unitPrice);

      })
  })
};

var quantitySearch = function (ProductQuantity,testID,unitPrice){
  inquirer.prompt({
    name:"StockQuantity",
    type:"input",
    message:"how many would you like to purchase",
  }).then(function(answer){
        var userPick = answer.StockQuantity; 
        console.log(userPick)
        if (userPick<ProductQuantity) {
          console.log("Product is product available!, we have " + ProductQuantity + "availble" )
          var currentQuantity = ProductQuantity - userPick;
          connection.query('UPDATE Products SET StockQuantity = ? WHERE itemID = ?', [currentQuantity, testID], function(err, results){
              if(err) throw err;
          console.log('Record Updated: ' + results.changedRows + ' rows');
          console.log("Product ID: " + testID + "'s inventory is now: " + currentQuantity);
          totalAmount(userPick,currentQuantity,testID,unitPrice);
});
        }else{
          console.log("item is no longer available,please pick your product again")
          runSearch();
        }
  })
};



var totalAmount = function(userPick,currentQuantity,testID,unitPrice) {
  console.log("product Id: " + testID + " has remaining " + currentQuantity + " left in inventory")
  console.log("Price is $" + unitPrice + " for each");
  var Totalsum = unitPrice * userPick;
  console.log("your total is $" + Totalsum);
  console.log("ending")
};
