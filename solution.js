function list(names){
let answer = ''
  for (let i in names) {
  
    if (i < names.length-2){
      answer += names[i].name + ', '
    }
    else if (i == names.length-2) {
      answer += names[i].name + ' & '
    
    }
    else{
      answer += names[i].name
    }
  }
  return answer
}
