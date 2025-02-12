const Personagens {
    constructor(nome, poderes) {
        this.nome = nome;
        this.poderes = poderes;
    },

    mostrar(){
        console.log(nome, poderes);
    },
}

const Loki = new Personagens("Loki", "Deus da trapacia");
Loki.mostrar();