
let btn = document.getElementById('btn');
let div = document.getElementById('app');

btn.onclick = function() {
    // limpar a div
    div.innerHTML = '';

    // criar span
    let spanNome = document.createElement('span');

    // criar textNome
    let textNome = '';

    // recuperar o input
    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value;
    
    // limpando o input
    github_user.value = '';

    // 1 - passar o método => GET, PUT, POST, DELETE
    axios.get(`https://api.github.com/users/${user}`)
        // quando estiver pronto execute => then = sucesso | catch = falha
        .then(function(response){
            if(response.data.name !== null) {
                textNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.nome);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else {
                textNome = document.createTextNode('O usuário não possui nome');
            }
            // adiciona o conteúdo na div
            spanNome.appendChild(textNome);
            div.appendChild(spanNome);

        })

        .catch(function(error){
            textNome = document.createTextNode('Não foi possível realizar a requisição.');
            // adiciona o conteúdo na div
            spanNome.appendChild(textNome);
            div.appendChild(spanNome);
        });
};