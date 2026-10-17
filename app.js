const myText = document.querySelector("input");
const myButton = document.querySelector("button");
const ol = document.querySelector("ol")

myButton.addEventListener("click", function(){
    // console.log(myText.value);
    if(myText.value == ""){
        alert("Write your To Do");
        return;
    }else {
        let li = document.createElement("li");
        li.innerHTML = myText.value;
        let delBtn = document.createElement("button")
            delBtn.innerHTML = "Delete";
            delBtn.style.background = "red";
            delBtn.style.color= "white";
            delBtn.style.border = "none";
            delBtn.style.padding = ".5rem"
            delBtn.style.borderRadius = ".25rem"
        ol.append(li, delBtn)
        // clear input value
            myText.value = "";

        delBtn.addEventListener("click", function(){
            li.remove()
            delBtn.remove()
        })
    }
})

