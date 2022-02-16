
    function displayDate()
    {
        document.getElementById("showDate").innerHTML = Date();
    }
    function askInfo()
    {
        usersName = window.prompt("What is your name ?")
        usersFeeling = window.prompt("How are tou feeling ? ")
        alert ("Hey! " + usersName + "Im glad you are feeling " + usersFeeling )
    }
    function displayUserInfo()
    {
        userName = document.getElemenetById("Name")
        Feelings = documnet.getElemenetById("userFeelings")
        alert ("Hello " + userName + " You are feeling " + Feelings + " Today.")
    }


