-- select * from customers


UPDATE public.customers
SET 
--customer_id=?,
first_name='Spongebob',
last_name='Squarepants', 
-- email=?, 
--phone=?, 
--created_at=?, 
updated_at=NOW()
	WHERE customer_id=2;
	
select * from customers

--DELETE from customers where customer_id=12

