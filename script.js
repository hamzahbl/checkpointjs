let like=document.getElementsByClassName('like');
for(let i=0;i<like.length;i++){
let heart=like[i];
heart.addEventListener('click', function(){

    let el=heart.firstElementChild;
    if(el.style.color=="black"){
        el.style.color="red";}
        else{
            el.style.color="black";}

        })
        }
        let minus=document.getElementsByClassName('minus-btn');
        console.log(minus)
        for(let i=0;i<minus.length;i++){
            let min=minus[i];
            min.addEventListener('click',function(){
              if( min.nextElementSibling.value==0){
                min.nextElementSibling.value=0
              }else{
                min.nextElementSibling.value--;}
        

            }
    
            
            
            )
        }

        let maxim=document.getElementsByClassName('plus-btn');
        console.log(maxim)
        for(let i=0;i<maxim.length;i++){
            let max=maxim[i];
            max.addEventListener('click',function(){
                if(max.previousElementSibling.value==0){
                max.previousElementSibling.value=0}
                else{
                    max.previousElementSibling.value++;
                }


                }




                
             ) }
             
             let remove=document.getElementsByClassName('delete');
for (let i=0; i<remove.length;i++){
    let rmv=remove[i];
    rmv.addEventListener('click',fnc);
    function fnc(){
        c=document.getElementById('child');
        c.parentNode.removeChild(c);
        }
};/*this is another try but failed
let calcul=document.getElementsByClassName('price') ;
for (let i=0;i<calcul.length;i++){
    let cal=calcul[i];

function myFunction() {
    var price = document.getElementById("p1").value;
    var gst = document.getElementById("p2").value;
    var delivery = document.getElementById("p3").value;
    var q1=document.getElementsById("q1").value;
    var q2=document.getElementsById("q2").value;
    var q3=document.getElementsById("q3").value;
    var total1 = price*gst;
    var total2 = gst*2;
    var total3 = delivery*2;
    var total =total1+total2+total3;
    document.getElementById("finalPrice").innerHTML = total;
     
}}*/

function n1(){
    let pr = document.getElementById("p1");
    let q = document.getElementById("q1");
    pr.innerHTML=1379*q.value;
    }
function n2(){
    let pr = document.getElementById("p2");
    let q = document.getElementById("q2");
    pr.innerHTML=176.80*q.value;
    }
function n3(){
    let pr = document.getElementById("p3");
    let q = document.getElementById("q3");
    pr.innerHTML= 249*q.value;
    }
function totalN(){
    let pt=document.getElementById('finalPrice');
    let p1 = document.getElementById("p1").innerHTML;
    let p2 = document.getElementById ("p2").innerHTML;
    let p3 = document.getElementById("p3").innerHTML;

    pt.value=parseInt(p1)+parseInt(p2)+parseInt(p3);
    }

