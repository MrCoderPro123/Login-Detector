
checkLogin();

function checkLogin() {
    let collectedInfo = localStorage.getItem("userInformation")
    let strCInfo = JSON.parse(collectedInfo);
    strCInfo ? alert("Wellcome Back!") : alert("Please Login")
};








function login() {
    let userName = prompt("Enter Username:");
    let password = prompt("Enter Password");
    let userInfo = {
        name: userName,
        pass: password
    };
    let strInfo = JSON.stringify(userInfo);
    localStorage.setItem("userInformation",strInfo);
};