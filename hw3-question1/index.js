
var button1 = document.getElementById('button1');
var dynamic = document.getElementById('dynamic');
var button2 = document.getElementById('button2');


button1.addEventListener('click', addText);
button2.addEventListener('click', addText2);



    function addText(){
      dynamic.innerHTML = 'I am right, Sir!';
}

  function addText2() {
      dynamic.innerHTML = 'No Sir, I am!';

  }