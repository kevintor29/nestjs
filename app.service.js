"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    getbsm() {
        return 'MENTALIDADES<br><br>Responsabilidade Pessoal <br> Eu descrevo responsabilidade pessoal como assumir ' +
            '<br>responsabilidade por meu trabalho, minhas decisões e suas consequências' +
            '<br>Eu demonstro responsabilidade pessoal trabalhando' +
            '<br>duro, mantendo compromissos e não dando' +
            '<br>desculpas, enquanto concluo as sessões e o' +
            '<br>trabalho <br> <br>' +
            'Mentalidade de Crescimento' +
            '<br>Eu descrevo mentalidade de crescimento como a' +
            '<br>crença de que a inteligência não é fixa; a crença de' +
            '<br>que quando você pratica algo ao longo do tempo,' +
            '<br>você melhora.' +
            '<br>E' +
            '<br>Eu demonstro uma mentalidade de crescimento' +
            '<br>trabalhando duro para melhorar nas atividades de' +
            '<br>sessão e desenvolver habilidades exigidas de um' +
            '<br>futuro desenvolvedor Java.' +
            '<br> <br> PERSISTENCIA <br><br> ' +
            'TRABALHO EM EQUIPE <br><br>' +
            'ATENÇAO AOS DETALHES<br>' +
            'PROACTIVIDADE <br>' +
            'COMUNICAÇAO';
    }
    getaprendizado() {
        return 'OBJETIVOS DE APRENDIZADO <br>' +
            'ENTENDER UMA API E APRENDER BASE DE DADOS';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map