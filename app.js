var addtext = document.getElementById("addtext");
var btn = document.getElementById("btn");
var addin  = document.querySelector(".addin");
btn.addEventListener("click", (e)=>{
    var newdiv = document.createElement("div");
    addin.appendChild(newdiv);
    newdiv.setAttribute("class","newdiv");
    var newp1 = document.createElement("p");
    newdiv.appendChild(newp1);
    newp1.setAttribute("class","newp");
    newp1.textContent = addtext.value;
    var newp2 = document.createElement("p");
    newdiv.appendChild(newp2);
    newp2.setAttribute("class","newp2");
    var donebtn = document.createElement("button");
    newp2.appendChild(donebtn);
    donebtn.setAttribute("class","edd-btns");
    donebtn.textContent = "Done";
    var editbtn = document.createElement("button");
    newp2.appendChild(editbtn);
    editbtn.setAttribute("class","edd-btns");
    editbtn.textContent = "Edit";
    var delbtn = document.createElement("button");
    newp2.appendChild(delbtn);
    delbtn.setAttribute("class","edd-btns");
    delbtn.textContent = "Delete";
    if (addtext.value === "") {
        newdiv.remove();
        alert("Please Enter Text")
    }
    addtext.value = "";
    donebtn.addEventListener("click", ()=>{
        newp1.style.textDecoration = "line-through";
        newp1.style.color = " #888";
        newp2.remove();
    })
    editbtn.addEventListener("click", ()=>{
        var a = prompt("Edit your task",newp1.textContent);
        if (a === "") {
            newdiv.remove();
        }
        newp1.textContent = a;
    })   
    delbtn.addEventListener("click", ()=>{
       newdiv.remove();
    })
    e.preventDefault();
})






