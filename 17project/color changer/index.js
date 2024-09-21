const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random()*16)];


    }
    return color ;
};

let intervalId;
const startchangingcolor = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBgcolor,1000)

    }
    function changeBgcolor(){
        document.body.style.backgroundColor = randomcolor();
    }
};
const stopchanginngcolor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.getElementById('start').addEventListener('click',startchangingcolor);
document.getElementById('stop').addEventListener('click', stopchanginngcolor);
