
import * as config from '../../../../rebuild';

let crt = new config.Construct();


let details = ()=>{
    return crt.create({
        type: "div",
        class: "game_boy-sound",
        child: [
            crt.create({
                type: "div",
                class: "game_body-sound-icon"
            }),
            crt.create({
                type: "div",
                class: "game_body-sound-icon"
            }),
            crt.create({
                type: "div",
                class: "game_body-sound-icon"
            }),
            crt.create({
                type: "div",
                class: "game_body-sound-icon"
            }),
            crt.create({
                type: "div",
                class: "game_body-sound-icon"
            }),
            crt.create({
                type: "div",
                class: "game_body-sound-icon"
            }),
        ]
   })
}

export default{
    details
}