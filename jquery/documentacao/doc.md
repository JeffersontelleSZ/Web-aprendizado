# Document Jquery

O que é ?

- Uma biblioteca Javascript

## Seletores

- \$(h1) Selecionado pela tag
- \$(.class) Selecionado pela classe
- \$(#id) Selecionado pelo id

## Selecionado elementos por classes de tags especificas

- \$('h1.classe1') - selecionado apenas a classe que tenha a tag h1

## Atuação sobre o array de retorno de elementos selecionados

- \$('.classe1 .classe2:first')
- \$('.classe1 .classe2:last')
- \$('.classe1 .classe2:even')
- \$('.classe1 .classe2:odd')

## Selecionado atributos

- \$('div').attr('style')
- \$('img').attr('src', 'imagens_01.jpg')

## Selecionado conteudo

- \$('h1').html('Alterando o conteudo')
- \$('p').text('alterando ')

## \$.each()

Syntax

\$.each(array, callback);

```javascript
$.each($(".interesse:checked"), (indice, valor) => {
  console.log(indice, valor);
});
```
