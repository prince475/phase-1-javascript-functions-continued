// code your solution here
function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}

function saturdayFun(arg = "roller-skate"){
    return `This Saturday, I want to ${arg}!`;

}

function wrapAdjective(str = "*"){
    return function (par = "special"){
        return `You are ${str}${par}${str}!`

    }
}