$(document).ready(() => {

    $('#documentacao').on('click', () => {
        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        })
    })

    $('#suporte').on('click', () => {
        $.get('suporte.html', data => {
            $('#pagina').html(data)
        })
    })

    $('#dashboard').on('click', () => {
        $.get('index.html', data => {
            $('body').html(data)
        })
    })

    $('#formulario').on('click', () => {
        $.get('formulario.html', data => {
            $('body').html(data)
        })
    })

    $('#btnSubmit').on('click', e => {
        e.preventDefault()


        let dados = $('#formRegister').serialize()
        console.log(dados)

        //ajax
        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: dados,
            dataType: 'json',
            success: dados => { console.log(dados) },
            error: erro => { console.log(erro) }
        })
    })


    //ajax
    $('#competencia').on('change', e => {

        let competencia = $(e.target).val()

        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,
            dataType: 'json',
            success: data => {
                $('#numeroVendas').html(data.numeroVendas)
                $('#totalVendas').html(data.totalVendas)
                $('#clientesAtivos').html(data.clienteAtivo)
                $('#clientesInativos').html(data.clienteInativo)
                $('#despesas').html(data.totalDespesa)
                $('#reclamacoes').html(data.totalReclamacao)
                $('#elogios').html(data.totalElogios)
                $('#sugestoes').html(data.totalSugestao)

                console.log(data)
            },
            error: error => { console.log(error) },
        })

        // metodo, url, dados, sucesso, erro
    })
})
