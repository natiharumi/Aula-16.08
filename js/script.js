$(document).ready(function() {

    //Monitorar o click do botao #send do formulario
    $('#send').click(function(e) {
        e.preventDefault()

        //criar as variaveis que guardarão os dados digitados
        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var frase = 'Olá ' + nome + ', sua idade é: ' + idade


        $('#NOME').val('')
        $('#IDADE').val('')

        $('#mensagem').append(frase)
    })

    //monitorar quando o cursor estiver dentro do campo #NOME
    $('#NOME').focusin(function() {
        $('#mensagem').empty()
    })

    //2 PARTE

    $('p').hide()

    $('#btn-resumo').click(function(e){
        e.preventDefault()

        //criar uma variavel para receber o status
        let status = $(this).attr('data-status')

        $('#btn-resumo').empty()

        if(status == '1'){
           $('#btn-resumo').append('Esconder resumo')
           $('#btn-resumo').attr('data-status', '2')
       }
        else{
           $('#btn-resumo').append('Ver resumo')
           $('#btn-resumo').attr('data-status', '1')
       }
        

        $('p').toggle(2000)
    })
   

})