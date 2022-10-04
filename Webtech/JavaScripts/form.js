function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    var data=document.getElementById("forminfo");
    var color=document.getElementById("color");
    var date=document.getElementById("date");
    var radio1=document.getElementById("radio");
    var radio2=document.getElementById("radio2");
    li.appendChild(document.createTextNode(inputValue+" "+date.value.toString()));
    var checkbox=document.getElementById("checkboxid");
    if(!checkbox.checked){
        alert("Nem fogadtad el!");
        return;
    }
        if (inputValue === '') {
        alert("Írj!");
      } else {
        data.appendChild(li).style.color=color.value;
      }

    document.getElementById("myInput").value = "";
    if(radio1.checked){
      li.style.display = "none";
    }
}