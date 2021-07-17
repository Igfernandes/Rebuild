let Mensagem = function(){

    this.digite = ($info)=>{
        let loop; let x = 0;

        loop = setInterval(()=>{
            if(x < $info.msg.length){
               if(x == $info.msg.indexOf("\n")){
                document.querySelector($info.screen).innerHTML += "<br>";
               }else{
                   document.querySelector($info.screen).innerHTML += $info.msg[x];
               }
                x++;
            }else{
                clearInterval(loop)
            }
        }, $info.time)
        
    }
}

export{
    Mensagem
}