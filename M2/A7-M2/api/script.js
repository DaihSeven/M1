//Uma **API (Application Programming Interface)** em JavaScript é uma maneira de se comunicar com serviços externos para enviar ou receber dados. Em aplicações web, as APIs são amplamente usadas para **conectar o frontend ao backend** e acessar informações de bancos de dados, serviços de terceiros, ou outras funcionalidades remotas.

//### Conceitos Básicos

//1. **API**: Uma interface que permite a comunicação entre sistemas diferentes.
//2. **RESTful API**: O estilo mais comum de API na web. APIs RESTful usam HTTP para realizar operações como obter, enviar, atualizar e deletar dados.
//3. **JSON**: O formato de dados mais comum para APIs web. JSON (JavaScript Object Notation) é uma estrutura leve e fácil de ler para armazenar e transportar dados.

//### Como Fazer Requisições a uma API em JavaScript

//Para fazer requisições a uma API, JavaScript fornece diversas opções, como:
//- **XMLHttpRequest**: Método tradicional, mas menos usado hoje em dia.
//- **Fetch API**: Método moderno e mais fácil de usar, baseado em Promises
/*
- **Axios**: Biblioteca popular para simplificar requisições (é uma biblioteca externa).

#### Exemplo 1: Requisição Usando `fetch`

A **Fetch API** é uma maneira moderna e simples de realizar requisições HTTP. Ela retorna uma `Promise`, permitindo que o código lide com o resultado de forma assíncrona.

Aqui está um exemplo básico de como usar `fetch` para fazer uma requisição `GET` e obter dados de uma API pública.
*/

// URL de uma API pública que retorna dados de usuários
const url = "https://jsonplaceholder.typicode.com/users";

// Função que faz uma requisição GET para obter dados
async function obterUsuarios() {
    try {
        // Fazer a requisição
        const resposta = await fetch(url);

        // Verificar se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error("Erro na requisição: " + resposta.status);
        }

        // Converter a resposta para JSON
        const dados = await resposta.json();

        // Exibir os dados no console
        console.log("Usuários:", dados);
    } catch (erro) {
        // Capturar e exibir qualquer erro que ocorrer na requisição
        console.error("Erro ao obter dados:", erro.message);
    }
}

// Chamar a função
obterUsuarios();
/*
#### Explicação do Código

1. **URL**: Define o endereço da API que queremos acessar.
2. **Função `obterUsuarios`**: Usa `async` para lidar com a natureza assíncrona da requisição.
3. **Requisição com `fetch`**: Faz uma requisição `GET` para a URL. Se a resposta for bem-sucedida (`resposta.ok`), ela é convertida para JSON.
4. **Tratamento de Erros**: Se algo der errado, como um erro de rede, o bloco `catch` captura o erro e exibe uma mensagem.

### Métodos HTTP Comuns em APIs

Em uma API RESTful, os métodos HTTP mais comuns são:

- **GET**: Obter dados (ex.: obter uma lista de usuários).
- **POST**: Enviar dados para o servidor (ex.: criar um novo usuário).
- **PUT** ou **PATCH**: Atualizar dados no servidor (ex.: atualizar informações de um usuário).
- **DELETE**: Remover dados (ex.: deletar um usuário).

### Exemplo 2: Enviar Dados com `POST`

Aqui está um exemplo de como enviar dados para uma API usando uma requisição `POST`. Vamos supor que queremos enviar os dados de um novo usuário.
*/

const urlPost = "https://jsonplaceholder.typicode.com/users";

// Função para criar um novo usuário
async function criarUsuario(usuario) {
    try {
        // Fazer a requisição POST
        const resposta = await fetch(urlPost, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario) // Converte o objeto para JSON
        });

        // Verificar se a requisição foi bem-sucedida
        if (!resposta.ok) {
            throw new Error("Erro na requisição: " + resposta.status);
        }

        // Obter a resposta JSON com os dados do usuário criado
        const dados = await resposta.json();
        console.log("Usuário criado:", dados);
    } catch (erro) {
        console.error("Erro ao criar usuário:", erro.message);
    }
}

// Dados do novo usuário
const novoUsuario = {
    nome: "João da Silva",
    email: "joao.silva@example.com",
    telefone: "123-456-7890"
};

// Chamar a função passando o novo usuário
criarUsuario(novoUsuario);

/*
#### Explicação do Código

1. **URL e Função**: Define a URL da API e a função `criarUsuario`, que recebe o objeto `usuario`.
2. **Configuração da Requisição**:
   - `method`: Define o método HTTP como `POST`.
   - `headers`: Especifica que o conteúdo é JSON, indicando ao servidor como interpretar os dados.
   - `body`: Converte o objeto `usuario` em uma string JSON antes de enviar.
3. **Resposta JSON**: A resposta é transformada em JSON e exibida no console, mostrando o objeto criado.

### Como Usar a Resposta da API no Código

Em vez de apenas exibir os dados no console, você pode usá-los para atualizar o DOM, exibir uma lista de itens, ou mesmo criar gráficos.

Exemplo de exibição de dados na página:

*/
async function mostrarUsuarios() {
    try {
        const resposta = await fetch(url);
        const usuarios = await resposta.json();

        // Seleciona o elemento onde os dados serão exibidos
        const listaUsuarios = document.getElementById("lista-usuarios");

        // Itera sobre os usuários e cria elementos para cada um
        usuarios.forEach(usuario => {
            const item = document.createElement("li");
            item.textContent = `Nome: ${usuario.name} | Email: ${usuario.email}`;
            listaUsuarios.appendChild(item);
        });
    } catch (erro) {
        console.error("Erro ao obter usuários:", erro.message);
    }
}

mostrarUsuarios();
/*
Este código faz a mesma requisição `GET`, mas agora exibe os dados em uma lista na página HTML:
*/

<ul id="lista-usuarios"></ul>

/*
### Bibliotecas Externas (Opcional)

Para facilitar o trabalho com APIs, existem bibliotecas como o **Axios**. Ele tem uma sintaxe simplificada para requisições HTTP e tratamento de erros mais fácil:

*/
// Exemplo de requisição com Axios
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("Dados recebidos:", response.data);
    })
    .catch(error => {
        console.error("Erro ao obter dados:", error.message);
    });
/*

### Resumo

As APIs em JavaScript são usadas para se comunicar com serviços externos, permitindo que o frontend troque dados com o backend ou serviços de terceiros. O método `fetch` é amplamente usado para fazer requisições HTTP assíncronas de forma eficiente, permitindo operações como `GET`, `POST`, `PUT` e `DELETE`.
*/