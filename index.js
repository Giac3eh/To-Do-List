const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//quando clicco bottone se l'input è vuoto ci sarà l'alert sennò verrà creato un elemento li e verrà aggiunto come giflio a listContainer e poi il valore di inputBox verrà svuotato
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

//ogni volta che cliccherò nel container se cliccherò sull'elemento "LI" aggiungerà la class CSS checked se cliccherò sullo "SPAN" rimuoverà l'elemento parente dello span (ovvero LI)
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//per evitare che ogni volta che si refresha la pagina i dati vengano eliminati dobbiamo immagazzinarli 
//salverò nel localStorage (ovvero il browser) tutti quelli Items facenti parte della listContainer sotto il nome di "data"
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();