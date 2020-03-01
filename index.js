const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http
    .createServer((req, res) => {
            // quando faço requisição no navegador
            res.writeHead(200, {
                "Content-Type": "text/plain; charset=UTF-8"
            });
            let urlCompleta = url.parse(req.url, true);
            let queryString = urlCompleta.query; // parametros
            let rota = urlCompleta.pathname; // ex: pets/add

            // console.log(queryString);

            switch (rota) {
                case "/pets":
                    let conteudo = petshop.listarPets();
                    if (conteudo.length > 0) {
                        res.write(conteudo);
                    } else {
                        res.write("Nenhum pet cadastrado :(");
                    }
                    break;
                    case "/pets/add":
            let petNovo = queryString;
            petshop.adicionarPet(petNovo)
            res.write(`${petNovo.nome} foi adicionado(a) com sucesso!`)
            break;
            case "/pets/buscar":
        let nomePet = queryString.nome;
        let petsEncontrados = petshop.buscarPet(nomePet);
        if (petsEncontrados.length > 0) {
          res.write(
            `Encontramos ${petsEncontrados.length} pets com o nome ${nomePet}`
          );
        } else {
          res.write("Ops, nenhum pet cadastrado com esse nome!");
        };
        break;
       case "/pets/servicos/banho":
        let amigo = queryString.nome;
        petshop.darBanho(amigo);
        res.write(`${amigo} está de banho tomado!`);
        break;
        case "/pets/servicos/tosa":
        let amiguinho = queryString.nome;
        petshop.tosar(amiguinho);
        res.write(`${amiguinho} está tosado(a)!`);
        break;
        case "/pets/servicos/consulta":
        let amiguinho2 = queryString.nome;
        petshop.consultar(amiguinho2);
        res.write(`${amiguinho2} passou pelo veterinário!`);
        break;
        case"/pets/atendimento":
        let nomeDoPet =queryString.nome;
        petshop.atenderPet(nomeDoPet)
        res.write(`${nomeDoPet} seja bem-vindo(a)`);
        res.write(`Pagamento efetuado com sucesso!`);
        res.write(`Volte sempre!`);
        break;
        case "/pets/vacinar":
        let nomedoPet = queryString.nome;
        let encontro = petshop.vacina(nomedoPet)
        if(encontro>0){
            res.write(`${nomedoPet} foi vacinado com sucesso!`)
        }else{
            res.write(`ooops... seu pet já está vacinado!`)
        }
        break;
        }
                    res.end();
    })

        .listen(3000, "localhost", () => {
            // quando ligo servidor
            console.log("Servidor rodando :)");
        });
    
    