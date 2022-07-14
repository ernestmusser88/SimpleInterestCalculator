window.addEventListener("load", () => {

    x = document.getElementById("years");
    for(let i = 1; i <= 10; i++){y = document.createElement("option");y.value = i;y.text = i;x.add(y);}

    console.log("Page loaded")
});

function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var debug = false;

    if(principal < 1 || isNaN(principal) || principal === null){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("principal").style.borderColor = "red";
        document.getElementById("principal").style.borderRadius = "3px";
        document.getElementById("result").innerHTML="";
        document.getElementById("principal").value=1;
    }
    else{
        document.getElementById("principal").style.borderColor = "";
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var amount = principal+interest;
        
        if(debug === true){
            console.log(`principle: ${principal}`);
            console.log(`rate: ${rate}`);
            console.log(`years: ${years}`);
            console.log(`interest: ${interest}`);
            console.log(`year: ${year}`);
            console.log(`amount: ${amount}`);
        }

        document.getElementById("result").innerHTML=`If you deposit <span class='highlight'> ${principal}</span>,\<br\> at an interest rate of <span class='highlight'> ${rate}% </span>,\<br\> You will receive an amount of <span class='highlight'> ${interest} </span>,\<br\> in the year <span class='highlight'> ${year} </span>\<br\>`
    }

    return false;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval + "%";
} 
        