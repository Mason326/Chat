
function submitting() {
    let content = document.getElementById("capch")
    let txt = content.value
    let date = new Date()
    
    let newElem = document.createElement("div")
    newElem.classList.add("message", "style-message1")
    
    if (txt.length == 0) {
        newElem.innerHTML = "(empty message)" + "<br>" + "<br>" + date.toDateString()
    }
    else{
        newElem.innerHTML = txt + "<br>" + "<br>" + date.toDateString() 
    }

    let parentElem = document.getElementById("mainTextPart")
    parentElem.appendChild(newElem)
    content.value = ""
}

function submitting2() {
    let content = document.getElementById("capch2")
    let txt = content.value

    let date = new Date()
    let newElem = document.createElement("div")
    newElem.classList.add("message","style-message2")
    if (txt.length == 0) {
        newElem.innerHTML = "(empty message)" + "<br>" + "<br>" + date.toDateString()
    }
    else{
        newElem.innerHTML = txt + "<br>" + "<br>" + date.toDateString() 
    }
    
    
    let parentElem = document.getElementById("mainTextPart")
    parentElem.appendChild(newElem)
    content.value = ""
}

function deleteAll() {
    let parentElem = document.getElementById("mainTextPart")
    parentElem.innerHTML = ""
}

function deleteLast() {
    let parentElem = document.getElementById("mainTextPart")
    parentElem.removeChild(parentElem.lastElementChild)
}

function deleteFirst() {
    let parentElem = document.getElementById("mainTextPart")
    parentElem.removeChild(parentElem.firstElementChild)
}