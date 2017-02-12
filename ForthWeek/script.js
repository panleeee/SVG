var data = [];
var input = document.getElementById('input');
var btn = document.getElementById('btn');

input.addEventListener('change',function(e){
  console.log(e.target.keycode);
});

btn.addEventListener('click',function(){
  data.push(input.value);
  input.value = "";
  console.log(data);
});
