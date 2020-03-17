window.onload =function(){

    var round = this.document.querySelectorAll('.round')
    for(let i = 0;i < round.length; i++){
        console.log(round[i]);
        
    }
    var arr = []
    setInterval(() => {
        if(arr.length<6){
            arr.push(parseInt(Math.random()*1000));
            // console.log(arr);
            
        }else{
            for (let i = 0; i < round.length; i++) {
                round[i].innerHTML = arr[i]; 
            }
            arr = []
        }
        
    }, 500);
    
  
    
}