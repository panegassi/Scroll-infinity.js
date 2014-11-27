scroll-infinity.js
==================

Simples script para conteúdos com rolagem infinita ( notícias, depoimentos, mural de recados )<br />
Para utilizar basta criar um elemento HTML com o ID "infinity" + atributos "data-" que serão utilizados como parâmetros ( data-infinity-url="", data-infinity-limit="", data-infinity-offset="" )

/**
 * @var int _window       | Altura da janela do usuario
 * @var int _document     | Altura da pagina inteira
 * @var string _url       | URL que retornará os registros
 * @var ['POST', 'GET']   | Metodo de envio
 * @var int _limit        | Limites de registros por requisicao
 * @var int _offset       | Trará os próximos resultados
 * @var boolean _control  | Para evitar que haja várias requisições desnecessárias
 */
