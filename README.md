# 🩺 API Busca Rápida Diagnóstico Clínico

Uma API inteligente e leve que permite buscas clínicas rápidas com auxílio da biblioteca fuzzy search (busca aproximada). Ideal para profissionais da saúde, pesquisadores e desenvolvedores que desejam uma base robusta de dados médicos para consultas rápidas.

---

## 🚀 Sobre o Projeto

A **API Busca Rápida Diagnóstico Clínico** foi criada com o objetivo de fornecer uma ferramenta ágil, moderna e funcional para pesquisar informações clínicas com base em **relatos de pacientes**, **sintomas**, **diagnósticos**, **causas**, **tratamentos** e **medicamentos**.

A API já vem integrada com mais de **808 registros clínicos** reais e prontos para serem consultados.

---

## 🧠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Fuse.js](https://fusejs.io/) – para fuzzy search (busca tolerante a erros)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [ESModules (ESM)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) com `import/export`

---

## 🗂️ Estrutura da API

```bash
📁 /dados
   └── dados.js        # Arquivo com os 808 registros clínicos
📁 /servico
   └── servico.js      # Lógica das buscas, incluindo fuzzy search
📁 /public
   └── index.html      # (Opcional) Frontend estático se necessário
📄 index.js            # Arquivo principal da API
📄 README.md
```

## 📑 GET /buscadiagnostico
Busca filtrada por múltiplos parâmetros.

Query Params:

relatoPaciente

sintomas

diagnostico

causas

tratamento

medicamento

pesquisa (fallback para trazer tudo)

## 🔍 Por que não usamos busca por ID?
A proposta da API é orientada à busca por texto livre, simulando a maneira como pacientes relatam seus sintomas ou médicos descrevem diagnósticos. Portanto, ID não é o foco da experiência de busca. Futuramente, suporte por ID poderá ser adicionado para funções administrativas ou específicas.

## 🌐 Permissões de Acesso
A API já vem com CORS habilitado, permitindo que você use em qualquer site, app ou sistema externo
```bash
# Exemplo de fetch:
fetch("https://seudominio.com/busca", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ pesquisa: "asma brônquica" })
});
```

## ⚠️ Tratamento de Erros
404 – Nenhum resultado encontrado

500 – Erro técnico interno

Validação básica de input incluída

## ✅ Status do Projeto
✔️ 100% funcional
📡 Pronto para deploy no Render, Vercel, ou qualquer outro serviço de hospedagem

## 🧭 Como Rodar Localmente
```bash
# Clone o projeto
git clone https://github.com/seuusuario/API_busca_diagnostico_clinicos.git

# Acesse a pasta
cd API_busca_diagnostico_clinicos

# Instale as dependências
npm install

# Rode a API
node index.js
```

## 📤 Deploy no Render
A API está pronta para ser hospedada no Render. Basta subir o projeto no GitHub e conectar no Render com:
```bash
Build Command: npm install

Start Command: node index.js

Environment: Node 20+

Public Web Service
```

## 💡 Diferenciais
> Busca fuzzy altamente precisa com Fuse.js

> Mais de 808 registros clínicos

> API pronta para frontend externo

> CORS habilitado

> Fácil manutenção e escalável


## ---

## 📝 Licença

```bash
Este projeto está licenciado sob os termos da licença **MIT**.

Você pode usá-lo, copiá-lo, modificá-lo, redistribuí-lo e até usá-lo em projetos comerciais, **desde que mantenha o aviso de copyright original**.

Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
```

## 👨‍💻 Autor
Desenvolvido por @Davi-Cyber-Security 💻
Entre em contato para parcerias ou dúvidas técnicas!
📸 Instagram: [@davipv_ofc](https://www.instagram.com/davipv_ofc/)
