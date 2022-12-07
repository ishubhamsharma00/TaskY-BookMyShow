
//parent element to store cards
const taskcontainer=document.querySelector(".task_container");

//Global Store (its an array)
let globalStore=[];

const newCard=({id,imageURL,taskTitle,taskType,taskDescription})=>`<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
    <div class="card-header d-flex justify-content-end gap-2 ">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
        <button type="button" id=${id} class="btn btn-outline-danger" onclick="deleteCard.apply(this,arguments)"><i class="fa-sharp fa-solid fa-trash" id=${id} onclick="deleteCard.apply(this,arguments)"></i></button>
    </div>
    <img src="${imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${taskTitle}</h5>
      <p class="card-text">${taskDescription}</p>
      <span class="badge bg-primary">${taskType}</span>
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end" >Open Task</button>
    </div>
  </div>
</div>`;

const loadInitialTaskCard=()=>{
    //access localstorage
    const getInitialData=localStorage.getItem("tasky");
    if(!getInitialData) return;

    //convert stringified object to object
    const {cards}= JSON.parse(getInitialData);

    //map around array to generate HTML card and inject it to DOM
    cards.map((cardObject)=>{
        const createNewCard=newCard(cardObject);
        taskcontainer.insertAdjacentHTML("beforeend", createNewCard);
        globalStore.push(cardObject);
    });
};

const updateLocalStorage=()=>{localStorage.setItem("tasky", JSON.stringify({cards: globalStore}));};

const saveChanges=()=>{
    const taskdata={
        id: `${Date.now()}`,//unique number for card id
        imageURL: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };

    //HTML code
    const createNewCard=newCard(taskdata);
    taskcontainer.insertAdjacentHTML("beforeend",createNewCard);

    globalStore.push(taskdata);

    //add to localstorage
    updateLocalStorage();
};

const deleteCard=(event)=>{
    //id of card
    event = window.event;
    const targetID= event.target.id;
    const tagname= event.target.tagName;
    //search globalstore, remove the object which matches with the id
    const newUpdatedArray= globalStore.filter((cardObject)=>cardObject.id!==targetID);
    globalStore= newUpdatedArray;
    updateLocalStorage();

    if(tagname==="BUTTON"){
        return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode);
    }
    return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
    //loop over the new globalStorage, and inject updated cards to DOM

};