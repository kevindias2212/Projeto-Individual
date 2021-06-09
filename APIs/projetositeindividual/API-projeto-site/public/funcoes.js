let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } else {
        nome_Usuario.innerHTML = nome_usuario;
        validar_sessao();
    }
    
}

function exibir_dados(){
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    nome_perfil.innerHTML = nome_usuario;

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function redirecionar_anuncio(){
    window.location.href = 'anuncio.html';
}

function redirecionar_colecao(){
    window.location.href = 'colecao.html';
}

function redirecionar_perfil(){
window.location.href = 'perfil.html';
}

function redirecionar_info(){
window.location.href = 'info.html';
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}