import * as config from '../../../../rebuild';

let crt = new config.Construct();

let body = ($info) =>{
    return crt.create({
        type: "game",
        coord: $info.coord,
        child:[
            crt.create({
                type: "div",
                class: "game_boy",
                child: [
                    crt.create({
                        type: "div",
                        class: "game_boy-content",
                        child: $info.child
                    })
                ]
            })
        ]
    });
}

export default{
    body
}