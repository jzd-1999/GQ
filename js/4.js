window.onload = function(){
    var tab = document.getElementById('tab')
    var content = this.document.querySelector('.content')
    var item = content.querySelectorAll('div')
    var btn = tab.querySelectorAll('li')
    
    for(let i = 0; i < btn.length; i++){
        btn[i].setAttribute('index',i)
        btn[i].addEventListener('click',function(){
            tab.querySelector('.bg').classList.remove('bg')
            this.classList.add('bg')
            let index = this.getAttribute('index')
            for(let i =0 ; i<item.length; i++){
                item[i].style.display = 'none'
            }
            item[index].style.display = 'block'

        })
        
    }
    
}