import Fuse from 'fuse.js';
import {dados as dados} from '../dados/dados.js';

const fuse = new Fuse (dados, {
    includeScore: true,
    keys: ['relatoPaciente', 'diagnostico', 'sintomas', 'causas', 'tratamento', 'medicamento'],
    threshold: 0.4,
});

export function buscaTotal() {
    return dados;
};

export function buscaCompleta(pesquisa){
    const resultado = fuse.search(pesquisa);
    return resultado.map(res => res.item);
}

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

export function buscaID(id){
    const verificador = parseInt(id);
    return dados.find(dados => dados.id === verificador);
}