import * as config from '../../../../rebuild';

let crt = new config.Construct();

let btns = ()=>{
    return crt.create({
        type: "div",
        class: "game_boy-btns",
        child: [
           crt.create({
               type: "div",
               class: "game_boy-btns-box",
               child: [
                    crt.create({
                        type: "div",
                        class: "game_boy-btns-move",
                        child: [
                            crt.create({
                                type: "div", 
                                class: "game_boy-btns-move-direction",
                                child: [
                                    crt.create({
                                        type: "div",
                                        class: "game_boy-btns-move-direction-up",
                                        child: [
                                            crt.create({
                                                type: "span",
                                                class: "game_boy-btns-move-direction-up-btn"
                                            })
                                        ]
                                    }),
                                    crt.create({
                                        type: "div",
                                        class: "game_boy-btns-move-direction-eixo",
                                        child: [
                                            crt.create({
                                                type: "div",
                                                class: "game_boy-btns-move-direction-eixo-left",
                                                child: [
                                                    crt.create({
                                                        type: "span",
                                                        class: "game_boy-btns-move-direction-eixo-left-btn"
                                                    })
                                                ]
                                            }),
                                            crt.create({
                                                type: "div",
                                                class: "game_boy-btns-move-direction-eixo-right",
                                                child: [
                                                    crt.create({
                                                        type: "span",
                                                        class: "game_boy-btns-move-direction-eixo-right-btn"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    crt.create({
                                        type: "div",
                                        class: "game_boy-btns-move-direction-down",
                                        child: [
                                            crt.create({
                                                type: "span",
                                                class: "game_boy-btns-move-direction-down-btn"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    crt.create({
                        type: "div",
                        class: "game_boy-btns-command",
                        child: [
                            crt.create({
                                type: "div",
                                class: "game_boy-btns-command-background",
                                child: [
                                    crt.create({
                                        type: "div",
                                        attibute: [{  
                                            type: "data",
                                            value: "left"
                                        }],
                                        class: "game_boy-btns-command-btn",
                                        child: [
                                            crt.create({
                                                type: "button"
                                            })
                                        ]
                                    }),
                                    crt.create({
                                        type: "div",
                                        attibute: [{  
                                            type: "data",
                                            value: "right"
                                        }],
                                        class: "game_boy-btns-command-btn",
                                        child: [
                                            crt.create({
                                                type: "button"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
               ]
           }),
           crt.create({
               type: "div",
               class: "game_boy-btns-bloc",
               child: [
                   crt.create({
                       type: "div",
                       class: "game_boy-btns-bloc-segment",
                       child:[
                           crt.create({
                               type: "div",
                               class: "game_boy-btns-bloc-segment-icon",
                               child: [
                                   crt.create({
                                       type: "button"
                                   })
                               ]
                           }),
                           crt.create({
                            type: "div",
                            class: "game_boy-btns-bloc-segment-icon",
                            child: [
                                crt.create({
                                    type: "button"
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
    btns
}