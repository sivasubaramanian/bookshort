function show(){
    var a =document.querySelector(".overlay")
    a.style.display="block"


}
var d=document.querySelector(".overlay")
var e=document.getElementById("close1")
e.addEventListener("click",function(){d.style.display="none"})
function delete1(event){
    var d=document.getElementById("Deletebut")
    d.parentElement.remove()
}
var a=document.getElementById("title")
var b=document.getElementById("author")
var c=document.getElementById("des")
var con=document.querySelector(".container")
function sub1(){
  var div=document.createElement("div");
  div.setAttribute("class","containerbox");
  div.innerHTML=`<h2>${a.value}</h2>
  <h5>${b.value}</h5>
  <p>${c.value}</p>
  <button id="Deletebut" onclick="delete1(event)">Delete</button>
`;
  con.append(div);
  d.style.display="none"
  

}

