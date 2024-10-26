const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnImg = document.querySelector('.toggle_btn img')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.contains('open')
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
});
});
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.maxHeight){
content.style.maxHeight = null;
} else {
content.style.maxHeight = content.scrollHeight + "px";
}
});
}



  