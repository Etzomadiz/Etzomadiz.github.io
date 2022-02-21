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
        var randomNum = Math.floor(Math.random() * 11);
        if(randomNum == 0){
            alert("I believe in you.")
        }else if(randomNum == 1){
            alert("You are gonna get through this.")
        }else if(randomNum == 2){
            alert("You look very good today.")
        }else if(randomNum == 3){
            alert("You got this champ.")
        }else if(randomNum == 4){
            alert("Don't let your dreams be dreams.")
        }else if(randomNum == 5){
            alert("Just Do It.")
        }else if(randomNum == 6){
            alert("Don't put off for tommorow what you can do today>")
        }else if(randomNum == 7){
            alert("Keep up the good work champ.")
        }else if(randomNum == 8){
            alert("Don't forget to smile.")
        }else if(randomNum == 9){
            alert("Your hair looks great today.")
        }else{
            alert("Today's gonna be your lucky day.")
        }
    }
    function giveInsult(){
        num = Math.floor(Math.random() * 11);
        if(num == 0){
            alert("Im sure someon told you to reach for the stars. Saldy YOU will never grab one.")
        }else if(num == 1){
            alert("Don't forget that you are worthless.")
        }else if(num == 2){
            alert("Might be time to give up on your dreams.")
        }else if(num == 3){
            alert("Pretty sure even your mom doesn't love you.")
        }else if(num == 4){
            alert("Did your dad not come back with the milk....")
        }else if(num == 5){
            alert("Always give up you can't succeed.")
        }else if(num == 6){
            alert("Your best bet is to become a highschool janitor.")
        }else if(num == 7){
            alert("Man who let you leave the house looking so ugly.")
        }else if(num == 8){
            alert("Man you really are just a walking mistake.")
        }else if(num == 9){
            alert("You really look like you need a diet.")
        }else{
            alert("Pretty sure you have a smoothe brain.")
        }
    }
    function sumTwoNum(){
        var num1 = prompt("Please input a number...");
        var num2 = prompt("Please input a second number...");
        var num3 = parseFloat(num1) + parseFloat(num2);
        alert("The sum of your two numbers is: " + num3);
    }
    function giveHonestTruth(){
       /*alert("Life is meaningless so live it up now.....")
       */
       var add = function( x, y ) {
        return ( x + y );
        }
        alert( add (5, 3) );
    }
    
    

    





