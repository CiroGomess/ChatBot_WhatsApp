// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);

    });

var text = `Olá sou um Robô 🤖, sou programado para agendar consultas da clínica, Você deseja marcar uma consulta?\n
Digite SIM ou NÃO
`
var qualDia = `Qual dia da semana você deseja realizar a sua consulta?
1 = Segunda-Feira
2 = Terça-Feira
3 = Quarta-Feira
4 = Quinra-Feira
5 = Sexta-Feira`

var info = `Etamos quase lá!\nAgora só falta você escolher a hora da sua consulta 😊`

function start(client) {
    client.onMessage((message) => {

        switch (message.body.toUpperCase()) {

            case 'SIM':
                client.sendText(message.from, `${qualDia}`)
                break

            case 'NÃO':
                client.sendText(message.from, `Até mais!`)
                break

            case '1':
                client.sendText(message.from, `Sua consulta foi marcada para Segunda-Feira\n${info}`)
                break

            case '2':
                client.sendText(message.from, `Sua consulta foi marcada para Terça-Feira\n${info}  `)
                break

            case '3':
                client.sendText(message.from, `Sua consulta foi marcada para Quarta-Feira\n${info}`)
                break

            case '4':
                client.sendText(message.from, `Sua consulta foi marcada para Quinta-Feira\n${info}`)
                break

            case '5':
                client.sendText(message.from, `Sua consulta foi marcada para Sexta-Feira\n${info}`)
                break

            default: // Default será usado quando não entra em nem uma condição acima!!
                client.sendText(message.from, `${text}`)

                break
        }

    });
}
