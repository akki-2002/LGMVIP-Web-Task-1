const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputBox.value==""){
        alert("PLEASE WRITE SOME TASK!!!");
    }else{
        let li = document.createElement("li"); // li ko create karegi
        li.innerHTML = inputBox.value; // li mei inputBox ki value ko dal degi
        listContainer.appendChild(li); // append kar degi matlab add kar degi listContainer wali id mei/ div mei

        // To add delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the code to display the icon of cross
        li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}

// To delete and check task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){ // when i click on li
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ // when i click on delete/span
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


































// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function add(){
//     if(inputs.value==""){
//         alert("Write Something Please!");
//     }else{
//         let newElement = document.createElement("ul");
//         newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
//         // To print all the task in console
//         // console.log(`${inputs.value}`)

//         // to print all the task in screen we have to append it to div in html
//         text.appendChild(newElement);

//         // To empty the search box
//         inputs.value = "";

//         // To delete the task
//         newElement.querySelector("i").addEventListener("click", remove);
//         function remove(){
//             newElement.remove();
//         }

//     }
// }