const niveisDificuldade = {
    Fácil: [
        { nome: 'Brasil', codigoPais: 'br' },
        { nome: 'Estados Unidos', codigoPais: 'us' },
        { nome: 'Colômbia', codigoPais: 'co' },
        { nome: 'França', codigoPais: 'fr' },
        { nome: 'Alemanha', codigoPais: 'de' },
        { nome: 'Paraguai', codigoPais: 'py' },
        { nome: 'Argentina', codigoPais: 'ar' },
        { nome: 'África do Sul', codigoPais: 'za' },
        { nome: 'Bolívia', codigoPais: 'bo' },
        { nome: 'Canadá', codigoPais: 'ca' },
        { nome: 'Grécia', codigoPais: 'gr' },
        { nome: 'Finlândia', codigoPais: 'fi' },
        { nome: 'Estônia', codigoPais: 'ee' },
        { nome: 'Índia', codigoPais: 'in' },
        { nome: 'Israel', codigoPais: 'il' },
        { nome: 'Noruega', codigoPais: 'no' },
        { nome: 'Suécia', codigoPais: 'se' },
        { nome: 'Coreia do Sul', codigoPais: 'kr' },
        { nome: 'Espanha', codigoPais: 'es' },
        { nome: 'Itália', codigoPais: 'it' },
        { nome: 'México', codigoPais: 'mx' },
        { nome: 'Rússia', codigoPais: 'ru' },
        { nome: 'China', codigoPais: 'cn' },
        { nome: 'Reino Unido', codigoPais: 'gb' },
        { nome: 'Japão', codigoPais: 'jp' },
        { nome: 'Austrália', codigoPais: 'au' },
        { nome: 'Bélgica', codigoPais: 'be' },
        { nome: 'Croácia', codigoPais: 'hr' },
        { nome: 'Equador', codigoPais: 'ec' },
        { nome: 'Peru', codigoPais: 'pe' },
        { nome: 'Portugal', codigoPais: 'pt' },
        { nome: 'Suíça', codigoPais: 'ch' },
        { nome: 'Uruguai', codigoPais: 'uy' },
        { nome: 'Ucrânia', codigoPais: 'ua' },
        { nome: 'Venezuela', codigoPais: 've' },
    ],
    Médio: [
        { nome: 'Islândia', codigoPais: 'is' },
        { nome: 'Líbano', codigoPais: 'lb' },
        { nome: 'Coréia do Norte', codigoPais: 'kp' },
        { nome: 'Cuba', codigoPais: 'cu' },
        { nome: 'Angola', codigoPais: 'ao' },
        { nome: 'Jamaica', codigoPais: 'jm' },
        { nome: 'Moçambique', codigoPais: 'mz' },
        { nome: 'Argélia', codigoPais: 'dz' },
        { nome: 'Arábia Saudita', codigoPais: 'sa' },
        { nome: 'Bangladesh', codigoPais: 'bd' },
        { nome: 'Bulgária', codigoPais: 'bg' },
        { nome: 'Camarões', codigoPais: 'cm' },
        { nome: 'Cazaquistão', codigoPais: 'kz' },
        { nome: 'Egito', codigoPais: 'eg' },
        { nome: 'Geórgia', codigoPais: 'ge' },
        { nome: 'Guiana', codigoPais: 'gy' },
        { nome: 'Hong Kong', codigoPais: 'hk' },
        { nome: 'Quênia', codigoPais: 'ke' },
        { nome: 'Panamá', codigoPais: 'pa' },
        { nome: 'Omã', codigoPais: 'om' },
        { nome: 'Nicarágua', codigoPais: 'ni' },
        { nome: 'Suriname', codigoPais: 'sr' },
        { nome: 'Qatar', codigoPais: 'qa' },
        { nome: 'Porto Rico', codigoPais: 'pr' },
        { nome: 'Paquistão', codigoPais: 'pk' },
        { nome: 'Nova Zelândia', codigoPais: 'nz' },
        { nome: 'Nigéria', codigoPais: 'ng' },
        { nome: 'República Dominicana', codigoPais: 'do' },
        { nome: 'Vietnã', codigoPais: 'vn' },
        { nome: 'Tunísia', codigoPais: 'tn' },
        { nome: 'Turquia', codigoPais: 'tr' },
    ],
    Difícil: [
        { nome: 'Nauru', codigoPais: 'nr' },
        { nome: 'Palau', codigoPais: 'pw' },
        { nome: 'Mauritânia', codigoPais: 'mr' },
        { nome: 'Belize', codigoPais: 'bz' },
        { nome: 'Bósnia e Herzegovina', codigoPais: 'ba' },
        { nome: 'Brunei', codigoPais: 'bn' },
        { nome: 'Burundi', codigoPais: 'bi' },
        { nome: 'Camboja', codigoPais: 'kh' },
        { nome: 'Chade', codigoPais: 'td' },
        { nome: 'Curaçao', codigoPais: 'cw' },
        { nome: 'Ilhas Salomão', codigoPais: 'sb' },
        { nome: 'Kiribati', codigoPais: 'ki' },
        { nome: 'Montenegro', codigoPais: 'me' },
        { nome: 'Papua Nova Guiné', codigoPais: 'pg' },
        { nome: 'Ruanda', codigoPais: 'rw' },
        { nome: 'Butão', codigoPais: 'bt' },
        { nome: 'São Tomé e Príncipe', codigoPais: 'st' },
        { nome: 'Maldivas', codigoPais: 'mv' },
        { nome: 'Timor-Leste', codigoPais: 'tl' },
        { nome: 'Sri Lanka', codigoPais: 'lk' },
        { nome: 'Malta', codigoPais: 'mt' },
        { nome: 'Madagascar', codigoPais: 'mg' },
        { nome: 'Libéria', codigoPais: 'lr' },
        { nome: 'Marrocos', codigoPais: 'ma' },
        { nome: 'Uganda', codigoPais: 'ug' },
        { nome: 'Zimbábue', codigoPais: 'zw' },
        { nome: 'Tanzânia', codigoPais: 'tz' },
        { nome: 'Somália', codigoPais: 'so' },
        { nome: 'República do Congo', codigoPais: 'cg' },
    ],
    Impossível: [
        { nome: 'Aruba', codigoPais: 'aw' },
        { nome: 'Bermudas', codigoPais: 'bm' },
        { nome: 'Dominica', codigoPais: 'dm' },
        { nome: 'Fiji', codigoPais: 'fj' },
        { nome: 'Gibraltar', codigoPais: 'gi' },
        { nome: 'Guam', codigoPais: 'gu' },
        { nome: 'Guernsey', codigoPais: 'gg' },
        { nome: 'Ilha de Man', codigoPais: 'im' },
        { nome: 'Ilhas Marianas do Norte', codigoPais: 'mp' },
        { nome: 'Niue', codigoPais: 'nu' },
        { nome: 'Samoa', codigoPais: 'ws' },
        { nome: 'Santa Lúcia', codigoPais: 'lc' },
        { nome: 'Seychelles', codigoPais: 'sc' },
        { nome: 'St. Kitts e Nevis', codigoPais: 'kn' },
        { nome: 'Wallis e Futuna', codigoPais: 'wf' },
        { nome: 'São Cristóvão e Nevis', codigoPais: 'kn' },
        { nome: 'Burquina Faso', codigoPais: 'bf' },
        { nome: 'Vanuatu', codigoPais: 'vu' },
        { nome: 'Tonga', codigoPais: 'to' },
        { nome: 'Granada', codigoPais: 'gd' },
        { nome: 'Togo', codigoPais: 'tg' },
        { nome: 'Lesoto', codigoPais: 'ls' },
        { nome: 'Tajiquistão', codigoPais: 'tj' },
        { nome: 'Butão', codigoPais: 'bt' },
        { nome: 'Kosovo', codigoPais: 'xk' },
        { nome: 'Jersey', codigoPais: 'je' },
        { nome: 'Ilhas Virgens dos Estados Unidos', codigoPais: 'vi' },
        { nome: 'Polinésia Francesa', codigoPais: 'pf' },
        { nome: 'Quirguizistão', codigoPais: 'kg' },
    ]
};

