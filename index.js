$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp();
    })

    //Add new img in the list 'li'
    $('form').on('submit', function(e) {
        e.preventDefault();
        const adressTheNewImage = $('#adress-new-img').val();
        const newItem = $('<li style="display: none;"></li>');
        $(`<img src="${adressTheNewImage}" />`).appendTo(newItem);
        $(`
            <div class="overlay-image-link">
                <a href="${adressTheNewImage}" target="_blank" title="Ver imagem em tamaho real" >
                    Ver imagem em tamanho real 
                </a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#adress-new-img').val('')
    })
})