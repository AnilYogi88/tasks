# tasks

# Here I have completed the task given for node js

# One can simply run the program using npm start

Here is the Solution to the last question:

1.Shops Entity:

Attributes: shop_id (Primary Key), shop_name, location, etc.

2.Categories Entity:

Attributes: category_id (Primary Key), category_name, etc.

3.Products Entity:

Attributes: product_id (Primary Key), product_name, etc.

Relationships:

Many-to-One with Shops (many products can belong to one shop)

Many-to-Many with Categories (a product can belong to multiple categories)

4.Pricing Entity:

Attributes: price_id (Primary Key), date, price, etc.

Relationships:

Many-to-One with Products (many prices for one product on different dates)

5.ProductCategories Entity (for the many-to-many relationship between Products and Categories):

Attributes: product_id (Foreign Key referencing Products), category_id (Foreign Key referencing Categories)
