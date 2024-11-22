function add(num1,num2)
{
    return num1+num2;
}
function sub(num1,num2)
{
    return num1-num2;
}
function mult(num1,num2)
{
    return roundOff(num1*num2);
}
function div(num1,num2)
{
    if(num2==0)
        return "Error";
    return roundOff(num1/num2);
}
function operate(num1,opp,num2)
{
    if(opp==="+")
    return add(num1,num2);
    else if(opp=="-")
    return sub(num1,num2);
    else if(opp=="*")
    return mult(num1,num2);
    else if(opp=="/")
    return div(num1,num2);
}
function roundOff(num)
{
    return Math.round(num*10)/10;
}
function getOutput(s){
    let num1,opp,num2;
    let nums="1234567890.";
        let num="";
        let i=0
        for(;i<s.length;i++)
        {
            if(!(nums.includes(s[i])))
            {
                num1=Number(num);
                console.log(num1);
                break;
            }
            num=num+s[i];
        }
        num="";
        opp=s[i++];
        console.log(opp);
        for(;i<s.length;i++)
            {
                if(!(nums.includes(s[i])))
                {
                    break;
                }
                num=num+s[i];
            }
            num2=Number(num);
            console.log(num2);
            let result= operate(num1,opp,num2);
            display.innerText=result+display.innerText.slice(i,-1);
    }
  
    

btns=document.querySelectorAll("button");
display=document.querySelector(".display");
equals=document.querySelector(".equals");
equals.addEventListener("click",function()
{
    if(display.innerText.length>=3)
    {
        getOutput(display.innerText);
        
    }
});

clear=document.querySelector(".clear_button")
clear.addEventListener("click",function()
{
    display.innerText="";
});
backspace=document.querySelector(".backspace")
backspace.addEventListener("click",function()
{
    display.innerText=display.innerText.slice(0,-2);
});
btns.forEach(function(btn)
{   
    btn.addEventListener("click",function(e){
        if(display.innerText=="Error")
            display.innerText="";
        if(e.target.innerText!="="&&e.target.innerText!="Clear"&&e.target.innerText!="Backspace"){
            if(e.target.innerText!="."||(e.target.innerText=="."&&!(display.innerText.includes(".")))){
                display.textContent=display.innerText+e.target.innerText;
}}});
    
});