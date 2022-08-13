const users = [
	["john","red",5,["ball", "book", "pen"]],
	["becky","blue",10,["tape", "backpack", "pen"]],
	["susy","red",55,["ball", "eraser", "pen"]],
	["tyson","green",1,["book", "pen"]],
   ];
let usersForEach = JSON.parse(JSON.stringify(users))
usersForEach.forEach(item => item[0] += '!');
console.log(usersForEach)	


let newArray = JSON.parse(JSON.stringify(users))
newArray.map(item => item[0] += '?')
console.log(newArray)	

let filteredArray  = users.filter(
	function(item){
		for(let i=0; i<users.length; i++){
			if(item[i]== 'red'){		
				return item
			}	
		}
	}
)

const getSum = list => list.reduce((sum, item) => sum+item);
let  totalScoreSum = getSum(filteredArray.map(totalScore => totalScore[2]))
  
let tableTitle = ['Name','Comand', 'Score', 'Data' ]
const renderThead = list => {
	    return `<thead>
	        <tr>
	            ${list.map(item => `<th>${item}</th>`).join(``)}
	        </tr>
	    </thead>`;
	};
const renderTbody = list => {
	return `<tbody>
		${
			list
				.map(userData => `<tr>
					${userData.map(item => `<td>${item}</td>`).join(``)}
				</tr>`)
				.join(``)
		}
	</tbody>`;
}
	
let table = `<table>
	    ${renderThead(tableTitle)}
	    ${renderTbody(filteredArray)}
	    <tfoot>
	        <tr>
	            <td colspan="4">Total score: ${totalScoreSum}</td>
	        </tr>
	    </tfoot>
	</table>`;

document.write(table)