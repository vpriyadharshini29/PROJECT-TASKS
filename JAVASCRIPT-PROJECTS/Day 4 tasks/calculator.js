function calci(num1,num2,operation){
    let Result;
    if(operation==add){
        Result=a+b ;
    }
    if(operation==sub){
        Result=Math.abs(a-b) ;
    }
    if(operation==multi){
        Result=a*b ;
    }
    if(operation==div){
        Result=a/b ;
    }
    if(operation==mod){
        Result=a%b ;
    }

    return Result;
}