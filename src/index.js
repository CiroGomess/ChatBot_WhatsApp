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



        if (message.isGroupMsg === false) {
            client
                .sendText(message.from, ` ${text} `)

            // .then((result) => {
            //     console.log('Result: ', result); //return object success
            // })
            // .catch((erro) => {
            //     console.error('Error when sending: ', erro); //return object error
            // });

            switch (message.body) {
                case '1':
                    client.sendText(message.from, `Sua consulta foi marcada para Segunda-Feira`)
                    break
                case '2':
                    client.sendText(message.from, 'Sua consulta foi marcada para Terça-Feira')
                    break

                case '3':
                    client.sendText(message.from, 'Sua consulta foi marcada para Quarta-Feira')
                    break
                case '4':
                    client.sendText(message.from, 'Sua consulta foi marcada para Quinta-Feira')
                    break
                case '5':
                    client.sendText(message.from, 'Sua consulta foi marcada para Sexta-Feira')
                    break

                default:
                    break
            }

            if (message.body.toUpperCase() === 'SIM') {
                client.sendText(message.from, `${qualDia}`)

            }


            else if (message.body.toUpperCase() === 'NÂO') {
                client.sendText(message.from,
                    `Até mais!`
                )
            }

        }

    });
}
