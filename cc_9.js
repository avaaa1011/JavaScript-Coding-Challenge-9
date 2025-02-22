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

//Task 2 : create a manager class with inheritance
class Manager extends Employee //new class but it extends the employee class from previous task
    {
        constructor(name, id, department, salary, teamSize) 
        //inherits same properties from the Employee class. 
        //also added a new property 'teamSize'
        {
            super(name, id, department, salary);
            this.teamSize = teamSize;
        }
        getDetails() //overiding and updating the previous getDetails to now include teamSize
        {
            return(`Manager Name: ${this.name}\n Employee ID: ${this.id}\n Department: ${this.department}\n Salary: $${this.salary}\n Team Size: ${this.teamSize}\n`);
        }
        calculateBonus() //adding a new method that will return 10% of a manager's annual salary
        {                
            return super.calculateAnnualSalary() * 0.1;
        };
        calculateAnnualSalary() //modifed this method so it can now consider bonuses for managers for task 4
        {
            return super.calculateAnnualSalary() + this.calculateBonus(); 
        };
    }
        const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
        console.log(mgr1.getDetails());
        // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
        console.log(mgr1.calculateBonus()); 
        // Expected output: 9600
    
    
//Task 3: Creating a Company Class
class Company //created a new class
    {
        constructor(name, employees)
        {
            this.name = name;
            this.employees = [];
        };
        addEmployee(employee) //method that adds employees 
        {
            this.employees.push(employee);
        }
        listEmployees() //method that logs all employee's information 
        {
            this.employees.forEach(employee => {console.log(employee.getDetails())});
        }
        calculateTotalPayroll() // adding a method to the Company class for Task 4
        { //method will return the sum of employees and managers salaries 
            return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); 
        }
    }
    const company = new Company("TechCorp");
    company.addEmployee(emp1);
    company.addEmployee(mgr1);
    company.listEmployees();
    // Expected output:
    // "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
    // "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

//Task 4: implementing a payroll system
console.log(company.calculateTotalPayroll()); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)






    