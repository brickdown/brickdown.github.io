function buttonClicked(){
    var textarea = document.getElementById("textArea1");
    var targ = event.target || event.srcElement;

    var brickBegin = "<" + targ.textContent + ">";
    var brickEnd = "</" + targ.textContent + ">";

    var newText = textarea.value.substring (0, textarea.selectionStart) + 
        brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd +
        textarea.value.substring (textarea.selectionEnd);
    textarea.value = newText;
}

function buttonClickedDiv(){
  textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  brickBegin = "<div class = " + targ.textContent + ">";
  brickEnd = "</div>";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd +
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
}

function buttonClickedImg(){
  textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  brickBegin = "<img src= \"";
  brickEnd =  "\" />";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
}

function buttonClickedLink(){
  textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  brickBegin = "<a href= \"";
  brickEnd =  "\"> </a>";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
}

function buttonClickedSingle(){
  textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  brickBegin = "<" + targ.textContent + ">";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) +
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
}

function copyToClipboard(){
  var copy = function (e) {
    e.preventDefault();
    console.log('copy');
    var text = document.getElementById("textArea1").value;
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

function preview(){
   textarea1 = document.getElementById("textArea1").value;
   // viewHtml = document.getElementByI("textArea2");
    //document.
   // viewHtml.open();
  // viewHtml.write(textarea1);
    //viewHtml.close();
    //viewHtml.innerHTML = textarea1.value;
    //var ifrm = document.getElementById("textArea2");
    //ifrm.innerHTML = textarea1;

    var iframe = document.getElementById("textArea2");
iframe = iframe.contentWindow || ( iframe.contentDocument.document || iframe.contentDocument);

iframe.document.open();
iframe.document.write(textarea1);
iframe.document.close();
}
