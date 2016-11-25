# NodeJS-MySQL

Connect with mySQL by using NodeJS


This is an Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory.


#### Instructions:


1. Create a MySQL Database called `Bamazon`.

2. Then create a Table inside of that database called `Products`.

3. The products table should have each of the following columns:

	* ItemID (unique id for each product)

	* ProductName (Name of product)

	* DepartmentName 

	* Price (cost to customer)

	* StockQuantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `BamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages. 
	* The first should ask them the ID of the product they would like to buy. 
	* The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. 
	* If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store *does* have enough of the product, you should fulfill the customer's order. 
	* This means updating the SQL database to reflect the remaining quantity.
	* Once the update goes through, show the customer the total cost of their purchase.
