document.addEventListener("DOMContentLoaded",
function(){
    document.querySelector(".btn").disabled = true;

    document.querySelector("#inputCity").onkeyup = function(){
        if(document.querySelector("#inputFirst").value.length > 4 && document.querySelector("#inputPassword4").value.length >= 8 && document.querySelector("#inputLast").value.length >= 5 && document.querySelector("#inputEmail4").value.length != 0 && document.querySelector("#inputCity").value.length != 0 && document.querySelector("#inputAddress").value.length != 0 ){
        document.querySelector(".btn").disabled = false;
        }
        else{
            document.querySelector(".btn").disabled = true;
        }
    }

    document.querySelector("#inputFirst").onkeyup = function(){
        if(document.querySelector("#inputFirst").value.length > 4 && document.querySelector("#inputPassword4").value.length >= 8 && document.querySelector("#inputLast").value.length >= 5 && document.querySelector("#inputEmail4").value.length != 0 && document.querySelector("#inputCity").value.length != 0 && document.querySelector("#inputAddress").value.length != 0 ){
        document.querySelector(".btn").disabled = false;
        }
        else{
            document.querySelector(".btn").disabled = true;
        }
    }

    
    document.querySelector("#inputPassword4").onkeyup = function(){
        if(document.querySelector("#inputFirst").value.length > 4 && document.querySelector("#inputPassword4").value.length >= 8 && document.querySelector("#inputLast").value.length >= 5 && document.querySelector("#inputEmail4").value.length != 0 && document.querySelector("#inputCity").value.length != 0 && document.querySelector("#inputAddress").value.length != 0 ){
        document.querySelector(".btn").disabled = false;
        }
        else{
            document.querySelector(".btn").disabled = true;
        }
    }

    
    document.querySelector("#inputLast").onkeyup = function(){
        if(document.querySelector("#inputFirst").value.length > 4 && document.querySelector("#inputPassword4").value.length >= 8 && document.querySelector("#inputLast").value.length >= 5 && document.querySelector("#inputEmail4").value.length != 0 && document.querySelector("#inputCity").value.length != 0 && document.querySelector("#inputAddress").value.length != 0 ){
        document.querySelector(".btn").disabled = false;
        }
        else{
            document.querySelector(".btn").disabled = true;
        }
    }

    
    document.querySelector("#inputEmail4").onkeyup = function(){
        if(document.querySelector("#inputFirst").value.length > 4 && document.querySelector("#inputPassword4").value.length >= 8 && document.querySelector("#inputLast").value.length >= 5 && document.querySelector("#inputEmail4").value.length != 0 && document.querySelector("#inputCity").value.length != 0 && document.querySelector("#inputAddress").value.length != 0 ){
        document.querySelector(".btn").disabled = false;
        }
        else{
            document.querySelector(".btn").disabled = true;
        }
    }

    
    document.querySelector("#inputAddress").onkeyup = function(){
        if(document.querySelector("#inputFirst").value.length > 4 && document.querySelector("#inputPassword4").value.length >= 8 && document.querySelector("#inputLast").value.length >= 5 && document.querySelector("#inputEmail4").value.length != 0 && document.querySelector("#inputCity").value.length != 0 && document.querySelector("#inputAddress").value.length != 0 ){
        document.querySelector(".btn").disabled = false;
        }
        else{
            
            document.querySelector(".btn").disabled = true;
        }
    }

    document.querySelector("form").onsubmit = function(){
        const info = document.querySelector("#inputFirst").value;
            var li = document.createElement("li")
            document.getElementById("tasks").appendChild(li);
            li.innerHTML = info;

            document.querySelector("#inputFirst").value ='';
            document.querySelector(".btn").disabled = true;
            return false;
    }
    }   
)

