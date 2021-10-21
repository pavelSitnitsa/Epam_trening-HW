function result(a,b){
    if(b==0){
        throw new Error('На ноль делить нельзя')
    }
  return a/b  
}
  console.log(result(1,0))   