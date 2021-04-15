# RTLSampleRN

## Utils

* LocaleUtils
  
  * isRTL
  
    Constante global que recebe o retorno do método *isRTL* da classe *I18nManager* do React Native. 
    Essa constante é reponsável por indicar se o contexto da aplicação é RTL ou não.
  
## Componentes

* TextView

  > Customização do componente *Text* do React Native

  * Android
    
      O componente aplica as adaptações para RTL automaticamente de acordo com o idioma do texto.
    
  * iOS
      
      Necessita da adição de um attributo *writingDirection* ao estilo do componente de acordo com a constante *isRTL*.
    
* IconView

  > Customização do componente *Image* do React Native
  
  Em ambas as plataformas deve ser uma transformação com base na constante global *isRTL* para espelhar o conteudo do componente. 
  Outra abordagem possível é atribuir um "source* diferente para cada contexto.

* HorizontalFlatList

  > Customização do componente *FlatList* do React Native com o props horizontal = true
  
  Em ambas as plataformas o componente automaticamente inverte a ordem os items da lista.

* FlexRow

  > Componente *View* com atributo *flexDirection* = row
  
  Em ambas as plataformas o componente automaticamente inverte a ordem dos componentes aninhados.
  
## Considerações

  * No Android, o contexto da aplicação é atualizado automaticamente quando o contexto do sistema operacional é alterado. 
  Com excessão do componente *Text*, que funciona de acordo com o idioma do texto, e do componente *Image*, que precisa que a aplicação seja reiniciada para aplicar a transformação.
  
  *No iOS foi necessário utilizar o método *forceRTL* da classe *I18nManager* passando o valor *true* como argumento, para que a aplicação mude o contexto para RTL,
  Logo devem ser utilizadas bibliotecas para identificar o contexto do idioma do sistema operacional, aplicar o RTL ao contexto da aplicação e forçar um reboot.
