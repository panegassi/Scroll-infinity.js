/**
 * Scroll Infinity
 * @author Leandro Panegassi <leandropanegassi89@gmail.com>
 *
 * Example:
 * <div id="infinity" data-infinity-url="infinity/news" data-infinity-limit="3" data-infinity-offset="3"></div>
 */

$(function () {

	/**
	 * @var int _window 	 | Altura da janela do usuario
	 * @var int _document	 | Altura da pagina inteira
	 * @var string _url 	 | URL que retornará os registros
	 * @var ['POST', 'GET']	 | Metodo de envio
	 * @var int _limit 		 | Limites de registros por requisicao
	 * @var int _offset		 | Trás os próximos resultados
	 * @var boolean _control | Para evitar que haja várias requisições desnecessárias
	 */

	var _window		= $(window).height();
	var _document 	= $(document).height();
	var _url 		= $('#infinity').data('infinity-url');
	var _method 	= 'POST';
	var _limit 		= $('#infinity').data('infinity-limit');
	var _offset 	= $('#infinity').data('infinity-offset');
	var _control 	= true;

	/**
	 * Inicializo as mensagens de retorno ocultas
	 */
	$('.infinity-load').css('display', 'none');
	$('.infinity-finish').css('display', 'none');

	$(window).scroll(function() {
		if (_control && ($(window).scrollTop() >= ( _document - _window ) - 150))
			$('#infinity').trigger('click');
	});

	$('#infinity').on('click', function() {
		$.ajax({
			url: _url,
			type: _method,
			async: false,
			cache: false,
			dataType: 'json',
			data: { 
				limit: _limit,
				offset: _offset
			},
			beforeSend: function() {
				$('.infinity-load').css('display', 'block');
			}
		}).done(function(json) {
			if (json['status'] == false) {
				_control = false;
				$('.infinity-finish').css('display', 'block');
			} else {
				_offset += _limit;
				$('#infinity').attr('data-infinity-offset', _offset);
				$('#infinity').append(json['html']);
			}
			$('.infinity-load').css('display', 'none').delay(8000);
		});
	});
});