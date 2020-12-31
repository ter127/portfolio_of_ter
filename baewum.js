window.onload = function(){
    // 2모듈 개인주제 이벤트
    document.querySelector('#gainsircle1').addEventListener('click',function(){
       document.querySelector('#secondgain').classList.add('gainsld')
       document.querySelector('#secondline').classList.add('la')
       document.querySelector('#projecttxt1').classList.add('nata')
    })
    document.querySelector('#gainsircle1').addEventListener('mouseover',function(){
        document.querySelector('#gainsircle1').style.background = '#443655'
     })
     document.querySelector('#gainsircle1').addEventListener('mouseout',function(){
        document.querySelector('#gainsircle1').style.background = '#e4d2fc'
     })
    // 3모듈 개인주제 이벤트
    document.querySelector('#gainsircle2').addEventListener('click',function(){
        document.querySelector('#thirdgain').classList.add('gainsld')
        document.querySelector('#thirdline').classList.add('la')
        document.querySelector('#projecttxt2').classList.add('nata')
    })
    document.querySelector('#gainsircle2').addEventListener('mouseover',function(){
        document.querySelector('#gainsircle2').style.background = '#443655'
     })
     document.querySelector('#gainsircle2').addEventListener('mouseout',function(){
        document.querySelector('#gainsircle2').style.background = '#e4d2fc'
     })
    //  3모듈 수업 이벤트
    document.querySelector('#classsirclefirst').addEventListener('click',function(){
        document.querySelector('#firstclass').classList.add('gainsld')
        document.querySelector('#fourthline').classList.add('la')
        document.querySelector('#classtxt1').classList.add('nata')
    })
    document.querySelector('#classsirclefirst').addEventListener('mouseover',function(){
        document.querySelector('#classsirclefirst').style.background = '#e4d2fc'
     })
     document.querySelector('#classsirclefirst').addEventListener('mouseout',function(){
        document.querySelector('#classsirclefirst').style.background = '#443655'
     })
    // 4모듈 수업 이벤트
    document.querySelector('#classsirclesecond').addEventListener('click',function(){
        document.querySelector('#secondclass').classList.add('webscroll')
        document.querySelector('#fivthline').classList.add('la')
        document.querySelector('#classtxt2').classList.add('nata')
    })
    document.querySelector('#classsirclesecond').addEventListener('mouseover',function(){
        document.querySelector('#classsirclesecond').style.background = '#e4d2fc'
     })
     document.querySelector('#classsirclesecond').addEventListener('mouseout',function(){
        document.querySelector('#classsirclesecond').style.background = '#443655'
     })
     var a = 0
   //   클릭
   document.querySelector('#gtnl1').addEventListener('click',function(){
      if (a < 0)
      a = a + 600
      document.querySelector('#secondgain').style.transform = 'translate('+a+'px)'
   })
   document.querySelector('#gtnr1').addEventListener('click',function(){
      if (a > -6600)
      a = a - 600
      document.querySelector('#secondgain').style.transform = 'translate('+a+'px)'
   })
   document.querySelector('#gtnl2').addEventListener('click',function(){
      if (a < 0)
      a = a + 600
      document.querySelector('#thirdgain').style.transform = 'translate('+a+'px)'
   })
   document.querySelector('#gtnr2').addEventListener('click',function(){
      if (a > -6600)
      a = a - 600
      document.querySelector('#thirdgain').style.transform = 'translate('+a+'px)'
   })
   document.querySelector('#ctnl1').addEventListener('click',function(){
      if (a < 0)
      a = a + 600
      document.querySelector('#firstclass').style.transform = 'translate('+a+'px)'
   })
   document.querySelector('#ctnr1').addEventListener('click',function(){
      if (a > -6600)
      a = a - 600
      document.querySelector('#firstclass').style.transform = 'translate('+a+'px)'
   })
}
