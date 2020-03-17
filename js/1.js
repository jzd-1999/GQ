window.onload = function(){
    var btn = document.querySelectorAll('button');
    btn[0].addEventListener('click',function(){

    })
    var top = document.querySelector('.top')
    var val = document.querySelector('input')
    var e = /^[1-9][0-9]{0,2}$/;
    console.log(e);
    var tishi = document.querySelector('.bottom span')
    
    btn[1].addEventListener('click',function(){
        var money = 0;
        money += parseInt(val.value)
       
        
        if(e.test(money) === true){
            tishi.style.display = 'inline-block'
            tishi.innerHTML = '充值成功'
            top.children[0].textContent = money 

        }else{
            tishi.style.display = 'inline-block'
            tishi.style.color = 'red'
            tishi.innerHTML = '输入有误'
           
        };
         setTimeout(function(){
            tishi.style.display = 'none'
        },1500)
    
        
    })
}
