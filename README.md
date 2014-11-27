scroll-infinity.js
==================

Simples script para conteúdos com rolagem infinita ( notícias, depoimentos, mural de recados )<br />
Para utilizar basta criar um elemento HTML com o ID "infinity" + atributos "data-" que serão utilizados como parâmetros ( data-infinity-url="", data-infinity-limit="", data-infinity-offset="" )

 * Example:
 
<div id="infinity" data-infinity-url="infinity/news" data-infinity-limit="3" data-infinity-offset="3"></div>
<div class="infinity-load">
    <span>Carregando mais notícias</span>
</div>

<div class="infinity-finish">
    <span>Não temos mais vagas para esta categoria</span>
</div>

/**
 * @var int _window       | Altura da janela do usuario
 * @var int _document     | Altura da pagina inteira
 * @var string _url       | URL que retornará os registros
 * @var ['POST', 'GET']   | Metodo de envio
 * @var int _limit        | Limites de registros por requisicao
 * @var int _offset       | Trará os próximos resultados
 * @var boolean _control  | Para evitar que haja várias requisições desnecessárias
 */
