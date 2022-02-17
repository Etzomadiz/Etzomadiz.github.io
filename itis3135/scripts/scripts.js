    function displayDate() {
        document.getElementById("showDate").innerHTML = Date();
    }
    
    function displayUserInfo() {
    
        var userName = document.getElementById("userName").value;
        console.log(userName);
        var feelings = document.getElementById("userFeelings").value;
        console.log(feelings);
        alert("Hello " + userName + ". You are feeling " + feelings + ".");
    }

    function calculateTax() {
        var num1 = prompt("Please enter your bill total.");
        var num2 = parseInt(num1);
        var num3 = .06;
        var num4 = (num2 * num3);
        let taxAmount = (num4);
        let totalAmount = (num2 + taxAmount);
        alert("Your tax amount is: $" + taxAmount.toFixed(2) + " and your total amount is: $" + totalAmount.toFixed(2));
    }

    function giveCompliment(){
        alert("Your hair looks neat champ.")
    }
    function giveInsult(){
        alert("Your hair looks bad.")
    }
    function sumTwoNum(){
        var num1 = prompt("Please input a number...");
        var num2 = prompt("Please input a second number...");
        var num3 = parseFloat(num1) + parseFloat(num2);
        alert("The sum of your two numbers is: " + num3);
    }
    function giveHonestTruth(){
        alert("Life is meaningless so live it up now.....")
    }
    

    





