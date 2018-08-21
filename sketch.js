function buttonClicked(){
    var textarea = document.getElementById("textArea1");
    var targ = event.target || event.srcElement;

    var brickBegin = "<" + targ.textContent + ">";
    var brickEnd = "</" + targ.textContent + ">";

    var newText = textarea.value.substring (0, textarea.selectionStart) + 
        brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd +
        textarea.value.substring (textarea.selectionEnd);
    textarea.value = newText;
    preview();
}

function buttonClickedDiv(){
  var textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  var brickBegin = "<div class = " + targ.textContent + ">";
  var brickEnd = "</div>";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd +
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
  preview();
}

function buttonClickedImg(){
  var textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  var brickBegin = "<img src= \"";
  var brickEnd =  "\" />";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd +
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
  preview();
}

function buttonClickedLink(){
  var textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  var brickBegin = "<a href= \"";
  var brickEnd =  "\"> </a>";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + brickEnd +
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
  preview();
}

function buttonClickedSingle(){
  var textarea = document.getElementById("textArea1");
  var targ = event.target || event.srcElement;

  brickBegin = "<" + targ.textContent + ">";

  var newText = textarea.value.substring (0, textarea.selectionStart) + 
      brickBegin + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) +
      textarea.value.substring (textarea.selectionEnd);
  textarea.value = newText;
  preview();
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
    var textarea1 = document.getElementById("textArea1").value;

    var iframe = document.getElementById("textArea2");
    iframe = iframe.contentWindow || ( iframe.contentDocument.document || iframe.contentDocument);

    iframe.document.open();
    iframe.document.write(textarea1);
    iframe.document.close();
}

function myConfirmation() {
    return "Make sure that you copied content to clipboard, all content will be lost after exit";
}

window.onbeforeunload = myConfirmation;