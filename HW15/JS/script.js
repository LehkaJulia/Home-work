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

const getMark = mark => {
    for(let key in gradation){
        if(mark <= key){
            return gradation[key];
        }
    }
}

class User{
    constructor(person){
        Object.assign(this, person) 
    }

    render(){
		return `<div class="user">
			<div class="user__info">
				<div class="user__info--data">
					${this.getImg()}
					<div class="user__naming">
						${this.getInfo()}
					</div>
				</div>
				${this.getRole()}
			</div>
			${this.courses ? this.renderCourses() : ``}
		</div>`;
	}
  

    renderCourses(){
		const Lis = this.courses
			.map(course => `<p class="user__courses--course student">${course.title} <span class="${getMark(course.mark)}">${getMark(course.mark)}</span></p>`)
			.join('')
		return `<div class="user__courses">${Lis}</div>`
    }
    
	getMark(mark){
		let score
                if(mark<=20){
                    score = `${gradation[20]}`
                    } else if(mark>20 && mark<=55){
                        score = `${gradation[55]}`
                    }else if(mark>55 && mark<=85){
                        score = ` ${gradation[85]}`
                    }else if(mark>85 && mark<=100){
                        score = `${gradation[100]}`
                    }   
       
            return `${score}`
	}
	
	getImg(){
			return `<img src="images/users/${this.img}.png" alt="${this.name}" height="50">`
	}
	
	getRole(){
			return `<div class="user__info--role ">
				<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
				<p>${this.role}</p>
			</div>`
	}

	getInfo(){
			return `<p>Name: ${this.name}</p> <p>Age: ${this.age} </p>`
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
    
    renderCourses(){
		const Lis = this.courses
			.map(course => `<div class=" admin"> <p>Title: ${course.title}</p>  <p>Admin's score: <span class="${getMark(course.score)}">${getMark(course.score)}</span></p> <p>Lector: ${course.lector}</p></div>`)
			.join('')
		return `<div class="user__courses">${Lis}</div>`
    }
}


class Lector extends User{
    constructor(person){
        super(person);
    }

  
    renderCourses(){
		const Lis = this.courses
			.map(course => `<div class="lector"><p> Title: ${course.title}</p> <p>Lector's score: <span class="${getMark(course.score)}">${getMark(course.score)}</span></p> <p>Average student's score: <span class="${getMark(course.studentsScore)}">${getMark(course.studentsScore)}</span></p> <p>Lector: ${course.lector}</p></div>`)
			.join('')
		return `<div class="user__courses">${Lis}</div>`
		
    }
		
}

const USERS_TYPES = {
    student: user => new Student (user),
    admin: user => new Admin (user),
    lector: user => new Lector (user)
}
let userClass = users
    .map(user => {
        return USERS_TYPES[user.role] ? USERS_TYPES[user.role](user) : new User(user);
    })
    .map(user => user.render())
	.join(``);

document.write(`<div class="users">${userClass}</div>`)