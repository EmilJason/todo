let db=firebase.firestore();

    
let loadData =()=>{
    let lists=document.getElementById("lists");
    db.collection('todo')
    .get()
    .then((snap)=>{
        snap.forEach((item)=>{
            let listItem = document.createElement("p");
            let cardDiv = document.createElement("div");
            let doneBtn = document.createElement("button");
            doneBtn.classList="btn btn-danger";
            doneBtn.innerText="DONE";
            cardDiv.classList="card p-3 m-1 d-flex";
            listItem.innerText=item.data().description;
            cardDiv.appendChild(listItem);
            doneBtn.addEventListener('click', ()=>{done(listItem.innerText)})
            cardDiv.appendChild(doneBtn);
            lists.appendChild(cardDiv);
        })
    })
    let done=(e)=>{
    alert(e);
    }
    
}
loadData();

let saveTodo=()=>{
    let inputTodo = document.getElementById('inputTodo');
    db.collection('todo')
        .add({description:inputTodo.value});
    loadData();
}
