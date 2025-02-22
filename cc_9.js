//Task 1: creating an employee class
class Employee //creating a class with multiple properties
    {
        constructor(name, id, department, salary)
        {
            this.name = name;
            this.id = id;
            this.department = department;
            this.salary = salary;
        }
        getDetails() //adding a method that will format the employee's details 
        {  
            return (`Employee Name: ${this.name}\n Employee ID: ${this.id}\n Department: ${this.department}\n Salary: $${this.salary}`);
        }
        calculateAnnualSalary() //adding a method that will calculate the employee's annual salary
        { 
            let annualSalary = this.salary * 12; 
        }
        const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
        console.log(emp1.getDetails()); 
        // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
        console.log(emp1.calculateAnnualSalary()); 
        // Expected output: 60000
      
    }