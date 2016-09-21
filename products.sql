/*CREATE database Bamazon;*/

USE Bamazon;

CREATE TABLE `Products` (
 `ItemID` INT NOT NULL,
 `ProductName` VARCHAR(100) NULL,
 `DepartmentName` VARCHAR(100) NULL,
 `Price` DECIMAL(6,2) NULL,
 `StockQuantity` INT NULL,
 PRIMARY KEY (`ItemID`)
);

SELECT * FROM Products;