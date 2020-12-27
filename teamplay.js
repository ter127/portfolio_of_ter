window.onload = function(){
    // 커서 대면 바뀌는거
 document.querySelector('#sircle1').addEventListener('mouseover',function(){
    document.querySelector('#sircle1').style.borderRadius ='80px'
 })
 document.querySelector('#sircle1').addEventListener('mouseout',function(){
    document.querySelector('#sircle1').style.borderRadius ='200px'
 })
 document.querySelector('#sircle2').addEventListener('mouseover',function(){
    document.querySelector('#sircle2').style.borderRadius ='80px'
 })
 document.querySelector('#sircle2').addEventListener('mouseout',function(){
    document.querySelector('#sircle2').style.borderRadius ='200px'
 })
 document.querySelector('#sircle3').addEventListener('mouseover',function(){
    document.querySelector('#sircle3').style.borderRadius ='80px'
 })
 document.querySelector('#sircle3').addEventListener('mouseout',function(){
    document.querySelector('#sircle3').style.borderRadius ='200px'
 })
 document.querySelector('#sircle4').addEventListener('mouseover',function(){
    document.querySelector('#sircle4').style.borderRadius ='80px'
 })
 document.querySelector('#sircle4').addEventListener('mouseout',function(){
    document.querySelector('#sircle4').style.borderRadius ='200px'
 })
// 클릭하ㅏ면 작동하는거
// setTimeout(function(){}, delay);
document.querySelector('#sircle1').addEventListener('click',function(){
        document.querySelector('#sircle1').classList.add('clk')
        document.querySelector('#tl1').classList.add('line')
    
})
document.querySelector('#sircle2').addEventListener('click',function(){
    document.querySelector('#sircle2').classList.add('clk')
    document.querySelector('#tl2').classList.add('line')

})
document.querySelector('#sircle3').addEventListener('click',function(){
    document.querySelector('#sircle3').classList.add('clk')
    document.querySelector('#tl3').classList.add('line')

})
document.querySelector('#sircle4').addEventListener('click',function(){
    document.querySelector('#sircle4').classList.add('clk')
    document.querySelector('#tl4').classList.add('line')

})


}