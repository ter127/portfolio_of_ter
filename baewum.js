window.onload = function(){
    // 2모듈 개인주제 이벤트
    document.querySelector('#gainsircle1').addEventListener('click',function(){
       document.querySelector('#secondgain').classList.add('gainsld')
       document.querySelector('#secondline').classList.add('la')
       document.querySelector('#projecttxt').classList.add('nata')
    })
    document.querySelector('#gainsircle1').addEventListener('mouseover',function(){
        document.querySelector('#gainsircle1').style.background = '#443655'
     })
     document.querySelector('#gainsircle1').addEventListener('mouseout',function(){
        document.querySelector('#gainsircle1').style.background = '#e4d2fc'
     })
    // 3모듈 개인주제 이벤트
    document.querySelector('#gainsircle2').addEventListener('click',function(){
        document.querySelector('#thirdline').classList.add('la')
    })
    document.querySelector('#gainsircle2').addEventListener('mouseover',function(){
        document.querySelector('#gainsircle2').style.background = '#443655'
     })
     document.querySelector('#gainsircle2').addEventListener('mouseout',function(){
        document.querySelector('#gainsircle2').style.background = '#e4d2fc'
     })
}
