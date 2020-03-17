window.onload = function(){

    let time = this.document.querySelector('.time')

    let year = time.children[0]
    let month = time.children[1]
    let day = time.children[2]
    let msg = this.document.querySelector('.msg span')
    
    let btn = this.document.querySelectorAll('.btn')

    const cricle1 = btn[0].children[0];
    const cricle2 = btn[1].children[0];
    const cricle3 = btn[2].children[0];
    let num = this.parseInt(day.innerHTML)
    if(num % 2 == 0){
        cricle1.classList.add('off')
        cricle3.classList.add('off')
        cricle2.classList.add('no')
        cricle1.parentNode.parentNode.children[0].innerHTML = '开'
        cricle3.parentNode.parentNode.children[0].innerHTML = '开'
        cricle2.parentNode.parentNode.children[0].innerHTML = '停'
        Btn(cricle1)
        Btn(cricle3)
        msg.innerHTML = '1、3'

    }else{
        cricle2.classList.add('off')
        cricle1.classList.add('no')
        cricle3.classList.add('no')
        cricle1.parentNode.parentNode.children[0].innerHTML = '停'
        cricle3.parentNode.parentNode.children[0].innerHTML = '停'
        cricle2.parentNode.parentNode.children[0].innerHTML = '开'
        Btn(cricle2)
        msg.innerHTML = '2'

    }
    
    cricle1.classList.contains('off') ? cricle1.parentNode.style.backgroundColor = 'pink':cricle1.parentNode.style.backgroundColor ='#999999';
    cricle2.classList.contains('off') ? cricle2.parentNode.style.backgroundColor = 'pink':cricle2.parentNode.style.backgroundColor ='#999999';
    cricle3.classList.contains('off') ? cricle3.parentNode.style.backgroundColor = 'pink':cricle3.parentNode.style.backgroundColor ='#999999';
    
    function Btn(cricle){
      
       let flag = cricle.classList.contains('off') ? true:false;
       
        cricle.addEventListener('click',function(){
            if(flag == true){
                cricle.classList.remove('off')
                cricle.classList.add('no')
                this.parentNode.style.backgroundColor = '#999999'
                cricle.parentNode.parentNode.children[0].innerHTML = '停' 
                flag = false;

            }
            else{
                cricle.classList.remove('no')
                cricle.classList.add('off')
                this.parentNode.style.backgroundColor = "pink"
                cricle.parentNode.parentNode.children[0].innerHTML = '开' 
                flag = true;
            }
        })
    }
    const Light = this.document.querySelector('.TrafficLight')
    let light = Light.querySelectorAll('div')
    let key =0
    this.setInterval(() => {
        switch (key) {
        case 0: light[0].style.backgroundColor = 'red'
                light[1].style.backgroundColor = '#333333'
                light[2].style.backgroundColor = '#333333'
            break;
        case 1: light[0].style.backgroundColor = '#333333'
                light[1].style.backgroundColor = 'yellow'
                light[2].style.backgroundColor = '#333333'
            break;
        case 2: light[0].style.backgroundColor = '#333333' 
                light[1].style.backgroundColor = '#333333'
                light[2].style.backgroundColor = 'green'   
            default:
            break;
    }
    key ++;
    key >2 ? key = 0: key 
    },1500)
    
    

    var databable = null;
    var db = openDatabase('MyData','','Database',1024*100);
    
}