const bandeirasOriginais = { ...niveisDificuldade };
let nivelAtual;
let bandeiraAtual;
let pontuacao = 0;
const acertosParaMudarNivel = 5;

function escolherBandeira() {
    const bandeirasNivel = niveisDificuldade[nivelAtual];

    if (bandeirasNivel.length === 0) {
        niveisDificuldade[nivelAtual] = [...bandeirasOriginais[nivelAtual]];
    }

    const indice = Math.floor(Math.random() * bandeirasNivel.length);
    const bandeiraEscolhida = bandeirasNivel.splice(indice, 1)[0];

    return bandeiraEscolhida;
}




function criarOpcoesResposta() {
    // Verifica se a pontuação é diferente de 160 antes de criar as opções de resposta
    if (pontuacao !== 160) {
        const opcoesContainer = document.getElementById('opcoes-container');
        opcoesContainer.innerHTML = '';

        const opcoes = [...niveisDificuldade[nivelAtual]];
        const opcaoCorreta = bandeiraAtual;

        const indexRespostaCorreta = opcoes.findIndex(opcao => opcao.nome === opcaoCorreta.nome);
        opcoes.splice(indexRespostaCorreta, 1);

        const opcoesEmbaralhadas = embaralharOpcoes(opcoes).slice(0, 3);

        const posicaoRespostaCorreta = Math.floor(Math.random() * 4);
        opcoesEmbaralhadas.splice(posicaoRespostaCorreta, 0, opcaoCorreta);

        opcoesEmbaralhadas.forEach((opcao, index) => {
            const botaoOpcao = document.createElement('button');
            botaoOpcao.textContent = opcao.nome;
            botaoOpcao.onclick = () => responder(opcao.nome);
            opcoesContainer.appendChild(botaoOpcao);
            opcoesContainer.appendChild(document.createElement('br')); // Adiciona uma quebra de linha
        });
    }
}


