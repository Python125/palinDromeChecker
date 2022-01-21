let checkButton = document.getElementById("check");

function palindrome(str){
  'use strict';
  let text = str.replace(/[\W_]/g, '').toLowerCase();
  let reversedText = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse('').join('');

 if(text === reversedText){
   return true;
 }else{
   return false;
 };
}

checkButton.addEventListener("click", function(){
  'use strict';

  let value = document.getElementById("input").value;
  let notification = document.getElementById("notification");

  if(palindrome(value)){
    notification.innerHTML = "Yup, it is a palindrome";
  } else{
    notification.innerHTML = "Nope, it's not a palindrome";
  }

});
