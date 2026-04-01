let broswer="CHROME"
if(broswer.includes("chrome") || broswer.includes("CHROME")){
    console.log("Chrome Launch");
    
}else if(broswer.includes("Firefox"))
{
    console.log("Firefix Luanch");
    
}
else {
    console.log("Broswe is not launch");
    
}

let Day=new Date().getDay()
console.log(Day);


switch(Day){

    case 0:
        console.log("Sunday");
        break;
        
        case 1:
            console.log("Monday");
            break;
            default:
                console.log("Not Day");
                break;
                
}