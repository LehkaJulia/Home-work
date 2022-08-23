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
        
        // let info = `<div class="wrapper"><img src="images/users/${this.img}.png" alt="user"> <p>Name: ${this.name}</p> <p>Age: ${this.age} </p><div class="role"><img class="role-img" src="images/roles/${this.role}.png" alt="user">${this.role}</div> </div>`
        return `<div class="wrapper">${this.getImg()}  ${this.getInfo()} ${this.renderCourses()} ${this.getRole()}  </div>`
}
  

    renderCourses(){
        
        let score
        if(this.courses){
      
            this.courses.find(user => {
                if(user["mark"]<=20){
                    score = `<p>${user["title"]} ${gradation[20]}</p>`
                    } else if(user["mark"]>20 && user["mark"]<=55){
                        score = `<p>${user["title"]} ${gradation[55]}</p>`
                    }else if(user["mark"]>55 && user["mark"]<=85){
                        score = `<p>${user["title"]} ${gradation[85]}</p>`
                    }else if(user["mark"]>85 && user["mark"]<=100){
                        score = `<p>${user["title"]} ${gradation[100]}</p>`
                    }
            
                
                    
            })
            return `${score}`
        } 
            
        
            
      
        
    }
      
   getImg(){
    return `<img src="images/users/${this.img}.png" alt="user"> `
   }
   getRole(){
    return `<div class="role"><img class="role-img" src="images/roles/${this.role}.png" alt="user">${this.role}</div>`
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
        let adminScore
        this.courses.map(user => {

            if(user["score"]<=20){
                adminScore = (`${user["title"]} ${gradation[20]}`)
            } else if(user["score"]>20 && user["score"]<=55){
                adminScore = (`${user["title"]} ${gradation[55]}`)
            }else if(user["score"]>55 && user["score"]<=85){
                adminScore = (`${user["title"]} ${gradation[85]}`)
            }else if(user["score"]>85 && user["score"]<=100){
                adminScore = (`${user["title"]} ${gradation[100]}`)
            }
        })
        return `${adminScore}`
        
    }
}
class Lector extends User{
    constructor(person){
        super(person);
        
    }

  
    renderCourses(){
        let resultLecto
        let resultStud
        this.courses.map(user => {
            
            if(user["score"]<=20){
                resultStud = ` ${gradation[20]}`
            } else if(user["score"]>20 && user["score"]<=55){
                resultStud=`${gradation[55]}`
            }else if(user["score"]>55 && user["score"]<=85){
                resultStud=` ${gradation[85]}`
            }else if(user["score"]>85 && user["score"]<=100){
                resultStud=` ${gradation[100]}`
            }
    
            if(user["studentsScore"]<=20){
                resultLecto= ` ${gradation[20]}`
            } else if(user["studentsScore"]>20 && user["studentsScore"]<=55){
                resultLecto=` ${gradation[55]}`
            }else if(user["studentsScore"]>55 && user["studentsScore"]<=85){
                resultLecto=` ${gradation[85]}`
            }else if(user["studentsScore"]>85 && user["studentsScore"]<=100){
                resultLecto=` ${gradation[100]}`
            }
           
        })
        return `${studentScore}: ${resultStud}  ${lectorScore}:${resultLecto}`
    }
    
}
let studentScore = `Average student's score`
let lectorScore = `Lector's score`
const USERS_TYPES = {
    student: user => new Student (user),
    admin: user => new Admin (user),
    lector: user => new Lector (user)
}
let userClass = users
    .map(user => {
        return USERS_TYPES[user.role] ? USERS_TYPES[user.role](user) : new User(user);
    })
    .map(user => {
        console.log(user);
        return user;
    })
    .forEach(user => document.write(user.render()))
    