let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];
let rainbow = hero.concat(native,destination).reverse()

rainbow.splice(0,2,`Richard`)
rainbow.splice(3,1,'Gave','Battle','In','Vain')

const color = [`red`, `orange` ,  `yellow`, `green`, `light`, `blue`, `violet`]

let final=[]

for (i=0; i < rainbow.length; i++) {
    final.push(`
    <div class="wrapper">
    <div class="circle ${color[i]}" > </div>
    <p>${rainbow[i]}</p>
    </div>`)   
}
document.write(
    `<div> ${final.join('')}</div>
`)




