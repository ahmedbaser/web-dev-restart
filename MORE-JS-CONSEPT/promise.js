const getdata = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5) {
        resolve(566665);
    }
   else  {
     reject('No data available')
    }
})
getdata
 .then(data => console.log(data + 22))
 .catch(err => console.log('ERR:', err));
