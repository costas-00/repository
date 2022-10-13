let data = new Date();

let dayofweek;
switch(data.getDay()) {
    case 0 : dayofweek = 'Sunday'; break;
    case 1 : dayofweek = 'Monday'; break;
    case 2 : dayofweek = 'Tuesday'; break;
    case 3 : dayofweek = 'Wednesday'; break;
    case 4 : dayofweek = 'Thursday'; break;
    case 5 : dayofweek = 'Friday'; break;
    case 6 : dayofweek = 'Saturday'; break;
}
document.getElementById("dayOfWeek").innerHTML = dayofweek;

let type;
const hours = (number) => {
    number <= 12 ? type = "AM" :type = "PM";
    return type;
}

let currTime = `${hours(data.getHours())} ${type == 'PM' ? data.getHours()-12 : data.getHours()} : ${data.getMinutes()} : ${data.getSeconds()}`;

document.getElementById("currentTime").innerHTML = currTime;

function printPage(){
    window.print();
}

let mm;
mm < 10 ? mm = `0${data.getMonth()+1}` : mm = data.getMonth()+1;

let dd;
dd < 10 ? dd = '0' + data.getDate() : dd = data.getDate();

let yy = data.getFullYear();

document.getElementById("format1").innerHTML = `${mm}-${dd}-${yy}`;
document.getElementById("format2").innerHTML = `${mm}/${dd}/${yy}`;
document.getElementById("format3").innerHTML = `${dd}-${mm}-${yy}`;
document.getElementById("format4").innerHTML = `${dd}/${mm}/${yy}`;

function calculateArea(){
    let area;
    let a = parseInt(document.getElementById("side1").value);
    let b = parseInt(document.getElementById("side2").value);
    let c = parseInt(document.getElementById("side3").value);
    let p = (a + b + c)/2;
    alert(p);
    alert(p*(p-a)*(p-b)*(p-c))
    area = Math.sqrt((p*(p-a)*(p-b)*(p-c)));
    document.getElementById("result").innerHTML = " Result: " + area;
}

function reverseString(){
    let arrayString = String(document.getElementById("string").value).split('');
    let newString = new String();
    for(let i = arrayString.length; i > 0; i--){
        newString += arrayString.pop();
    }
    document.getElementById("reversedString").innerHTML = "Reversed string: " + newString.toUpperCase();
}

function controlChance(){
    let number = parseInt(document.getElementById("aleator").value);
    let aleatorNumber = Math.floor(Math.random() * 10) + 1;
    number == aleatorNumber 
    ? document.getElementById("resultChance").innerHTML = "Good job!"
    : document.getElementById("resultChance").innerHTML = "Incorect"
}

function adressURL(){
    alert(document.URL);
}

function nameOfVariable(){
    let name = document.getElementById("variabila").value;
    this[name] = 123;
    alert(this[name]);
}

function startWithPy(){
    
    let str = document.getElementById("control").value;
    str.startsWith('Py') ? alert(str) : alert('Py' + str);
}

/*class StringPlus extends String{
    removeLetter = (position) =>{
        let part1 = this.substring(0, position);
        let part2 = this.substring(position + 1, this.length);
        return part1 + part2;
        }
} 

function removee(){
    let str = new StringPlus();
    str = document.getElementById("control1").value;
    let newString = str.removeLetter(3);
    console.log(newString);
}*/

const compareKeys = (obj, obj1) => {
   return Object.keys(obj).every(key => obj1.hasOwnProperty(key) && obj.key === obj1.key);
}

function resultCompare(){
    const firstObject = {
        age : 23,
        name : 'Vlad',
        gen : 'mascul'
    }
    const secondObject = {
        name : 'Vlad',
        age : 23,
        gen : 'mascul'
    }
    
    console.log(compareKeys(firstObject, secondObject));
}

const copy_to_Clipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  function resultCopy(){
  copy_to_Clipboard('Exemplu');
  }

  const video = document.getElementById("myVideo");

  navigator.mediaDevices.getUserMedia({video : true}).then(MediaStream => video.src = MediaStream)
  .catch(err => console.log(err)); //daca utilizatorul ne va permise adica e un promise, atunci video va avea sursa de la camera, daca nu apare error