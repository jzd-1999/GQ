window.onload = function(){

    var btn = this.document.querySelector('#cricle')
    let flag = true;
    var top = this.document.querySelector('.top') 
    var text = top.querySelector('span')   
    var input = this.document.querySelectorAll('input')
    btn.addEventListener('click',function(){
    if(flag == true){
        
        btn.style.left = 0        
        btn.style.backgroundColor = '#666666'
        btn.parentNode.style.backgroundColor = '#999999'
        text.innerHTML= '关'
        for(let i = 0;i<input.length;i++){
            input[i].disabled = false
        }
        flag = false;
    }else{
        btn.style.backgroundColor = 'palevioletred'
        btn.parentNode.style.backgroundColor = 'pink'
        btn.style.left = '50%'
        text.innerHTML = '开'
        for(let i = 0;i<input.length;i++){
            input[i].disabled = true
        }
        flag = true;
    }        
    })
}