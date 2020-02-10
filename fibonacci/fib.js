const fibonacci = function(x) {
    if(x < 0){
        return "Error";
    };
    if(x === 0 ){
        return 0;
    };

    let a = 0;
    let b = 1;
    for (let i = 1; i < x; i++){
        const j = b;
        b = a + b;
        a = j;
    }
    return b;

}

module.exports = fibonacci