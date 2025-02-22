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
            const bonus = 0.1
            const startingSalary = this.salary * 12;
            return bonus * startingSalary;
        }
        const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
        console.log(mgr1.getDetails());
        // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
        console.log(mgr1.calculateBonus()); 
        // Expected output: 9600
    
//Task 3: Creating a Company Class
class Company
    {
        constructor(name, employees)
        {
            this.name = name;
            this.employees = [];
        };
        addEmployee(employee)
        {
            this.employees.push(employee);
        }
        listEmployees()
        {
            this.employees.forEach(employee => {console.log(employee.getDetails())});
        }
    }
    const company = new Company("TechCorp");
    company.addEmployee(emp1);
    company.addEmployee(mgr1);
    company.listEmployees();
    // Expected output:
    // "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
    // "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"


    