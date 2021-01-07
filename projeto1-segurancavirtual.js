function VerificarEntrada(){
    NomeConvidado= document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Alice', 'Felipe', 'Jamile', 'Jhonatan', 'Carol']
    if(ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText=
        'Você pode entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText=
        'Você não pode entrar!'
    }
}