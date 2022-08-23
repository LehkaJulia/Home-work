const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const courses = [
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
let studentScore = `Average student's score`
let lectorScore = `Lector's score`
function renderCourses(cours){
	cours.map(user => {
		
		if(user["score"]<=20){
			document.write(`${lectorScore}: ${gradation[20]}`)
		} else if(user["score"]>20 && user["score"]<=55){
			document.write(`${lectorScore}: ${gradation[55]}`)
		}else if(user["score"]>55 && user["score"]<=85){
			document.write(`${lectorScore}: ${gradation[85]}`)
		}else if(user["score"]>85 && user["score"]<=100){
			document.write(`${lectorScore}: ${gradation[100]}`)
		}

		if(user["studentsScore"]<=20){
			document.write(`${studentScore}: ${gradation[20]}`)
		} else if(user["studentsScore"]>20 && user["studentsScore"]<=55){
			document.write(`${studentScore}: ${gradation[55]}`)
		}else if(user["studentsScore"]>55 && user["studentsScore"]<=85){
			document.write(`${studentScore}: ${gradation[85]}`)
		}else if(user["studentsScore"]>85 && user["studentsScore"]<=100){
			document.write(`${studentScore}: ${gradation[100]}`)
		}
		
	})
	
}

renderCourses(courses)


// const users = [
// 	{
// 		name: "Jack Smith",
// 		age: 23,
// 		img: "JackSmith",
// 		role: "student",
// 		courses: [
// 			{
// 				"title": "Front-end Pro",
// 				"mark": 20
// 			},
// 			{
// 				"title": "Java Enterprise",
// 				"mark": 100
// 			}
// 		]
// 	},
// 	{
// 		name: "Amal Smith",
// 		age: 20,
// 		img: "AmalSmith",
// 		role: "student"
// 	},
// 	{
// 		name: "Noah Smith",
// 		age: 43,
// 		img: "NoahSmith",
// 		role: "student",
// 		courses: [
// 			{
// 				"title": "Front-end Pro",
// 				"mark": 50
// 			}
// 		]
// 	}
// ]
// let keys
// function render(users){
// 	users.map(user => {
// 		// console.log(`${user.name}`)})
		
// 		if(user.name && user.age){
// 			document.write(`<img src="images/users/${user.img}.png" alt="user"> Name: ${user.name} Age: ${user.age} ${user.role}`)
// 		} 
// 		// if(user.img){
			
// 		// 	console.log(user.img = `<img src="images/users/${user.img}.png" alt="user">`)
// 		// } 
		
// 	// })
// 	// keys = Object.keys(user)
// 	// .map(key => {
// 	// 	if(key === `img`)
// 	// 		this.key = `<img src="images/users/${this[key]}.png" alt="user">`
		
// // })
// 	})
// }


// // document.write(keys)
// render(users)
// const gradation = {
// 	20: "satisfactory",
// 	55: "good",
// 	85: "very-good",
// 	100: "excellent"
// };

// const users = [
// 	{
// 		name: "Jack Smith",
// 		age: 23,
// 		img: "JackSmith",
// 		role: "student",
// 		courses: [
// 			{
// 				"title": "Front-end Pro",
// 				"mark": 20
// 			},
// 			{
// 				"title": "Java Enterprise",
// 				"mark": 100
// 			}
// 		]
// 	},
// 	{
// 		name: "Amal Smith",
// 		age: 20,
// 		img: "AmalSmith",
// 		role: "student"
// 	},
// 	{
// 		name: "Noah Smith",
// 		age: 43,
// 		img: "NoahSmith",
// 		role: "student",
// 		courses: [
// 			{
// 				"title": "Front-end Pro",
// 				"mark": 50
// 			}
// 		]
// 	},
// 	{
// 		name: "Charlie Smith",
// 		age: 18,
// 		img: "CharlieSmith",
// 		role: "student",
// 		courses: [
// 			{
// 				"title": "Front-end Pro",
// 				"mark": 75
// 			},
// 			{
// 				"title": "Java Enterprise",
// 				"mark": 23
// 			}]
// 	},
// 	{
// 		name: "Emily Smith",
// 		age: 30,
// 		img: "EmilySmith",
// 		role: "admin",
// 		courses: [
// 			{
// 				"title": "Front-end Pro",
// 				"score": 10,
// 				"lector": "Leo Smith"
// 			},
// 			{
// 				"title": "Java Enterprise",
// 				"score": 50,
// 				"lector": "David Smith"
// 			},
// 			{
// 				"title": "QA",
// 				"score": 75,
// 				"lector": "Emilie Smith"
// 			}]
// 	},
// 	{
// 		name: "Leo Smith",
// 		age: 253,
// 		img: "LeoSmith",
// 		role: "lector",
// 		courses: [
// 			{
// 				"title": "Front-end Pro",
// 				"score": 78,
// 				"studentsScore": 79
// 			},
// 			{
// 				"title": "Java Enterprise",
// 				"score": 85,
// 				"studentsScore": 85
// 			}
// 		]
// 	}
// ];
// class User{
//     constructor(person){
        
//         Object.assign(this, person)
        
//     }

//     render(){
//         users.map(user => {
//             if(user.name && user.age){
//                 document.write(`<div class="wrapper"><img src="images/users/${user.img}.png" alt="user"> <p>Name: ${user.name}</p> <p>Age: ${user.age} </p><div class="role"><img class="role-img" src="images/roles/${user.role}.png" alt="user">${user.role}</div> </div>`)
//             } 
//         })
// }
  

//     renderCourses(){
//         this.courses
//             .map(user => {
            
//                 if(user["mark"]<=20){
//                     user["mark"] = `<p>${user["title"]} ${gradation[20]}</p>`
//                 } else if(user["mark"]>20 && user["mark"]<=55){
//                     user["mark"] = `<p>${user["title"]} ${gradation[55]}</p>`
//                 }else if(user["mark"]>55 && user["mark"]<=85){
//                     user["mark"] = `<p>${user["title"]} ${gradation[85]}</p>`
//                 }else if(user["mark"]>85 && user["mark"]<=100){
//                     user["mark"] = `<p>${user["title"]} ${gradation[100]}</p>`
//                 }
            
//         })
      
        
//     }
      
   

// }

// class Student extends User{
//     constructor(person){
//         super(person);
//     }
// }
// class Admin extends User{
//     constructor(person){
//         super(person);
//     }
    
//     renderCourses(){
//         this.courses.map(user => {
            
//             if(user["score"]<=20){
//                 document.write(`<p>${user["title"]} ${gradation[20]}</p>`)
//             } else if(user["score"]>20 && user["score"]<=55){
//                 console.log(`<p>${user["title"]} ${gradation[55]}</p>`)
//             }else if(user["score"]>55 && user["score"]<=85){
//                 console.log(`<p>${user["title"]} ${gradation[85]}</p>`)
//             }else if(user["score"]>85 && user["score"]<=100){
//                 console.log(`<p>${user["title"]} ${gradation[100]}</p>`)
//             }
            
//         })
        
//     }
// }
// class Lector extends User{
//     constructor(person){
//         super(person);
        
//     }

//     renderCourses(){}
// }

// const USERS_TYPES = {
//     student: user => new Student (user),
//     admin: user => new Admin (user),
//     lector: user => new Lector (user)
// }
// let userClass = users
//     .map(user => {
//         return USERS_TYPES[user.role] ? USERS_TYPES[user.role](user) : new User(user);
//     })
//     .forEach(persone => document.write(persone.render()))
    // .forEach(persone => persone.renderCourses());























	    // for(let key in user){
                 
                //     if(key==="mark"  && user[key] <=20){
                //         score.push(`<p>${user["title"]} ${gradation[20]}</p>`)
                //     } else if(key==="mark"  &&  user [key]>20 && user [key]<=55){
                //         score.push(`<p>${user ["title"]} ${gradation[55]}</p>`)
                //     }else if(key==="mark"  &&  user[key]>55 && user [key]<=85){
                //         score.push(`<p>${user["title"]} ${gradation[85]}</p>`)
                //     }else if(key==="mark"  && user[key]>85 && user [key]<=100){
                //         score.push(`<p>${user["title"]} ${gradation[100]}</p>`)
                //     } 
                    
                // }
				  // renderCourses(){
    //     this.courses.map(user => {
            
    //         if(user["score"]<=20){
    //             document.write(`<p>${user["title"]} ${gradation[20]}</p>`)
    //         } else if(user["score"]>20 && user["score"]<=55){
    //             document.write(`<p>${user["title"]} ${gradation[55]}</p>`)
    //         }else if(user["score"]>55 && user["score"]<=85){
    //             document.write(`<p>${user["title"]} ${gradation[85]}</p>`)
    //         }else if(user["score"]>85 && user["score"]<=100){
    //             document.write(`<p>${user["title"]} ${gradation[100]}</p>`)
    //         }
            
    //     })
    // }
	// .forEach(user => document.write(user.renderCourses()));
  
    


// userClass.map(user => console.log(user.courses))
// userClass.map(user => console.log(user.courses))
// userClass
//     .forEach(persone => document.write(persone.getImage()));
    // .forEach(persone => document.write(persone.render()));
    // .forEach(persone => document.write(persone.renderCourses()));

// userClass
//     .forEach(userClass => console.log(userClass.courses[1]["mark"]));
// for()

// console.log(gradation[20])

// document.write(userClass.render())