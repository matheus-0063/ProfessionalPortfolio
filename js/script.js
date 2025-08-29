let our_services = [
    {
        'title': 'Donuz',
        'text': 'Meu primeiro estágio em desenvolvimento foi onde tive contato com o C# e iniciei minha trajetória profissional.\n' +
            '                        A empresa atuava no segmento de fidelização de clientes, o que me proporcionou experiência prática no\n' +
            '                        desenvolvimento de soluções voltadas para esse mercado.',
    },
    {
        'title': 'I2Tech',
        'text': 'Meu segundo estágio, onde atuei por aproximadamente um ano, foi um período em que aprofundei ainda mais meus conhecimentos em C# .NET e ' +
            'arquitetura MVC. A empresa era voltada para soluções digitais, desenvolvendo sistemas para diversas empresas de pequeno e médio porte.',
    },
    {
        'title': 'Mei Digital',
        'text': 'Atualmente atuo como Desenvolvedor de Software Júnior III, onde aperfeiçoei meus conhecimentos no desenvolvimento e manutenção de sistemas robustos, ' +
            'com foco em arquitetura organizada e escalável. A MEI Digital é uma empresa especializada em assessoria para Microempreendedores Individuais (MEI), ' +
            'oferecendo serviços completos para apoiar e facilitar a gestão do MEI.',
    }
];

let div_Atual = 0;

function atualizarServico() {
    document.getElementById("service-title").innerHTML = our_services[div_Atual].title;
    document.getElementById("service-text").innerHTML = our_services[div_Atual].text;
}

document.getElementById("service-next").addEventListener("click", function () {
    div_Atual = (div_Atual + 1) % our_services.length;
    atualizarServico();
});

document.getElementById("service-previous").addEventListener("click", function () {
    div_Atual = (div_Atual - 1 + our_services.length) % our_services.length;
    atualizarServico();
});