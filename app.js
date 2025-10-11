alert("Welcome to Taha's Todo List");
var addtext = document.getElementById("addtext");
var btn = document.getElementById("btn");
var addin  = document.querySelector(".addin");
btn.addEventListener("click",()=>{
    let newp = document.createElement("p");
    addin.appendChild(newp);
    let newspan = document.createElement("span");
    newp.appendChild(newspan);
    let editbtn = document.createElement("button");
    newp.appendChild(editbtn);
    editbtn.setAttribute("class", "E-D-btn");
    editbtn.textContent = "Edit";
    let delbtn = document.createElement("button");
    newp.appendChild(delbtn);
    delbtn.setAttribute("class", "E-D-btn");
    delbtn.textContent = "Delete";
    newspan.textContent = addtext.value;
    newp.style.display = "flex";
    newp.style.justifyContent = "space-between";
    newp.style.alignItems = "center";
    newp.style.padding = "1em";
    if (addtext.value === "") {
        newp.remove();
        alert("Please Enter some text")
    }
    addtext.value = "";
    delbtn.addEventListener("click",()=>{
        newp.remove();
    })
    editbtn.addEventListener("click",()=>{
        let editprompt = prompt("Edit your task",newspan.textContent);
        if (editprompt ===  "") {
            newp.remove();
        }
        newspan.textContent = editprompt;
    })
})






