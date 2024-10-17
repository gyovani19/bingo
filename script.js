const problemas = [
    "DISPONIBILIDADE",
    "COMUNICAÇÃO FALHA",
    "FALTA DE COMPROMETIMENTO",
    "FALTA DE PLANEJAMENTO",
    "PESSOAS PARADAS",
    "PROJETOS DEIXADOS DE LADO",
    "FALTA DE CLAREZA COM O OBJETIVO DE DIRETORIAS",
    "DIRETORES AUSENTES",
    "FALTA DE PROATIVIDADE",
    "FALTA DE TRABALHO DE EQUIPE",
    "PLANEJAMENTO EM EXCESSO EM PROJETOS",
    "FALTA PROMOÇÃO DA LIGA",
    "FALTA DE UM ACOMPANHAMENTO INDIVIDUAL",
    "FALTA DE UM PADRÃO DE SEGUIMENTO DENTRO DOS PROJETOS",
    "BALANCEAMENTO DE INTEGRANTES/DEMANDAS PARA AS DIRETORIAS",
    "FALTA DA BASE E DIFUSÃO DE CONHECIMENTO DE FORMA INDEPENDENTE NO NIVELAMENTO",
    "FALTA DE DELIMITAÇÃO DE CARGOS DENTRO DOS PROJETOS",
    "AUSÊNCIA DA PRESENÇA DA LAWD EM AMBIENTE EXTERNO À LIGA",
    "SOBRECARGA DE FUNÇÕES NA PRESIDÊNCIA",
    "PRÁTICAS TARDIAS EM ALGUNS PROJETOS GERAM DESENGAJAMENTO",
    "AUSÊNCIA DE UMA METODOLOGIA E PLANEJAMENTO ESTRATÉGICO PADRONIZADA/FORMA DE DISTRIBUIÇÃO DE TAREFAS",
    "CENTRALIZAÇÃO DE RESPONSABILIDADES",
    "FALTA DE CLAREZA SOBRE SITUAÇÃO DE PROJETOS E DIRETORIAS",
    "INATIVIDADE DE MEMBROS - FALTA DE ENGAJAMENTO",
    "FALTA DE BALANCEAMENTO DE PESSOAS COM DISPONIBILIDADE ALTA X BAIXA",
    "NECESSIDADE DE MAIOR ORGANIZAÇÃO PRÉVIA PARA EVENTOS",
    "BAIXA DISPONIBILIDADE DOS MEMBROS",
    "CAPACITAÇÃO DOS MEMBROS",
    "MONOTONIA DE ATIVIDADES"
];

  
  let sorteados = [];
  
  document.getElementById("sortear").addEventListener("click", function() {
      if (problemas.length === 0) {
          document.getElementById("problema-sorteado").innerText = "Todos os problemas já foram sorteados!";
          return;
      }
  
      const indice = Math.floor(Math.random() * problemas.length);
      const problemaSorteado = problemas[indice];
      
      // Adiciona o problema sorteado à lista
      sorteados.push(problemaSorteado);
      document.getElementById("lista-sorteados").innerHTML += `<li>${problemaSorteado}</li>`;
  
      // Remove o problema do array de problemas
      problemas.splice(indice, 1);
      
      document.getElementById("problema-sorteado").innerText = problemaSorteado;
  });
  
const button = document.getElementById('sortear');
const globo = document.querySelector('.roleta-imagem');

button.addEventListener('click', () => {
    // Adiciona a classe de rotação
    globo.classList.add('girar');

    // Remove a classe após a animação para permitir que a animação seja reaplicada
    setTimeout(() => {
        globo.classList.remove('girar');
    }, 1000); // Duração deve ser igual à da animação no CSS
});
