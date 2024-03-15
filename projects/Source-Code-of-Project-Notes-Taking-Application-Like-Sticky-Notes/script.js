





// const addBtn = document.querySelector('#addBtn');
// const main = document.querySelector('#main');


// addBtn.addEventListener("click",addNote);

// function addNote(){

//     const note = document.createElement("div");
//     note.classList.add("note");
//     note.innerHTML = `
//         <div class="tool">
//             <i id='btnsave' class="save fas fa-save"></i>
//             <i class="trash fas fa-trash"></i>
//         </div>
//         <textarea id="txt"></textarea>
//     `;

//     const trashIcon = note.querySelector(".trash");
//     const saveIcon = note.querySelector(".save");
//     const textarea = note.querySelector("textarea");

//     trashIcon.addEventListener("click",()=>{
//         note.remove();
//         saveNote();

//     });
// //when user clicks on save icon or type sth in the textarea the saveNote function should be fire
//     saveIcon.addEventListener("click",saveNote);
//     textarea.addEventListener("input",saveNote);

//     main.appendChild(note);


    


//     localStorage.setItem('name','amir')
//     function saveNote(){
//         const txtValue = textarea.value 
//         localStorage.setItem('info',txtValue)
    
//         const userData1 = JSON.parse(localStorage.getItem('info'));
//         console.log(userData1);

//     }
//     // textarea.value = ''+localStorage.getItem('info')
//     addBtn.addEventListener('click',function safe() {
//             textarea.add.classList('.txt2')
//             var txt2 = document.querySelector('.txt2');
//             txt2.value = '';
//             const txtValue1 = txt2.value 
//             localStorage.setItem('information',txtValue1)
//             const userData = JSON.parse(localStorage.getItem('information'));
//             console.log(userData);
//         // textarea.value = ''+localStorage.getItem('info1')
//     })
    
// }







//when page loads the loadNote function should be fire
























































const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');


addBtn.addEventListener("click",addNote);

function addNote(){

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i id='btnsave' class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea id="txt"></textarea>
    `;

    const trashIcon = note.querySelector(".trash");
    const saveIcon = note.querySelector(".save");
    const textarea = note.querySelector("textarea");

    trashIcon.addEventListener("click",()=>{
        note.remove();
        saveNote();

    });
//when user clicks on save icon or type sth in the textarea the saveNote function should be fire
    saveIcon.addEventListener("click",saveNote);
    textarea.addEventListener("input",saveNote);

    main.appendChild(note);
}



let todosArray = []

function saveNote(){
    var test = txt.value

    let newTodoObj = {
        id: todosArray.length + 1,

        complete: false
    }

    todosArray.push(newTodoObj)

    setstorage(todosArray)
    console.clear()
    console.log(todosArray);
}
    function setstorage (event){
        localStorage.setItem('info',JSON.stringify(event))
    }
    function generator (todoList) {
        todoList.forEach(function (todo) {
            console.log(todo)
        });
    }

//when page loads the loadNote function should be fire


function loadNotes(){
// code here
}
loadNotes();










