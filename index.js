// Importando pacotes necessários para o funcionamento do sistema de busca
import express from 'express';
import cors from 'cors';
import { buscaTotal, buscaID, buscarCausa, buscarDiagnostico, buscarMedicamento, buscarRelatoPaciente, buscarSintomas, buscarTratamento, buscaCompleta } from './servico/servico.js';


// Declarando as funções de configuraçõs do sistema
const app = express();
app.use(cors()); // Adicionando a função para aceitar novas requisições de outros domínios
const PORT = process.env.PORT || 8080;


// Declarando que o servidor vai aceitar requisições do tipo json e urlencoded
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public')); // Aceitando modelos html e css
app.use(express.json()); // Aceitando json


// Abrindo uma endpoint para receber a requisição post do fuse.js
app.post('/busca', (req, res) => {
    const termo = req.body.pesquisa;
    
    try{
        const resultado = buscaCompleta(termo);
        if(resultado.length > 0){
            return res.status(200).json(resultado);
        }
        return res.status(404).json({message: "Nenhum resultado encontrado. Verifique se as informações foram inseridas corretamente."});   
    }  catch(e){
        console.log(`🔴Ouve um erro no servidor ${e}`);
        res.status(500).json({message: `Ouve um erro técnico. Tente novamente mais tarde.`});
    }
})

// Outra endpoint para receber requisições normais de get. Ou seja, ele vai receber os parâmetros diretamente na URL
app.get('/buscadiagnostico', (req, res) => {

    const{pesquisa, relatoPaciente, sintomas, diagnostico, causas, tratamento, medicamento, busca} = req.query;
    // Adicionando tratamento de exceções
    try{
    const buscas =[
        ...(relatoPaciente ? buscarRelatoPaciente(relatoPaciente) : []),
        ...(sintomas ? buscarSintomas(sintomas) : []),
        ...(diagnostico ? buscarDiagnostico(diagnostico) : []),
        ...(causas ? buscarCausa(causas) : []),
        ...(tratamento ? buscarTratamento(tratamento) : []),
        ...(medicamento ? buscarMedicamento(medicamento) : []),
    ]
    if(buscas.length > 0){
       return res.status(200).json(buscas);
    } 
    
    const resultado = buscaTotal();
    if(resultado.length > 0){
       return res.status(200).json(resultado);
    }
    
    return res.status(404).json({message: "Busca inválida. Verifique se as informações foram inseridas corretamente."});
} catch(e){
    console.log(`🔴Ouve um erro no servidor ${e}`);
    res.status(500).json({message: `Ouve um erro técnico. Tente novamente mais tarde.`});
}
    
});


// Escutando o servidor na porta definida!
app.listen(PORT, () =>{
    const data = new Date();
    console.log(`🟢 Servidor em node.js iniciado em: ${data.toLocaleDateString()} às ${data.toLocaleTimeString()}`);
})