function embaralharOpcoes(opcoes) {
    for (let i = opcoes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
    }
    return opcoes;
}


function verificarResposta(bandeira, respostaUsuario) {
    return bandeira.nome === respostaUsuario;
}





function atualizarInterface(bandeira) {
    if (pontuacao !== 160) {
        const imagemBandeira = document.getElementById('bandeira');
        imagemBandeira.src = `https://flagcdn.com/w320/${bandeira.codigoPais}.png`;
        imagemBandeira.alt = bandeira.nome;
        atualizarPontuacao();
    }
}



function iniciarJogo(nivel) {
    nivelAtual = nivel;
    bandeiraAtual = escolherBandeira();
    criarOpcoesResposta();
    atualizarInterface(bandeiraAtual);
}


function obterPontuacaoAtual() {
    switch (nivelAtual) {
        case 'Fácil':
            return 2;
        case 'Médio':
            return 5;
        case 'Difícil':
            return 10;
        case 'Impossível':
            return 15;
        default:
            return 0;
    }
}


// Função para mudar o nível
function mudarNivel() {
    switch (nivelAtual) {
        case 'Fácil':
            if (pontuacao >= 10) {
                nivelAtual = 'Médio';
            }
            break;
        case 'Médio':
            if (pontuacao >= 35) {
                nivelAtual = 'Difícil';
            }
            break;
        case 'Difícil':
            if (pontuacao >= 85) {
                nivelAtual = 'Impossível';
            }
            break;
        case 'Impossível':
            // Adicione lógica adicional se necessário
            break;
        default:
            break;
    }

    reiniciarNiveis();

    // Adicione um atraso de 1 segundo antes de chamar iniciarJogo após reiniciar níveis
    setTimeout(() => {
        iniciarJogo(nivelAtual);

        // Adicione outro atraso de 1 segundo antes de atualizar a pontuação
        setTimeout(() => {
            atualizarPontuacao();
        }, 1000);

    }, 1000);
}



