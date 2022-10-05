function getData(data) {
    return  new Promise(function (resolve, reject) {
    
            if (typeof data !== Number) {
               return reject("error");
            } else if(data%2===1) {
                setTimeout(function () {
                    return resolve('odd')
                }, 2000);
    
            }else if(data%2===0){
                setTimeout(function () {
                    return resolve('even')
                }, 4000);
    
            }
        });
       
    
    
    
    }
    
    
    export default getData