/* carte model */
var model1 = document.getElementById('model1');
var model2 = document.getElementById('model2');
var model3 = document.getElementById('model3');
var model4 = document.getElementById('model4');

/* radio model */
var radio1 = document.getElementById('radio-model1');
var radio2 = document.getElementById('radio-model2');
var radio3 = document.getElementById('radio-model3');
var radio4 = document.getElementById('radio-model4');

/* radio model */
var plans1 = document.getElementById('plans1');
var plans2 = document.getElementById('plans2');
var plans3 = document.getElementById('plans3');
var plans4 = document.getElementById('plans4');

/* fuction model */
  model1.addEventListener("click", function(){radio1.checked = true;plans1.style.display = "block";plans2.style.display = "none";
  plans3.style.display = "none";plans4.style.display = "none";});
  model2.addEventListener("click", function(){radio2.checked = true;plans1.style.display = "none";plans2.style.display = "block";
  plans3.style.display = "none";plans4.style.display = "none";});
  model3.addEventListener("click", function(){radio3.checked = true;plans1.style.display = "none";plans2.style.display = "none";
  plans3.style.display = "block";plans4.style.display = "none";});
  model4.addEventListener("click", function(){radio4.checked = true;plans1.style.display = "none";plans2.style.display = "none";
  plans3.style.display = "none";plans4.style.display = "block";});

/* fuction cart 
  model1.addEventListener("click", function(){
    if (radio1.checked == true) {
        plans1.style.display = "block";
    } else {
        plans1.style.display  = "none";
    };
  });
  model2.addEventListener("click", function(){radio2.checked = true;});
  model3.addEventListener("click", function(){radio3.checked = true;});
  model4.addEventListener("click", function(){radio4.checked = true;});*/

