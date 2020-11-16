// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const api = require('./services/api');
const utils = require('./utils/date');

function newProperty(object, key, value) {
    object[key] = value
    return true
}

let data = {
    name: "",
    phone: "",
    day: 0,
    month: 0,
    hour: ""
}
const date = new Date();
const month = date.getMonth() + 1; // January is 0, February is 1, and so on.  

newProperty(data, "month", month);

// Formato de como devem ser os dados para registrar a consulta
/* const data = {
    day: 3,
    month: 11,
    name: "Júlio Cesar",
    phone: "166161",
    hour: "13:00:00"
} */

// Envia o objeto contendo os dados para registrar a consulta
// api.post('schedules', data);

venom
    .create(
        'ZapBot OdontoAgenda',
        (base64Qr, asciiQR) => {
            console.log(asciiQR); // Optional to log the QR in the terminal
            console.log("\n", typeof (asciiQR), "\n")
            var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};

            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');

            var imageBuffer = response;
            require('fs').writeFile(
                'out.png',
                imageBuffer['data'],
                'binary',
                function (err) {
                    if (err != null) {
                        console.log(err);
                    }
                }
            );
        },
        undefined, { logQR: false }
    )
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);

    });

// Salvar os dados que estão vindo no message.body pra dar o relatório final da consulta marcada.

let text = `🤖Olá sou um Robô🤖, sou programado para agendar consultas da clínica, Você deseja marcar uma consulta?\n
Digite SIM ou NÃO
`
let qualDia = `Qual dia da semana você deseja realizar a sua consulta?\n
1 = 📅 Segunda-Feira 
2 = 📅 Terça-Feira
3 = 📅 Quarta-Feira
4 = 📅 Quinra-Feira
5 = 📅 Sexta-Feira`

let info = `Etamos quase lá!\n\nAgora só falta você escolher a hora da sua consulta 😊`
let hora = `
A = 07:00 Horas 🕐 B = 07:30 Horas 🕐
C = 08:00 Horas 🕐 D = 08:30 Horas 🕐
E = 09:00 Horas 🕐 F = 09:30 Horas 🕐
G = 10:00 Horas 🕐 H = 10:30 Horas 🕐
I = 11:00 Horas 🕐 J = 13:00 Horas 🕐
K = 13:30 Horas 🕐 L = 14:00 Horas 🕐
M = 14:30 Horas 🕐 N = 15:00 Horas 🕐
O = 15:30 Horas 🕐 P = 16:00 Horas 🕐
Q = 16:30 Horas 🕐 R = 17:00 Horas 🕐
`

function start(client) {
    client.onMessage(async (message) => {
        switch (message.body.toUpperCase()) {

            case 'SIM':
                client.sendText(message.from, `${qualDia}`)
                break

            case 'NÃO':
                client.sendText(message.from, `Até mais!`)
                break

            case '1':
                client.sendText(message.from, `\n${info}\n${hora}`)
                const segunda = utils.dayOfTheWeek("monday");
                newProperty(data, "day", segunda)
                break

            case '2':
                client.sendText(message.from, `\n${info} \n${hora}`)
                const terca = utils.dayOfTheWeek("tuesday");
                newProperty(data, "day", terca)
                break

            case '3':
                client.sendText(message.from, `\n${info} \n${hora}`)
                const quarta = utils.dayOfTheWeek("wednesday");
                newProperty(data, "day", quarta)
                break

            case '4':
                client.sendText(message.from, `\n${info} \n${hora}`)
                const quinta = utils.dayOfTheWeek("thursday");
                newProperty(data, "day", quinta)
                break

            case '5':
                client.sendText(message.from, `\n${info}\n${hora}`)
                const sexta = utils.dayOfTheWeek("friday");
                newProperty(data, "day", sexta)
                break

            case 'A':
                newProperty(data, "hour", '07:00:00')
                break

            case 'B':
                newProperty(data, "hour", '07:30:00')
                break

            case 'C':
                newProperty(data, "hour", '08:00:00')
                break

            case 'D':
                newProperty(data, "hour", '08:30:00')
                break

            case 'E':
                newProperty(data, "hour", '09:00:00')
                break

            case 'F':
                newProperty(data, "hour", '09:30:00')
                break

            case 'G':
                newProperty(data, "hour", '10:00:00')
                break

            case 'H':
                newProperty(data, "hour", '10:30:00')
                break

            case 'I':
                newProperty(data, "hour", '11:00:00')
                break

            case 'J':
                newProperty(data, "hour", '13:00:00')
                break
            case 'K':
                newProperty(data, "hour", '13:30:00')
                break

            case 'L':
                newProperty(data, "hour", '14:00:00')
                break

            case 'M':
                newProperty(data, "hour", '14:30:00')
                break
            case 'N':
                newProperty(data, "hour", '15:00:00')
                break

            case 'O':
                newProperty(data, "hour", '15:30:00')
                break

            case 'P':
                newProperty(data, "hour", '16:00:00')
                break

            case 'Q':
                newProperty(data, "hour", '16:30:00')
                break

            case 'R':
                newProperty(data, "hour", '17:00:00')
                break
            default: // Default será usado quando não entra em nem uma condição acima!!
                client.sendText(message.from, `${text}`)

                    .then((result) => {
                        console.log('Result: ', result); //return object success	
                        newProperty(data, "phone", result.chat.id.user);
                        newProperty(data, "name", result.chat.contact.pushname);
                        console.log(data);
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error	
                    });

                break
        }

        await api.post('schedules', data);

        const user = await api.get(`schedules/${data.phone}`);
        const messageConsult = `Sua consulta está marcada para ${user.data.day}/${user.data.month} as ${user.data.hour} horas`;
        await client.sendText(message.from, messageConsult);
    });
}