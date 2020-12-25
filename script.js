window.onload = function(){
    window.addEventListener('scroll', function () {
        var nowScroll = document.documentElement.scrollTop;
        if(nowScroll>600) {
            document.querySelector('#head').classList.add('bar-ani')
            document.querySelector('#Ideer').setAttribute('class','Ideer')
        }
        if(nowScroll>650) {
            document.querySelector('#baum1').classList.add('right')
        }
        if(nowScroll>1400) {
            document.querySelector('#baum2').classList.add('left')
        }
        if(nowScroll>2740) {
            document.querySelector('#project1').classList.add('right')
        }
        if(nowScroll>3580) {
            document.querySelector('#project2').classList.add('left')
        }
        if(nowScroll>4900) {
            document.querySelector('#hyeop1').classList.add('right')
        }
    })
    var txt1= document.querySelector('#protxt1')
    var txt2= document.querySelector('#protxt2')
    var txt3= document.querySelector('#baumtxt1')
    var txt4= document.querySelector('#baumtxt2')
    var txt5= document.querySelector('#hyeoptxt')
    var ideer= document.querySelector('.Ideer')
    function outevent(id,color) {
        id.style.color = color
}

  function overevent(id) {
    id.style.color = 'grey'
}
   txt3.addEventListener('mouseover',function(){
    overevent(txt3)
});
    txt3.addEventListener('mouseout',function(){
    outevent(txt3,'black')
});  
    txt3.addEventListener('click',function(){
    ideer.innerHTML = '웹디자인을 배운'
    window.scrollTo(0,0)
    document.querySelector('#Ideer').classList.add('nata')
    });
    txt4.addEventListener('mouseover',function(){
    overevent(txt4)
});
    txt4.addEventListener('mouseout',function(){
    outevent(txt4,'black')
});  
    txt4.addEventListener('click',function(){
    ideer.innerHTML = '디자인과 그림에 관심이 있는'
    window.scrollTo(0,0)
    document.querySelector('#Ideer').classList.add('nata')
});
    txt1.addEventListener('mouseover',function(){
    overevent(txt1)
});
    txt1.addEventListener('mouseout',function(){
    outevent(txt1,'white')
});  
    txt1.addEventListener('click',function(){
      ideer.innerHTML = '컨셉 아티스트를 꿈꿨던'
      window.scrollTo(0,0)
      document.querySelector('#Ideer').classList.add('nata')
});
    txt2.addEventListener('mouseover',function(){
        overevent(txt2);
});
        txt2.addEventListener('mouseout',function(){
        outevent(txt2,'white');
});  
        txt2.addEventListener('click',function(){
        ideer.innerHTML = '열대화 해결을 위해 학습한'
        window.scrollTo(0,0)
        document.querySelector('#Ideer').classList.add('nata')
});   
    txt5.addEventListener('mouseover',function(){
    overevent(txt5);
});
    txt5.addEventListener('mouseout',function(){
    outevent(txt5,'white');
});  
    txt5.addEventListener('click',function(){
    ideer.innerHTML = '팀을 이끄는 것이 즐거운'
    window.scrollTo(0,0)
    document.querySelector('#Ideer').classList.add('nata')
    });

}
