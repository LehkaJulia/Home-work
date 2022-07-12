const name = prompt('Name?');
const lastName = prompt('Last name?');
const day = Number(prompt('Day of birthday?'));
const month = Number(prompt('Month of birthday?'));
const year = Number(prompt('Year of birthday?'));
const nowYear = 2022;
let dm = Number(month + "." + day);

let zodiac
if (dm < 1.20 && dm >= 2.18) {
    zodiac = 'Aquarius ♒'
} else if (dm < 2.19 && dm >= 3.20) {
    zodiac = 'Pisces ♓'
} else if (dm >= 3.21 && dm < 4.19) {
    zodiac = 'Aries♈'
} else if (dm >= 4.20 && dm <5.20) {
    zodiac = 'Taurus ♉'
} else if (dm >= 5.21 && dm < 6.20) {
    zodiac = 'Gemini ♊'
}  else if (dm >= 6.21 && dm < 7.22) {
    zodiac = 'Cancer ♋'
}  else if (dm >= 7.23 && dm < 8.22) {
    zodiac = 'Leo ♌'
}  else if (dm >= 8.23 && dm < 9.22) {
    zodiac = 'Virgo ♍'
}  else if (dm >= 9.23 && dm < 10.22) {
    zodiac = 'Libra ♎'
}  else if (dm >= 10.23 && dm < 11.21) {
    zodiac = 'Scorpio ♏'
} else if (dm >= 11.22 && dm < 12.21) {
    zodiac = 'Sagittarius ♐'
} else if (dm >= 12.22 && dm < 1.19) {
    zodiac = 'Capricorn ♑'}


let laepYaer = false;

if (year % 400 === 0) {

    laepYaer = true

} else if (year % 100 >= 1 && year % 4 === 0 ) {

    laepYaer = true

}



resultStr = `${laepYaer ? " (leap year)" : ""}`;




console.log ("User Bio:", name, lastName+",", nowYear - year, ("years old" + `${laepYaer ? " (leap year)" : ""}`)+",", zodiac+";");
