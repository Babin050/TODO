
let kitchenitemslist = document.querySelector("kitchen-items-list");
let currypowder = ["salt","papper","chilli","turmeric"];

for (let powder of currypowder){
    let li = document.createElement("li");
    li.innerText = powder;
    kitchenitemslist.appendChild(li);
    console.log(li);
}