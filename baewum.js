window.onload = function(){
 var btn1 = document.querySelector("#m1")
 var btn2 = document.querySelector("#m2")
 var btn3 = document.querySelector("#m3")
 var btn4 = document.querySelector("#m4")
 var box = document.querySelector('.containBox')
 btn1.addEventListener('click',function(){
   box.style.transform = 'translate(0)'
   btn1.style.backgroundColor = '#443655'
   btn1.style.color = '#d8d8d8'
   btn1.setAttribute('class','mbtn hani')
   btn2.style.backgroundColor = ' #d8d8d8'
   btn2.style.color = 'black'
   btn2.setAttribute('class','mbtn')
   btn3.style.backgroundColor = ' #d8d8d8'
   btn3.style.color = 'black'
   btn3.setAttribute('class','mbtn')
   btn4.style.backgroundColor = ' #d8d8d8'
   btn4.style.color = 'black'
   btn4.setAttribute('class','mbtn')
  });
 btn2.addEventListener('click',function(){
    box.style.transform = 'translate(-1300px)'
    btn2.style.backgroundColor = '#443655'
    btn2.style.color = '#d8d8d8'
    btn2.setAttribute('class','mbtn hani')
    btn1.style.backgroundColor = ' #d8d8d8'
    btn1.style.color = 'black'
    btn1.setAttribute('class','mbtn')
    btn3.style.backgroundColor = ' #d8d8d8'
    btn3.style.color = 'black'
    btn3.setAttribute('class','mbtn')
    btn4.style.backgroundColor = ' #d8d8d8'
    btn4.style.color = 'black'
    btn4.setAttribute('class','mbtn')
  });
  btn3.addEventListener('click',function(){
    box.style.transform = 'translate(-2600px)'
    btn3.style.backgroundColor = '#443655'
    btn3.style.color = '#d8d8d8'
    btn3.setAttribute('class','mbtn hani')
    btn2.style.backgroundColor = ' #d8d8d8'
    btn2.style.color = 'black'
    btn2.setAttribute('class','mbtn')
    btn1.style.backgroundColor = ' #d8d8d8'
    btn1.style.color = 'black'
    btn1.setAttribute('class','mbtn')
    btn4.style.backgroundColor = ' #d8d8d8'
    btn4.style.color = 'black'
    btn4.setAttribute('class','mbtn')
  });
  btn4.addEventListener('click',function(){
    box.style.transform = 'translate(-3900px)'
    btn4.style.backgroundColor = '#443655'
    btn4.style.color = '#d8d8d8'
    btn4.setAttribute('class','mbtn hani')
    btn2.style.backgroundColor = ' #d8d8d8'
    btn2.style.color = 'black'
    btn2.setAttribute('class','mbtn')
    btn3.style.backgroundColor = ' #d8d8d8'
    btn3.style.color = 'black'
    btn3.setAttribute('class','mbtn')
    btn1.style.backgroundColor = ' #d8d8d8'
    btn1.style.color = 'black'
    btn1.setAttribute('class','mbtn')
  });
}
