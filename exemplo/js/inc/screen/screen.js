import * as config from '../../../../rebuild';

let crt = new config.Construct();

let screen = ($info)=>{
    return crt.create({
        type: "div",
        class: "game_boy-screen",
        child: [
            crt.create({
                type: "div",
                class: "game_boy-screen--bloc",
                child: [
                    crt.create({
                        type: "div",
                        class: "game_boy-screen--bloc-pelin",
                        child: [
                            crt.create({
                                type: "div",
                                class: "game_boy-screen--bloc-main",
                                child: [
                                    crt.create({
                                        type: "div",
                                        class: "game_boy-screen--bloc-main-text",
                                        child: [
                                            crt.create({
                                                type: "span",
                                                text: $info.text
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
}

export default{
    screen
}