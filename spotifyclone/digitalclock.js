let clock = document.querySelector("#clock");

 setInterval(function ff()
 {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
 },1000);



 