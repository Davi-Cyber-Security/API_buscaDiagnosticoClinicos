// Importando as bibliotecas necessárias para o funcionamento do sistema de busca com fuse.js
import Fuse from 'fuse.js';
import {dados as dados} from '../dados/dados.js';

// Declarando as opções de configuração do fuse.js. Ou seja, estamos utilizando 0.4 como threshold, o que significa que a busca será mais flexível, permitindo resultados com uma certa margem de erro. Facilitando a busca por palavras-chave em várias chaves do objeto de dados, como relatoPaciente, diagnostico, sintomas, causas, tratamento e medicamento.
const fuse = new Fuse (dados, {
    includeScore: true,
    keys: ['relatoPaciente', 'diagnostico', 'sintomas', 'causas', 'tratamento', 'medicamento'],
    threshold: 0.4,
});


// Função de buscar e trazer todos os dados (informações) do arquivo dados.js
export function buscaTotal() {
    return dados;
};

// Função de pesquisa completa que utiliza o fuse.js para buscar informações com base no termo de pesquisa fornecido. Ela retorna um array de objetos que correspondem ao termo pesquisado.
export function buscaCompleta(pesquisa){
    const resultado = fuse.search(pesquisa);
    return resultado.map(res => res.item);
}

// O restante abaixo são funções específicas de busca. Utilizado para a opção de selecionar.
export function buscarRelatoPaciente (B){
    return dados.filter(busca => busca.relatoPaciente.toLowerCase().includes(B.toLowerCase()));
}

export function buscarDiagnostico (D){
    return dados.filter(busca => busca.diagnostico.toLowerCase().includes(D.toLowerCase()));
}

export function buscarSintomas (S){
    return dados.filter(busca => busca.sintomas.toLowerCase().includes(S.toLowerCase()));
};

export function buscarCausa (C){
    return dados.filter(busca => busca.causas.toLowerCase().includes(C.toLowerCase()));
}

export function buscarTratamento (T){
    return dados.filter(busca => busca.tratamento.toLowerCase().includes(T.toLowerCase()));
}

export function buscarMedicamento (M){
    return dados.filter(busca => busca.medicamento.toLowerCase().includes(M.toLowerCase()));
}

// Função de busca por ID
export function buscaID(id){
    const verificador = parseInt(id);
    return dados.find(dados => dados.id === verificador);
}