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

    //ajax
    $('#competencia').on('change', e => {

        const competencia = $(e.target).val()

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
