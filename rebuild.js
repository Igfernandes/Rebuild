
/*!
  * Reboost v1.0.0 ()
  * Copyright 2019-2021 Company Marketing (https://github.com/Igfernandes)
  * Licensed under MIT ()
*/

let Construct = function(){

    this.create = function($info){
        let $tag = document.createElement($info.type)
        if($info.class){
            $tag.className = $info.class
        }
        if($info.text){
            $tag.innerText = $info.text 
        }
        if($info.id){
            $tag.id = $info.id
        }
        if($info.attribute){
            for(let attribute of $info.attribute){
                $tag.setAttribute(attribute.type, attribute.value)
            }
        }
        if($info.style){
            $tag.style = $info.style
        }
        if($info.type == "img"){
            if($info.src){
                $tag.src = $info.src
            }
            if($info.alt){
                $tag.alt = $info.alt
            }
            if($info.title){
                $tag.title = $info.title
            }
        }
        if($info.coord){
            $info.coord.appendChild($tag);
        }
        if($info.child){
            for(let child of $info.child){
                $tag.append(child)
            }
        }
        if($info.html){
            let z = 0;
            for(let elementos of $info.html){
                if(Array.isArray(elementos)){
                    for(let x =0; x < elementos.length; x++){
                        $tag.innerHTML += elementos[x]
                    }
                }else{
                    $tag.innerHTML += elementos
                }
            }
        }
        return $tag;
    }


    
}


export{
    Construct
}
