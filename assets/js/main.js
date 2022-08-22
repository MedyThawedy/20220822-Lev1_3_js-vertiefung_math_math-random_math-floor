
let randomNum;
let randomNum1_10;
let randomNum1_100;


function fnRandomNum() {
    randomNum = Math.floor(Math.random() * 4);
    return (randomNum);

}

console.log(fnRandomNum());

function fnRandomNum1_10() {
    randomNum1_10 = Math.floor(Math.random() * 11);
    return (randomNum1_10);
}

console.log(fnRandomNum1_10());

function fnRandomNum1_100() {
    randomNum1_100 = Math.floor(Math.random() * 101);
    return (randomNum1_100);
}

console.log(fnRandomNum1_100());

let fn_Show = () => {
    console.clear();
    randomNum = 0;
    randomNum1_10 = 0;
    randomNum1_100 = 0;

    document.getElementById('idOutput').innerHTML = '<p>' + '</p>';

    console.log(fnRandomNum());
    console.log(fnRandomNum1_10());
    console.log(fnRandomNum1_100());

    document.getElementById('idOutput').innerHTML += '<p>' + randomNum + '</p>';
    document.getElementById('idOutput').innerHTML += '<p>' + randomNum1_10 + '</p>';
    document.getElementById('idOutput').innerHTML += '<p>' + randomNum1_100 + '</p>';
}

let fnHide = () => {
    console.clear();
    randomNum = 0;
    randomNum1_10 = 0;
    randomNum1_100 = 0;
    document.getElementById('idOutput').innerHTML = '<p>' + '</p>';
}