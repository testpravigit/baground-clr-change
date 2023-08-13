
var colr=['black','white'];

var len =colr.length-1;
var selectcontrol=document.getElementById('sele');

var buttoncontrol=document.getElementById('btn');
var h3control=document.getElementById('color');


buttoncontrol.addEventListener('click',()=>{
   var index=generateRandomNum();
   document.body.style.backgroundColor=colr[index];
   if(colr[index]=='white'){
      // colr[index]='good'
      
   h3control.textContent= 'GOOD MORNING' ;

   }
   else{
      h3control.textContent= 'GOOD NIGHT';

   }
 
   // h3control.textContent= 'colour is :'+colr[index];
   
})




function generateRandomNum(){
   return Math.round(Math.random()*len);
}
