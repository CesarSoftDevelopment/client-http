let div = document.getElementById('errors');
let body = document.getElementById('corpo-pagina');
let divPrincipal = document.getElementById('divPrincipal');

let endpointMercadoLivre = 'https://api.mercadolibre.com';

body.onload = function() {

    // criar elementos span
    let span = document.createElement('span');
        
    let error = '';
    let textPreco = '';
    let descricaoProduto = '';
    let textCarrinho = '';

    axios.get(`${endpointMercadoLivre}/sites/MLB/search?category=MLB271599`)
        .then(function(response){
            let arrayRetornoWS = response.data.results;
            console.log(arrayRetornoWS);
        // 8 - verificar se o produto tem o link da imagem 
        if(arrayRetornoWS.thumbnail !== null) {

        for(let i = 0; i < arrayRetornoWS.length; i++ ) {

        // criar elementos html
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let img = document.createElement('img');
        let titulo = document.createElement('h5');
        let descricao = document.createElement('p');
        // let button = document.createElement('a');

        // atribuição as divs
        div1.setAttribute('class', 'card h-100');
        div2.setAttribute('class', 'card-body');
        div3.setAttribute('class', 'col mb-4');

        // atribuição aos elementos que irão dentro das divs
        img.setAttribute('src', arrayRetornoWS[i].thumbnail);
        img.setAttribute('alt', arrayRetornoWS[i].title);
        img.setAttribute('width', '125px');
        img.setAttribute('height', '125px');
        // img.setAttribute('class', 'card-img-top');
        titulo.setAttribute('class', 'card-title');
        descricao.setAttribute('class', 'card-text');
        // button.setAttribute('class', 'btn btn-primary');

        // setar textos para os elementos
        textPreco = document.createTextNode(`R$ ${arrayRetornoWS[i].price}`)
        descricaoProduto = document.createTextNode(arrayRetornoWS[i].title);
        textCarrinho = document.createTextNode('Adicionar ao carrinho');
        
        // adicionar os textos nos elementos
        titulo.appendChild(textPreco);
        descricao.appendChild(descricaoProduto);
        // button.appendChild(textCarrinho);


        // setar valores para as divs
        div1.appendChild(img);
        div2.appendChild(titulo);
        div2.appendChild(descricao);
        // div2.appendChild(button);
        div1.appendChild(div2);
        div3.appendChild(div1);
        divPrincipal.appendChild(div3);
        body.appendChild(divPrincipal);
        }
        
    }else {
        error = document.createTextNode(`Não encontrei imagem para esse produto`);
        span.appendChild(error);
        div.appendChild(span);
        }
    })

    .catch(function(error){
        error = document.createTextNode(`O serviço falhou em fazer requisição ao servidor`);
        span.appendChild(error);
        div.appendChild(span);
    })

}