// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);

    });

var text = `Olá sou um Robô 🤖, sou programado para agendar consultas, Você deseja marcar uma consulta❓\n
Digite SIM ou NÃO
`
var qualDia = `Qual dia da semana você deseja realizar a sua consulta?
1 = Segunda-Feira
2 = Terça-Feira
3 = Quarta-Feira
4 = Quinra-Feira
5 = Sexta-Feira`

var info = `Quase lá...`

function start(client) {
    client.onMessage((message) => {


        if (message.body.toUpperCase() === 'SIM') {
            client.sendText(message.from, `${qualDia}`)

        }

        else if (
            message.body === '1' ||
            message.body === '2' ||
            message.body === '3' ||
            message.body === '4' ||
            message.body === '5'
        ) {
            client.sendText(message.from, `${info}`)

        }


        else if (message.body.toUpperCase() === 'NÂO') {
            client.sendText(message.from,
                `Até mais!`
            )
        }


        else if (message.body && message.isGroupMsg === false) {
            client
                .sendText(message.from, ` ${text} `)

                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }


    });
}
