function buttonNormal(){
    iframe.contentDocument.execCommand("removeFormat", false, null);
}

function buttonBold(){
   iframe.contentDocument.execCommand("bold", false, null);
}

function buttonItalic(){
    iframe.contentDocument.execCommand("italic", false, null);
 }

 function buttonStrike(){
    iframe.contentDocument.execCommand("strikeThrough", false, null);
 }

function buttonJustify(){
    iframe.contentDocument.execCommand("removeFormat", false, null); 
    iframe.contentDocument.execCommand("insertHTML", false, "<div class = text-justify>" + iframe.contentDocument.getSelection() + "</div>");
 }

function buttonCenter(){
   // if(document.getElementById("center").value=="OFF"){
       // if(iframe.contentDocument.getSelection() != ""){
        if(iframe.contentDocument.getSelection() != ""){
            iframe.contentDocument.execCommand("insertHTML", false,  "<center>" + iframe.contentDocument.getSelection() + "</center>"); 
        }
//iframe.contentDocument.execCommand("justifyCenter", false, "center"); 
//iframe.contentDocument.execCommand("formatBlock", false, "p");
         //   }
      //  document.getElementById("center").value="ON";
   // }
     
     //  else if(document.getElementById("center").value=="ON"){
     //   iframe.contentDocument.execCommand("removeFormat", false, null); 
       // document.getElementById("center").value="OFF";
   // }
 }
 
 function buttonLeft(){
    if(iframe.contentDocument.getSelection() != ""){
    iframe.contentDocument.execCommand("justifyLeft", false, "<div class = pull-left>" + iframe.contentDocument.getSelection() + "</div>");
    }
 }

 function buttonRight(){
    if(iframe.contentDocument.getSelection() != ""){
        iframe.contentDocument.execCommand("insertHTML", false, "<div class = pull-right>" + iframe.contentDocument.getSelection() + "</div>");
    }
 }

 function buttonSub(){
    iframe.contentDocument.execCommand("subscript", false, null);
 }

 function buttonSup(){
    iframe.contentDocument.execCommand("superscript", false, null);
 }

 function buttonH1(){
        iframe.contentDocument.execCommand("formatBlock", false, "h1");
 }

 function buttonH2(){
    iframe.contentDocument.execCommand("formatBlock", false, "h2");
 }

 function buttonH3(){
    iframe.contentDocument.execCommand("formatBlock", false, "h3");
 }

 function buttonP(){
    iframe.contentDocument.execCommand("formatBlock", false, "p");
 }


 function buttonHr(){
    iframe.contentDocument.execCommand("insertHorizontalRule", false, null);
 }

 function buttonBlockQuote(){
    iframe.contentDocument.execCommand("formatBlock", false, "blockquote");
 }

 function buttonCode(){
    iframe.contentDocument.execCommand("insertHTML", false, "<code>" + iframe.contentDocument.getSelection() + "</code>");
 }

 function buttonUl2(){
    iframe.contentDocument.execCommand("formatBlock", false, "ul");
 }


 function buttonUl(){
    iframe.contentDocument.execCommand("insertOrderedList", false, null);
 }

 function buttonOl(){
    iframe.contentDocument.execCommand("insertUnorderedList", false, null);
 }

 function buttonLink(){
    var lnk =prompt("Write the URL here","http:\/\/");
    if(lnk&&lnk!=''&&lnk!="http://"){
     iframe.contentDocument.execCommand("createLink", false, lnk);
}
 }

 function buttonImage(){
    var lnk =prompt("Write the image URL here or just push it into edit window","http:\/\/");
    if(lnk!=''&&lnk!="http://"){
    iframe.contentDocument.execCommand("insertImage", false, "https://steemitimages.com/0x0/" + lnk);
 }
 }

 function buttonTable(){
    var rows =prompt("ROWS","1");
    var columns =prompt("COLUMNS","1");
    var r = "";
    var c = "";
    var result = "";
    for(i = 1; i <= rows; i++){
        for(j = 1; j <= columns; j++){
            c += "<td>&nbsp;&nbsp;&nbsp;</td>";
        }
        r += "<tr>" + c + "</tr>";
        c = "";
        result += r;
        r = "";
        j = 1;
    }
    iframe.contentDocument.execCommand("insertHTML", false, "<table border=\"1\">" + result + "</table>");
 }



function copyToClipboard(){
  var copy = function (e) {
    e.preventDefault();
    console.log('copy');
    var text = document.getElementById("textArea2").contentDocument.body.innerHTML;
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', text);
    } else if (window.clipboardData) {
        window.clipboardData.setData('Text', text);
    }
}
    window.addEventListener('copy', copy);
    document.execCommand('copy');
    window.removeEventListener('copy', copy);
    alert("Content copied to clipboard!");
}

function myConfirmation() {
    return "Make sure that you copied content to clipboard, all content will be lost after exit";
}

window.onbeforeunload = myConfirmation;

//__________________________________________
function editableIFrame()
{
iframe = 
document.getElementById("textArea2");
iframe.contentDocument.designMode = "on";
var cssLink = document.createElement("link");
cssLink.href = "style.css";  
cssLink.rel = "stylesheet";  
cssLink.type = "text/css";  
frames["iframe"].contentDocument.body.appendChild(cssLink); 
}
window.addEventListener("loader", onload, false);

//________________________
