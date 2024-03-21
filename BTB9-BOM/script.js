console.log(window.location)

let reLoad = function(){
    location.reload();
}

let a  = prompt();
console.log(a);

document.cookie = `username= ${a}`

let b = document.cookie;

console.log(b)

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

setCookie("phone",0797570988,3)