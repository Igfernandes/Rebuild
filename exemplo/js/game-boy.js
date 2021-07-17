import * as config from '../../rebuild.js';
import body from './inc/body/_body.js';
import screen from './inc/screen/screen.js';
import btns from './inc/btns/_btns.js';
import details from './inc/details/_details.js';
import * as mensagem from './system/_mensagem.js';

let cmd = new mensagem.Mensagem();

body.body({
    coord: document.querySelector("body"),
    child: [
        screen.screen({
            text: ""
        }),
        btns.btns(),
        details.details(),
    ]
})

cmd.digite({
    screen: ".game_boy-screen--bloc-main-text span",
    msg: "Bem Vindo Ao \n GAME BOY!",
    time: 200
})

