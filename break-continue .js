for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        break; 
    }
    console.log(i);
    
  }

  let arra = ['yeasin', 'arafat', 'shuvo', 'samim', 'akash'];
  for(let x of arra){
      if(x == 'samim'){
          continue;
      }
      console.log(x);
  }
