var Person = (function() {
	function Person (name, age) {
		this._name = name;
		this._age = age;
	}

	Person.prototype.birthDay = function() {
		this._age += 1;
	};

	Person.prototype.getAge = function() {
		return this._age;
	}

	Person.prototype.setAge = function(newAge) {
		if (newAge <= 0) {
			return 'The age should be positive!';
		}
		this._age = newAge;
	}

	Person.prototype.toString = function() {
		return 'Name: ' + this._name + '\n' + 'Age: ' + this._age;
	};

	return Person;
}());


var Student = (function() {
	
	function Student (name, age, grade) {
		Person.call(this, name, age);    //vikame roditelskiq konstructor
		this._grade = grade;
	}

	Student.prototype = new Person();          // po tozi nacin Student nasledqva Person klasa
	Student.prototype.constructor = Student;  // ne zaduljitelen red, slagame go za da vurvi navsqkyde

	Student.prototype.toString = function() {
		return Person.prototype.toString.call(this) + //vikame toString metoda v bazoviq klas
		'\n' + 'Grade: ' + this._grade;
	};

	return Student;
}());


var st = new Person('Stanka', 22);
var st1 = new Student('Pesho', 16, 10);
console.log(st1.toString());
console.log(st.toString());



Object.prototype.extend = function (parent) {       // moje da se polzva vmesto Student.prototype = new Person();
	Student.prototype.constructor = Student;         // 
    if (!Object.create) {
        Object.prototype.create = function (proto) {
            function F() {
            };
            F.prototype = proto;
            return new F;
        };
    }

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};