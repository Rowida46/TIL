CREATE TABLE Employees(
	empid int primary key,
	empName varchar(20),
	ProjectName varchar(20)
)



CREATE TABLE Project(
	porjId int primary key,
	ProjectName VARCHAR(20),
	EmpId INT  	
);

-- Create a view that will display EmpName, ProjectName for the ‘clerk’.

create view EmployeeProjectName
as
 SELECT EmpName,
    ProjectName
   FROM employees
  WHERE EmpName like 'clerk%'
  ORDER BY EmpName
 with check option
;


select * from EmployeeProjectName;

-- insert into EmployeeProjectName values('clerk nagah', 'is')
-- count number of employees per proj name view
create view NumberOfEmpByProj
as 
select  ProjectName, COUNT(*) AS "NumOfEmp"
from Project
group by EmpId, ProjectName;

select * from NumberOfEmpByProj;


-- projects with no employees
create view ProjsWithoutEmployees
as 
select  projectname, porjId
from Project
where empid not in (select empid from employees)

select * from ProjsWithoutEmployees;


select * from project;

select * from employees;
