
const list = document.getElementById("list");
const itemInput = document.getElementById("item");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

let removedCount = 0;

//adding event listener to buttons with their functions
add.addEventListener("click", addItem);
remove.addEventListener("click", removeItem);




//add function
function addItem() {
    const text = itemInput.value;
    const words = text.split(" ");

    for (const word of words) {
    const li = document.createElement("li");
    li.textContent = word;
    list.appendChild(li);
}

itemInput.value = "";
}

//remove function
function removeItem() {
    const removeText = itemInput.value;
    const liToRemove = Array.from(list.children).find(li => {
    return li.textContent.toLowerCase() === removeText.toLowerCase();

    
});
if (liToRemove) {
    liToRemove.classList.add("removed");
    list.removeChild(liToRemove);
    removedCount++;
    const removedCountS = document.createElement("span");
    removedCountS.textContent = `(${removedCount} items removed)`;
    removedCountS.classList.add("removed-count");

    
    document.body.appendChild(removedCountS);
   
}
itemInput.value = '';
}


