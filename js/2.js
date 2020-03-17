window.onload = function(){
    let values = this.document.querySelector('select')
    console.log(values);
    const btn = this.document.querySelector('button')
    
    
    
    var table = this.document.getElementById('table')
    console.log(table);
    
    function getTableContent(id){
        var mytable = document.getElementById(id);
        var data = [];
        for(var i=0,rows=mytable.rows.length; i<rows; i++){
          for(var j=0,cells=mytable.rows[i].cells.length; j<cells; j++){
            if(!data[i]){
              data[i] = new Array();
            }
            data[i][j] = mytable.rows[i].cells[j].innerHTML;
        
          }
        }
        return data;
    }
      var data = getTableContent('table');
      var newData = []
      for (let i = 0 ;i<data.length;i++){
          newData.push(data[i].map((i) => {
              return this.parseInt(i)
          }))
      }
     

      
      let obj={}
      let obj1 ={}
      let obj2 = {}
      let newArr = [];
      for(let i =0,len = data.length;i<len;i++){
          if(i == 0){
                newData[i].forEach((item,index)=>{obj[index] = item});
          }
          if(i == 1){
                newData[i].forEach((item,index)=>{obj1[index] = item});

          }
          if(i == 2){
                newData[i].forEach((item,index)=>{obj2[index] = item});
          }
          
      }
      newArr.push(obj)
      newArr.push(obj1)
      newArr.push(obj2)

      
      
      console.log(newArr);
      
   function inner (){
    btn.addEventListener('click',function(){
        for(let i =0;i<tr.length;i++){
            var td = tr[i].querySelectorAll('td')
            for(let j =0;j<td.length;j++){
                td[j].innerHTML = newArr[i][j]
            }
        }
    })   
   
   }
    
    // function Sort(obj,sor,num){
    //     if(num =='asc'){
    //         obj.sort((a,b) => (a[sor] > b[sor] ? -1 : 1))
    //     }else if(num =='des'){
    //         obj.sort((a,b) => (a[sor] > b[sor] ? 1 : -1))
    //     }
    // };
    var tbody = this.document.querySelector('tbody')
    var tr = tbody.querySelectorAll('tr')
    values.onchange= function(){

        if(this.options[values.selectedIndex].text === '路口升序'){      
            
            newArr.sort((a,b) => (a['0']>b['0'] ? 1 : -1))
           inner();
            
            
            
        }
        else if(this.options[values.selectedIndex].text === '路口降序'){
            newArr.sort((a,b)=>(a['0']>b['0']? -1:1))
           inner();
           
            
            
        }
        else if(this.options[values.selectedIndex].text === '红灯升序'){
            newArr.sort((a,b)=>(a['1']>b['1']? 1: -1))
           inner()

            
        }
        else if(this.options[values.selectedIndex].text === '红灯降序'){
            newArr.sort((a,b)=>(a['1']>b['1']? -1:1))
            inner()
            
        }
        else if(this.options[values.selectedIndex].text === '绿灯升序'){
            newArr.sort((a,b)=>(a['3']>b['3']? 1:-1))
            inner()
        }
        else if(this.options[values.selectedIndex].text === '绿灯降序'){
            newArr.sort((a,b)=>(a['3']>b['3']? -1:1))
            inner()
        }
        else if(this.options[values.selectedIndex].text === '黄灯升序'){
            newArr.sort((a,b)=>(a['2']>b['2']? 1:-1))
            inner()
        }
        else if(this.options[values.selectedIndex].text === '黄灯降序'){
            newArr.sort((a,b)=>(a['2']>b['2']? -1:1))
            inner()
        }
    }
}