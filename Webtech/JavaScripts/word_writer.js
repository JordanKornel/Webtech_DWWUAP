const word = "Ez a minta mert miért ne? ";
let wordChars = Array.from(word);
//document = new JSDOM(html).window.document;
document.querySelector("h1").innerHTML = word;

let btn = document.createElement("button");
btn.innerHTML = "Szöveg irány Fordító gomb";
btn.id="buttonid";


document.body.appendChild(btn);
let ok = true;
setInterval(function () {
  
  if (ok==true) {
    addEventListener
    btn.style.left = "100px";
    wordChars.push(wordChars.shift());
    document.querySelector("h1").style.color = "red";
  }
  if(ok!=true){
    wordChars.unshift(wordChars.pop());
    document.querySelector("h1").style.color = "blue";
    console.log(wordChars);
  }
  
  //html
  document.querySelector("h1").innerHTML = wordChars.join("");
  document.querySelector("h1").style.margin = "10%";
  document.querySelector("h1").style.fontSize = "50px";


  document.querySelector("#buttonid").style.color = "blue";
  
  document.querySelector("body").style.textAlign="center";
  
  const element = document.getElementById("buttonid");
  element.addEventListener("click", reversebutton);
   

}, 100);
function reversebutton() {
    if(ok== true){
      ok=false;
    }else{
      ok=true;
    }
}