function reiniciarJogo() {
    nivelAtual = 'Fácil';
    pontuacao = 0;
    reiniciarNiveis();
    iniciarJogo(nivelAtual);
}

function reiniciarNiveis() {
    for (const nivel in niveisDificuldade) {
        niveisDificuldade[nivel] = [...bandeirasOriginais[nivel]];
    }
}

function responder(respostaUsuario) {
    const opcoes = document.querySelectorAll('#opcoes-container button');
    
    // Desabilita todos os botões para evitar cliques adicionais
    opcoes.forEach(opcao => {
        opcao.disabled = true;
    });

    const correta = verificarResposta(bandeiraAtual, respostaUsuario);
    if (correta) {
        pontuacao += obterPontuacaoAtual();
        atualizarPontuacao();
        // Verifica se atingiu os pontos necessários para mudar de nível
        if (pontuacao === 10 || pontuacao === 35 || pontuacao === 85) {
            mudarNivel();
        }

        mostrarMensagemResultado(true, respostaUsuario);
    } else {
        mostrarMensagemResultado(false, respostaUsuario);
    }
}

function mostrarMensagemResultado(correta, respostaUsuario) {
    const container = document.getElementById('container');

    const opcoes = document.querySelectorAll('#opcoes-container button');
    opcoes.forEach(opcao => {
        const opcaoCorreta = bandeiraAtual.nome === opcao.textContent;

        if (opcaoCorreta && correta) {
            opcao.style.backgroundColor = 'green'; // Resposta correta
            playAudioCerto();
        } else if (!opcaoCorreta && opcao.textContent === respostaUsuario) {
            opcao.style.backgroundColor = 'red'; // Resposta incorreta
            playAudioErrado();
        } else {
            opcao.style.backgroundColor = '#5e5f6b'; // Cor original do botão
        }
    });

    // Remover a mensagem e resetar as cores após um tempo
    setTimeout(() => {

        if (!correta) {

            openPopup();
        } else {
            iniciarJogo(nivelAtual); // Iniciar a próxima pergunta após um tempo curto
        }
    }, 1000)
}


function resetarCoresBotoes() {
    const opcoes = document.querySelectorAll('#opcoes-container button');
    
    // Habilita todos os botões novamente
    opcoes.forEach(opcao => {
        opcao.style.backgroundColor = '#5e5f6b'; // Cor original do botão
        opcao.disabled = false; // Habilita o botão novamente
    });
}


function atualizarPontuacao() {
    const pontuacaoElemento = document.getElementById('pontuacao');
    pontuacaoElemento.textContent = `Nível: ${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)} - Pontuação: ${pontuacao}`;
    
    // Verificar se a pontuação atingiu 160
    if (pontuacao === 160) {
        setTimeout(function () {
            openPopup2(); // Chama a função para abrir o popup
        }, 1000);
    }
}



document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        // A página está oculta, então você pode recarregá-la
        location.reload(true); // O parâmetro 'true' força o recarregamento do cache
    }
});


function startGame() {
    window.location.href = "index.html";

}




window.onload = () => iniciarJogo('Fácil'); openPopupComecar();

// Função para abrir o popup e pausar o progresso
function openPopupComecar() {
    var popup = document.getElementById('popupcomecar');
    popup.style.display = 'block';
}
// Função para abrir o popup e pausar o progresso
function closePopupComecar() {
    var popup = document.getElementById('popupcomecar');
    popup.style.display = 'none';
    startProgressBar();
}


