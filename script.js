let addtemplate=document.querySelector('.addnote');
addtemplate.addEventListener("click",function(){
    window.location.href='templatepage.html';
});
let temp =50;
let delet_image=document.getElementsByClassName("delete");
let template_to_delete=delet_image.parentNode;
delet_image.addEventListener("click",function(){
     template_to_delete.parentNode.removeChild(template_to_delete);
})
temp--;
let addtemp=()=>{
          let container =document.querySelector(".container");
          let newelement =document.createElement('div');
          newelement.textContent="How are you";
          container.appendChild(newelement);
}
let save=document.getElementById('save');
save.addEventListener("click",addtemp());
