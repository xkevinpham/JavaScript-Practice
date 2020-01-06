const repeatString = (word, times) =>{
    let times = 0;
    let text = '';
    if(times < 0){
        return 'Error';
    };
    for(let i = 0; i < times; i++){
        text += word;
    };
    return text;
};
  
  module.exports = repeatString