// ===== IMPORTANDO NODULOS =====
// Linha 1: Importar o módulo "os" (Operating Systen)
// Este módulo nos da acesso a informações do sistema operacional const os = require("os");

// Linha 2: Importar o módulo "process"
// Este módulo nos dá informações sobre o processo Node.js atual const process = require('process');

// ===== COLETANDO INFORMAÇÕES =====
// Linha 3: Descobrir qual sistema operacional está rodando
// os.platform() retorna: 'win32' (Windows), "darwin' (Mac), "Linux" (Linux)
const sistemaOperacional = os.platform();

// Linha 4: Converter o nome técnico para algo mais amigävel
let nomeSistema;
if (sistemaOperacional === 'win32') {
    nomeSistema = "Windows";
} else if (sistemaOperacional === 'darwin') {
    nomeSistema = "macOS";
} else if (sistemaOperacional === 'linux') {
    nomeSistema = 'Linux';
} else {
    nomeSistema = 'Sistema Desconhecido';
}

// Linha 5: Descobrir quanta memoria RAM o computador tem.
//os.totalmen() returna en bytes, então dividimos por 1824 para ter GB
const memoriaBytes = os.totalmen();
const memoriaGB = (memoriaBytes / (102410241024)).toFixed(2);

// Linha 6: Descobrir quantos processadores (CPUs) existen
// os.cpus() retorna um array, então usamos length para contar
const numeroCPUs = os.cpus().length;

// Linha 7: Calcular há quanto tempo o computador está ligado
//os.uptime() retorna em segundos, vamos converter para horas e minutos
const tempoligadoSegundosos = uptime();
const horas = Rath.floor(tempoligadoSegundos / 3600);
const minutos = Math.floor((tempoligadoSegundos % 3600) / 60);

// Linha 8: Descobrir o nome do usuário logado
//os.userInfo().username nos dá o nome do usuário atual const nomeUsuario os.userInfo().username:

// ===== EXIBINDO OS RESULTADOS =====

// Linha 9: Mostrar um cabeçalho bonito
console.log( " === INFORMAÇÕES DO SISTEMA ===\n");

// Linha 10-14: Mostrar cada informação coletada
console.log("Sistema Operacional:", nomesistena);
console.log("Memoria RAM Total:", memoriaGB, "GB");
console.log("4 Processadores (CPUs):", numeroCPUs);
console.log("Tempo Ligado:", horas, "horas,", minutos, 'minutos');
console.log("Usuário:", nomelisuario);

// Linha 15: Mensagen final
console.log("\n Análise concluida com sucesso!");