
document.addEventListener('selectstart', function(event) {
    event.preventDefault(); // Disable text selection
});

// Erase this👇👇👇👇
/*
let todos = []
document.querySelector('button').addEventListener('click',()=>{
    let todo = document.getElementById('Todo').value.trim()
    if(!todo){
        document.querySelector('.alert').innerHTML = `Please Enter Your Task`
        return setTimeout(()=>{
            document.querySelector('.alert').innerHTML = ``
        },1000)
    }
    todos.push(todo)  
    let ptodo = document.createElement('p')
    let ptodoWraper = document.createElement('div')
    ptodoWraper.className = 'todo'
    ptodo.textContent = todo
    let append = document.querySelector('.lists').appendChild(ptodoWraper)
    append.appendChild(ptodo)
    document.getElementById('Todo').value =""
    ptodoWraper.addEventListener('click',()=>{
        ptodo.style.textDecoration='line-through';
        ptodo.style.textDecorationColor='red'
        remove(todo)
    })
    ptodoWraper.addEventListener('dblclick',()=>{
        remove()
    })
    localStorage.setItem('Todos',JSON.stringify(todos))
})

function remove(todo){
    let indOftodo = todos.indexOf(todo)
    todos.splice(indOftodo,1)
}

*/
// Erase This 👆👆👆👆


let btn = document.querySelector('button')
let input = document.querySelector('input[type="text"]')
let todolists = document.querySelector('.lists')
let alt = document.querySelector('.alert')

let todos = []

btn.addEventListener('click',()=>{
    if(!input.value.trim()){
        alt.innerHTML = `Please Enter Your Task`
        return setTimeout(()=> alt.innerHTML = ``,1000)
    };
    todos.push(input.value.trim());
    addTolist(input.value.trim());
})

window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach((x)=>{
        addTolist(x)
    })
}

function addTolist(todo){
    let pera = document.createElement('p')
    pera.className='todo'
    pera.innerHTML = todo
    todolists.appendChild(pera)
    input.value =``
    localStorage.setItem('todos',JSON.stringify(todos))
    pera.addEventListener('click',()=>{
        pera.style.textDecoration="line-through"
        pera.style.textDecorationColor="red"
        remove(todo)
    })
    pera.addEventListener('dblclick',()=>{
        todolists.removeChild(pera)
        remove(todo)
    })
}

function remove(todo){
    let ind = todos.indexOf(todo)
    if(!(ind<0))
        todos.splice(ind,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}

