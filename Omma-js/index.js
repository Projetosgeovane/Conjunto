const NOME_EMPRESA = 'Omma Company'
console.log(`Olá, bem vindo a ${NOME_EMPRESA}!!! \n`)


const listaDeReceitas = [
    {
        id: 1,
        titulo: "Hamburguer",
        dificuldade: "fácil",
        ingredientes: ["1 pão", "1 folha de alface", "3 rodelas de tomate italiano", "1 hamburguer"],
        preparo: "No site da Omma",
        link: "www.chefreceitas.com",
        vegano: false
    },
]


const cadastrarReceitas = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano
    }
    listaDeReceitas.push(novaReceita)
    console.log("Cadastro executado com sucesso!!! \n")
}

cadastrarReceitas(

    2,
    "Hamburguera",
    "fácil",
    ["2 pão", "1 folha de alface", "3 rodelas de tomate italiano", "1 hamburguer"],
    "No site da Omma",
    "www.chefreceitas.com",
    false
)

const exibirReceitas = () => {
    for (let i = 0; i < listaDeReceitas.length; i++) {
        console.log(`titulos: ${listaDeReceitas[i].titulo}`);
        console.log(`ingredientes: ${listaDeReceitas[i].ingredientes}`);
        console.log(`receita vegana: ${listaDeReceitas[i].vegano} \n`)
    }
}



const deletarReceita = (id) => {
    for (let i = 0; i < listaDeReceitas.length; i++) {
        if (id === listaDeReceitas[i].id) {
            console.log(`receita ${listaDeReceitas[i].titulo} deletada`);
            listaDeReceitas.splice(i, 1);
            return
        }
    }

    console.log("Receita não encontrada!!!");
}

// deletarReceita(1);

const atualizarReceita = (id, receitaAtualizada) => {
    let foiAtualizado = false;

    listaDeReceitas.forEach(receita => {
        if (receita.id != id) {
            return;
        }

        if (receitaAtualizada.titulo) {
            receita.titulo = receitaAtualizada.titulo;
        }
        if (receitaAtualizada.dificuldade) {
            receita.dificuldade = receitaAtualizada.dificuldade;
        }

        if (receitaAtualizada.ingredientes) {
            receita.ingredientes = receitaAtualizada.ingredientes;
        }
        if (receitaAtualizada.preparo) {
            receita.preparo = receitaAtualizada.preparo;
        }
        if (receitaAtualizada.link) {
            receita.link = receitaAtualizada.link;
        }
        if (receitaAtualizada.vegano) {
            receita.vegano = receitaAtualizada.vegano;
        }

        console.log("Receita atualizada com sucesso!!!")
        foiAtualizado = true;
    });

    if (!foiAtualizado) {
        console.log("Não foi encontrado o id da receita informada!!!")
    }
};


const buscarReceita = termoBuscado => {
    const resultados = listaDeReceitas.filter(
        (receita) =>
            receita.titulo.includes(termoBuscado)
    );


    if (!resultados.length) {
        console.log("Não foi encontrado receitas!!!");
    }
    return console.log(resultados);
};

buscarReceita("a");




