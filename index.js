const saveChanges=()=>{
    const taskdata={
        id: `${Date.now()}`,//unique number for card id
        imageURL: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: getElementById("taskdescription").value
    };
    console.log(taskdata);
};