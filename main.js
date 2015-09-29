
//DECLARING VARIABLES
var addition, subtraction, division,times;
var val , math_answer;

//GRABBING THE VALUES PASSED FROM HTML
var num1 = document.querySelector('#num_one');
var num2 = document.querySelector('#num_two');
//GRABBING BLANK ANSWER FIELD IN HTML TO SET VALUE TO.
var ret_ans = document.querySelector('#answer');

//GRABBING THE CLICK ACTION OF THE BUTTON
var action1 = document.querySelector('#calculateBtn');


//FUNCTIONS CREATED FOR MATH OPERATIONS
addition = function(){
  //GETTING THE VALUE FROM THE STRING NUMBER(NUM.VALUE)
  val = Number(num1.value) + Number(num2.value);
  
  // update answer to test content to = value
  ret_ans.textContent = val;
};


//WHEN THE CALCULATE BUTTON IS CLICKED
action1.addEventListener('click',addition);




















// subtraction = function(num1, num2){
//   val = Number(num1) - Number(num2);
//    return val;
// };


// division = function(num1, num2){
//   val = Number(num1) / Number(num2);
//    return val;

// };

// times= function(num1, num2){
//    val = Number(num1) * Number(num2);
//    return val; 
// };