function startProgressBar() {
    var progressBar = document.getElementById('progress');
    var totalTime = 90 * 1000;  // Alteração para 30 segundos
    var interval = 100;

    var startTime = new Date().getTime();

    var updateProgress = function () {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;
        var progressPercentage = (elapsedTime / totalTime) * 100;

        progressBar.style.width = (100 - progressPercentage) + '%';

        if (elapsedTime >= totalTime) {
            clearInterval(progressInterval);
            reiniciarJogo();
        }
    };

    var reiniciarJogo = function () {
        setTimeout(function () {
            openPopup(); // Chama a função para abrir o popup
            playAudioErrado()
        }, 1000);
    };

    // Inicia o intervalo e armazena a referência em progressInterval
    progressInterval = setInterval(updateProgress, interval);
}

// Função para pausar o progresso (chame isso ao ocorrer um erro)
function pausarProgresso() {
    clearInterval(progressInterval);
}

function retomarProgresso() {
    startProgressBar();
}


// Função para abrir o popup e pausar o progresso
function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    // Pausa o progresso ao abrir o popup
    pausarProgresso();
}

// Função para fechar o popup e retomar o progresso
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';

    // Retoma o progresso e reinicia a barra para 100% ao fechar o popup
    reiniciarJogo();
    startProgressBar();
}



// Função para abrir o popup e pausar o progresso
function openPopup2() {
    var popup = document.getElementById('popupzerou');
    popup.style.display = 'block';

    playAudioZerou();
    // Pausa o progresso ao abrir o popup
    pausarProgresso();
}

// Função para fechar o popup e retomar o progresso
function closePopup2() {
    var popup = document.getElementById('popupzerou');
    popup.style.display = 'none';
    // Retoma o progresso e reinicia a barra para 100% ao fechar o popup
    reiniciarJogo();
    startProgressBar();
}





function playAudioCerto() {
    var audioCerto = new Audio('audios/respostacerta.mp3');
    audioCerto.play();
}
function playAudioErrado() {
    var audioErrado = new Audio('audios/respostaerrada.mp3');
    audioErrado.play();
} 
var audioZerou;

function playAudioZerou() {
    if (!audioZerou || audioZerou.paused) {
        audioZerou = new Audio('audios/zerou.mp4');
        audioZerou.play();

        // Defina um evento para pausar o áudio após a reprodução
        audioZerou.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
        }, { once: true }); // O evento será removido automaticamente após ser executado uma vez
    }
}





var tocando = false; // Variável para rastrear se a música está tocando ou não
var minhaMusica = document.getElementById('minhaMusica');

function togglePlayPause() {
    var iconeMusica = document.getElementById('iconeMusica');

    // Alterna entre os ícones de play e pause
    if (tocando) {
        iconeMusica.classList.remove('fa-volume-xmark');
        iconeMusica.classList.add('fa-volume-high');
        minhaMusica.pause(); // Pausa a música
    } else {
        iconeMusica.classList.remove('fa-volume-high');
        iconeMusica.classList.add('fa-volume-xmark');
        minhaMusica.play(); // Inicia a música
    }

    // Inverte o estado de reprodução
    tocando = !tocando;
}

// Adiciona a propriedade loop para reprodução em loop
minhaMusica.loop = true;


function shareLink() {
    // URL que será compartilhada
    var url = 'https://daniellzera7.github.io/bandeiraquiz/';

    // Mensagem a ser compartilhada
    var mensagem = 'Eu te desafio a adivinhar os países pela bandeira! Clique: ' + url;

    // Verifica se o navegador suporta a API de compartilhamento
    if (navigator.share) {
        navigator.share({
            title: 'Desafio de Bandeiras',
            text: mensagem,
            url: url
        })
        .then(() => console.log('Link compartilhado com sucesso!'))
        .catch((error) => console.error('Erro ao compartilhar:', error));
    } else {
        // Fallback para navegadores que não suportam a API de compartilhamento
        alert('Não foi possível compartilhar. Por favor, copie o link e compartilhe manualmente: ' + url);
    }
}

