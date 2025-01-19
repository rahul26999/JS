var popupoverlay=document.querySelector(".pop-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})
// select close button
var closeebook=document.getElementById("close-book")
    function closeup(event)
    {
        event.preventDefault()    //used to stop the default operation occuring.
        popupbox.style.display="none"
        popupoverlay.style.display="none"
    }

//select container, add-book, book-title-input, book-Author-input, book-description-input.

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-Author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")   // to select all the div elements
    div.setAttribute("class","book-container")   //to select div class: book-container element
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h3>${bookauthorinput.value}</h3>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
