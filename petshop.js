const pets = [{
    nome: "Mel",
    tipo: "cão",
    raça: "maltês",
    idade: 10,
    genero: "fêmea",
    vacinado: false,
    serviços: ["banho"],

},
{
    nome: "Billy",
    tipo: "cão",
    raça: "Cocker",
    idade: 7,
    genero: "macho",
    vacinado: false,
    serviços: ["banho", "tosa", "veterinário"]

},
{
    nome: "Simba",
    tipo: "gato",
    raça: "vira-lata",
    idade: 2,
    genero: "macho",
    vacinado: false,
    serviços: ["banho", "tosa", "veterinário"]

},
{
    nome: "Chloe",
    tipo: "cão",
    raça: "poodle",
    idade: 6,
    genero: "fêmea",
    vacinado: true,
    serviços: ["banho", "tosa", "veterinário"]
}
];


const listarPets = () => {
    let conteudo = "";
    for(iterador of pets){
        conteudo += `
    _________________
    Nome: ${iterador.nome}
    Tipo: ${iterador.tipo}
    Raça: ${iterador.raça}
    Idade:${iterador.idade}
    Gênero:${iterador.genero}
    Vacinado:${iterador.vacinado?"Sim":"Não"}
    Serviços: ${iterador.serviços}
    `;
 }
 return conteudo;
    
}



// função adicionar animal
const adicionarPet = petNovo => {
      pets.push(petNovo);
        } 



const buscarPet = nome => {
    let encontrados = pets.filter(function(callback){
    return callback.nome== nome;
    });
    return encontrados;
}

const darBanho = amigo => {
    let encontrar = pets.find(function(callback){
        return callback.nome ==amigo
    });
    encontrar.serviços.push("Banho")
        
    };

    const tosar = amigo => {
        let encontrar = pets.find(function(callback){
            return callback.nome ==amigo
        });
        encontrar.serviços.push("Tosa")
            
        };
        const consultar = amigo => {
            let encontrar = pets.find(function(callback){
                return callback.nome ==amigo
            });
            encontrar.serviços.push("veterinário")
                
            };


   
            const atenderPet = amigo=>{
            let achar = pets.filter(function(callback){
                return callback.nome==amigo;
            });
            let pagar= () =>{
                return achar.serviços
            };

            pagar();
               
         };

        const vacina = amigo=>{
        let array=[];
        let achar =pets.find(function(callback){
            return callback.nome==amigo
        })
        if(!achar.vacinado){
            achar.vacinado=true;
            array.push(amigo)
        };
        return array.length;
    };

    

   
    
       

module.exports = {listarPets,adicionarPet,buscarPet,
                darBanho,tosar,consultar,atenderPet,vacina}

