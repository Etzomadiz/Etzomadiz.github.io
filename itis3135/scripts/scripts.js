
    function displayDate()
    {
        document.getElementById("showDate").innerHTML = Date();
    }
    function askInfo()
    {
        usersName = prompt("What is your name ?")
        usersFeeling = prompt("How are tou feeling ? ")
        alert ("Hey! " + usersName + "Im glad you are feeling " + usersFeeling )
    }


