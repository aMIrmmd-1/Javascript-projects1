let $ = document
var btn = $.getElementById('btn')
var modal = $.getElementsByClassName('modal-parent')
var X = $.querySelector('.X')
var scn = $.getElementById('scn')
btn.addEventListener('click', ()=>{
    modal[0].style.display = 'block'
    scn.style.filter = 'blur(20px)'    
})
X.addEventListener('click',()=>{
    modal[0].style.display = 'none'
    scn.style.filter = 'blur(0px)'    
})
$.body.addEventListener('keyup', (event)=>{
    if(event.keyCode == 27){
        modal[0].style.display = 'none'
        scn.style.filter = 'blur(0px)'    
    }
})


