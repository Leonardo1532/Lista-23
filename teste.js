/*
1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.
*/
let continuar = "s"
let nomes = []
let senhas = []
let contador = 0


function Cadastrar() {
    let nome = prompt("Insira um nome")
    let senha = prompt("Insira uma senha")
    nomes[contador] = nome
    senhas[contador] = senha
}


/*
2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.
*/
function Solicitar() {
    let opcao = prompt("Insira oque deseja executar!  Cadastrar(1), Fazer Login(2), Excluir um Cadastro(3), Encerrar o Programa(4)")
    return opcao
}





/*
3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.
*/

function Login(nomefuncao, senhafuncao) {
    if (nomes.includes(nomefuncao)) {
        let index = nomes.indexOf(nomefuncao)
        if (senhas[index] == senhafuncao) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }



}



/*
4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.
*/

let nomeSup = []
let senhaSup = []
let indexSup = []


function ExluirCadastro(nomeExcluir) {
    if (nomes.includes(nomeExcluir)) {
        let index = nomes.indexOf(nomeExcluir)
        nomes[index] = 0
        senhas[index] = 0

    }
    nomes.forEach(x => {
        let index = nomes.indexOf(x)
        if (x != 0) {
            nomeSup[indexSup] = nomes[index]
            senhaSup[indexSup] = senhas[index]
            indexSup++
        }
    })

    nomes = nomeSup
    senhas = senhaSup
}


/*
5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!”
*/


while (continuar == "s") {

    let opcao = Solicitar()

    switch (opcao) {
        case "1":
            Cadastrar()
            console.log("Cadastrado com sucesso")
            break;

        case "2":
            let nomefuncao = prompt("Insira um nome para LOGIN")
            let senhafuncao = prompt("Insira uma senha para LOGIN")
            Login(nomefuncao, senhafuncao)
            console.log("Login feito com sucesso")
            break;

        case "3":
            let nomeExcluir = prompt("Insira um nome para excluir um cadastro")
            ExluirCadastro(nomeExcluir)
            console.log("Cadastro Excluido com sucesso")
            break;

        case "4":
            continuar = "n"
            break;

        default:
            console.log("Opção INVÁLIDA")
            break;
    }

    if (continuar == "s") {
        let desejaContinuar = prompt("Deseja continuar fazendo execuções  s ou n")
        switch (desejaContinuar) {
            case "n":
                continuar = "n"
                break;
        }
    }
}



