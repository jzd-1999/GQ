window.onload = function(){
    var section = this.document.querySelector('section')
    var ul = this.document.getElementById('charts')
    var lis = ul.querySelectorAll('li')
    var ol = this.document.querySelector('ol')
    var circle = ol.querySelectorAll('li')
    var w = section.offsetWidth
 
     
    for(let i = 0;i<lis.length;i++){
        lis[i].setAttribute('index',i-1)
      
    }
    
    for(let i = 0; i<circle.length;i++){
        circle[i].setAttribute('index',i)
        circle[i].addEventListener('click',function(){
            var index  = this.getAttribute('index')
            ol.querySelector('.bg').classList.remove('bg')
            this.classList.add('bg')
            var translatex = -index * w
            ul.style.transform = "translateX(" + translatex + "px)"

        })
    }
    var startX = 0;
    var moveX = 0;
    var index = 0;
    ul.addEventListener('touchstart',function(e){
        var SmartElement = e.target
        var s = SmartElement.parentNode.parentNode.parentNode;
        index = s.getAttribute('index')
        startX = e.targetTouches[0].pageX;
    })
    ul.addEventListener('touchmove',function(e){
      
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = - index * w +moveX;
        ul.style.transform = "translateX(" + translatex + "px)";
    })
    ul.addEventListener('touchend',function(e){
        if(Math.abs(moveX) > 150){
            moveX > 0 ? index --: index ++
            index == -1 ? index = 5: index 
            index == 6 ? index = 0 : index 
            var translatex = -index * w;
            ul.style.transform = "translateX(" + translatex + "px)";
            ol.querySelector('.bg').classList.remove('bg')
            circle[index].classList.add('bg')
            
        }else{
            var translatex = -index * w;
            ul.style.transform = "translateX(" + translatex + "px)";

        }
    })
   
   
   
}