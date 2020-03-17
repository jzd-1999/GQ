window.onload = function(){
    var table = this.document.querySelector('.table')

    if(localStorage.getItem('getState')){
    }else{
        table.innerHTML = '暂无历史记录!'
        localStorage.setItem('getState',1)
    }
    
    function getTableContent(id){
        var mytable = document.getElementById(id);
        var data = [];
        for(var i = 0, rows = mytable.rows.length; i < rows; i++){
            for(var j = 0,cells = mytable.rows[i].cells.length; j < cells; j++){
                if(!data[i]){
                    data[i] = new Array();
                }
                data[i][j] = mytable.rows[i].cells[j].innerHTML;
            
            }
        }
        return data;
    }
    var data = getTableContent('table')

    function changeData(objectsFrom){
        var newArr = []
        var obj = {};
        for(let i = 0; i < objectsFrom.length; i++){    
            for(let j = 0; j < objectsFrom[i].length; j++){
                if(!obj[i]){
                    obj[i] = new Object();
                }
                objectsFrom[i].forEach((item,index) => {obj[i][index] = item} );
                // objectsFrom[i].forEach(function(item,index){
                //     obj[i][index] = item;
                //     return obj[i]
                // });
                
            }
            newArr.push(obj[i])
        }
        return newArr;
    }
     function Sort(obj,sor,num){
        if(num == 'asc'){
            obj.sort((a,b) => (a[sor] > b[sor] ? 1 : -1))
        }else if(num == 'des'){
            obj.sort((a,b) => (a[sor] > b[sor] ? -1 : 1))
        }
    };
    function addContent(tr){
        for (let i = 0; i < tr.length; i++) {
           var td = tr[i].querySelectorAll('td');
           for (let j = 0; j < td.length-1; j++) {
               td[j + 1].innerHTML = newData[i][j + 1]
           }
        }
    }
    
    var newData = changeData(data);
    var select = this.document.querySelector('select')
    var tbody = this.document.querySelector('tbody')
    var tr = tbody.querySelectorAll('tr')
   
    select.addEventListener('change',function (){
        if(this.options[select.selectedIndex].text === '时间升序'){
            Sort(newData,'4','asc')
            console.log(newData);
            addContent(tr)
        }
        if(this.options[select.selectedIndex].text === '时间降序'){
            Sort(newData,'4','des')
            console.log(newData);
            addContent(tr)
        }
    })


}