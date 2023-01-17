-- Display the Employee National ID, LoginID, JobTitle from the Employee table (HumanResources Schema) as a report to your manager.
select na from humanresources.employee;


--27- Display the Contact Title,FirstName and LastName for those holding Title ‘Ms” OR  LastName=’Antrim’


select person.person.firstname, person.person.lastname, person.personphone.phonenumber
from person.person join person.personphone 
on person.person.businessentityid = person.personphone.businessentityid
where lastname = 'Antrim' or  title = 'MS' 

-- 29- Display ProductID, Name if its weight is unknown (Null).
select productid, name from production.product
where weight = null


-- 30-Display each product name along with its its sub categoray name and category name. 

select prd.name,  mainCat.name, subCat.name
from production.product as 'prd'join production.productcategory as 'mainCat' 
on mainCat.productcategoryid = prd.productid
