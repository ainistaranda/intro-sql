-- select id, productionname, customerid from orders
-- where 
-- customerid = 2 
-- and
-- create_time > '01/01/2022'; 

-- select * from orders where customerid != 2

-- select * from customers
-- inner join orders on customers.customerid = orders.customerid



SELECT * FROM customers inner join orders on customers.customerid = orders.customerid -- everything matching
SELECT * FROM customers full join orders on customers.customerid = orders.customerid -- all 
SELECT * FROM customers left join orders on customers.customerid = orders.customerid -- care about customers only
SELECT * FROM customers right join orders on customers.customerid = orders.customerid -- care about orders only

SELECT * FROM customers full join orders on customers.customerid = orders.customerid
order by customers.customerid


-- update customers set name='damian' where customerid=3 --changes name of customerid 3

select * from customers order by customers.customerid -- orders by customerid



-- insert into orders (create_time,productionname,customerid) values ('2022-10-22', 'iphone',5)

-- select * from customers

/* this is a comment 
also a comment */