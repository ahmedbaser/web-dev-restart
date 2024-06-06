const names = ['abul','dubal','habul','nabul',
         'cabul','babul','babul','kabul','cabul']

function removerDuplicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++) {
        const name = names[i];
        if(unique.includes(name) === false) {
          unique.push(name);
        }
      
    }
    return unique;
    
}

const uniqueName = removerDuplicate(names);
console.log(uniqueName);


