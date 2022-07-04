document.getElementById('form').addEventListener('submit', function (e){
    e.preventDefault();
    document.getElementById('tabela-detalhes').classList.remove('d-none');

    document.getElementById('nomet').value = document.getElementById('nome').value;
    document.getElementById('sobrenomet').value = document.getElementById('sobrenome').value;
    document.getElementById('emailt').value = document.getElementById('email').value; 
    document.getElementById('logint').value = document.getElementById('login').value;
    document.getElementById('senhat').value = document.getElementById('senha').value; 
    document.getElementById('cept').value = document.getElementById('cep').value; 
    document.getElementById('cidadet').value = document.getElementById('cidade').value; 
    document.getElementById('estadot').value = document.getElementById('estado').value; 
    document.getElementById('enderecot').value = document.getElementById('endereco').value; 
    document.getElementById('complementot').value = document.getElementById('complemento').value; 
    document.getElementById('bairrot').value = document.getElementById('bairro').value; 
    document.getElementById('githubt').value = document.getElementById('github').value; 
    document.getElementById('academiat').value = document.getElementById('academia').option; 
    document.getElementById('professort').value = document.getElementById('professor').value;   
    
    console.log('Cadastro efetuado!');
});

document.getElementById('nome').addEventListener('keyup', gerarLogin);
document.getElementById('sobrenome').addEventListener('keyup', gerarLogin);

function gerarLogin(){
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;

    const login = nome+"."+sobrenome;
    document.getElementById('login').value = login.toLowerCase();
}