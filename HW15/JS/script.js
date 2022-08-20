const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];
class User{
    constructor(person){
        
        Object.assign(this, person)
    }

    render(){
        let keys = Object.keys(this)
           
        .map(key => {
            if(key === `courses`)
                this[key] = this[key]["score"]
            return key;
        })
        .map(key => `<p>${key}: ${this[key]}</p>`)
        .join(` `)
    return keys;
}
    

    renderCourses(){
        let keys = this.courses
        
        return keys 
    }
      
    
}
class Student extends User{
    constructor(person){
        super(person);
    }
}
class Admin extends User{
    constructor(person){
        super(person);
    }
    
    renderCourses(){}
}
class Lector extends User{
    constructor(person){
        super(person);
        
    }

    renderCourses(){}
}

const USERS_TYPES = {
    student: user => new Student (user),
    admin: user => new Admin (user),
    lector: user => new Lector (user)
}
let userClass = users
    .map(user => {
        return USERS_TYPES[user.role] ? USERS_TYPES[user.role](user) : new User(user);
    });

console.log(userClass);
// userClass
//     .forEach(persone => document.write(persone.render()));


userClass
    .forEach(persone => console.log(persone.renderCourses()));
// console.log(userClass[0].courses)


