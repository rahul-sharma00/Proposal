const btn1=document.getElementById("batan");
const btn2=document.getElementById('bt');


btn1.addEventListener('mouseover',()=>{
    window.alert("You broke my heart💔");
});

function fun(){
    document.getElementById("gif").src="gif2.gif";
    btn2.style.display='none';
    btn1.style.display='none';
    var msg=document.getElementById("consent")
    msg.innerHTML='Thank you!!';
    msg.style.color='red';
    msg.style.fontSize='28px';
    var msg2=document.getElementById("msg")
    msg2.innerHTML="I love you";
    msg2.style.color='black';
    msg2.style.fontSize='28px';
}

