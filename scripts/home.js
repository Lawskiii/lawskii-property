//Verify
const verifyArray = [];
const unVerifiedArray = [5];
let verifyContainer = document.querySelector('.verifyContainer');

//REMOVE
let destryObj;

function verify(selectedVerify){
  let verifyNumber = document.getElementById(selectedVerify);
  
  if(verifyNumber.classList.contains('verifyButton-fade')){

  }else{
    verifyNumber.classList.add('verifyButton-fade');
    verifyArray.push(selectedVerify);
    console.log(verifyArray);
  }
  
}

function finishVerify(){
  let hasIntersection = checkIntersection(verifyArray, unVerifiedArray);
  let verifyAmount = 9-unVerifiedArray.length;
  
  
  if(verifyArray.length != verifyAmount){
    //WRONG
    falseVerify();
  } 
  else{
    if (hasIntersection){
      //WRONG
      falseVerify();
    }else{
      //RIGHT
      trueVerify();
    }
  }

}

function trueVerify(){
  console.log(verifyContainer)
  verifyContainer.classList.add('slideUp');
  
  // Get the body element
  var body = document.body;

  // Set the CSS styles using the style property
  body.style.width = '100%';
  body.style.height = '100%';
  body.style.backgroundImage = 'linear-gradient(#ffffff 1.1rem, #ccc 1.2rem)';
  body.style.backgroundSize = '100% 1.2rem';
  


  //DESTROY
  destryObj = 'verificationCont';
  setTimeout(destroy, 3000);
}

function falseVerify(){
  verifyContainer.classList.add('shake');
  setTimeout(reload, 300);
}

function checkIntersection(array1, array2) {
  if(array1 != null){
    return array1.some(function (elem) {
      return array2.indexOf(elem) !== -1;
  });
  }
}

function destroy(){

  if(destryObj!=null){
    let objToDestroy = document.getElementById(destryObj);
    objToDestroy.innerHTML = '';
  }
}

function reload(){
  location.reload(true);
}


function generateText(){
  
}