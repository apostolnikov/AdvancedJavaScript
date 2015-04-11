function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return {
    	name: this.firstName + " " + this.lastName,
    	FirstName: this.firstName,
    	LastName: this.lastName
    };
}

var peter = new Person("Peter", "Jackson");
console.log(peter.name);
console.log(peter.FirstName);
console.log(peter.LastName);

