
let input = document.querySelector(".input")
let addBtn = document.querySelector(".addBtn")
let kitchenitemslist = document.querySelector(".kitchen-items-list")



function addkitchenitems(){
    let inputData =input.value;

    let li = document.createElement("li");
    let spanElement = document.createElement("span")
    li.appendChild(spanElement)
    // console.log(li);

    spanElement.innerHTML = inputData;
    kitchenitemslist.appendChild(li);
    input.value ="";
    input.focus();
    console.log(li);




    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fa","fa-trash");
    li.appendChild(trashBtn);



    let editBtn = document.createElement("i");
    editBtn.classList.add("fa","fa-edit");
    li.appendChild(editBtn);
    

}
   // delete items from kitchenlist
    function deletekitchenitems(event){
        // obj vlaue edkkunnad
        // console.log(event.target);
        if(event.target.classList[1]=== "fa-trash"){
        //    create parentElement
            let item = event.target.parentElement;
            item.remove();
        }

    }

    // edit item 
    function editkitchenitems(event){
        if(event.target.classList[1]==="fa-edit"){
            let editValue = prompt("please new txt");
            // console.log(editValue);
            let item = event.target.parentElement;
            let spanElement = item.querySelector("span");
            console.log(spanElement);
            spanElement.innerHTML = editValue;



        }
    }

   



addBtn.addEventListener("click",addkitchenitems);
kitchenitemslist.addEventListener("click",deletekitchenitems);
kitchenitemslist.addEventListener("click",editkitchenitems);