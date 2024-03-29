##  Gráfico Implementado

O gráfico selecionado para implementação foi o "5 principais doenças e problemas da área", indicando quais são as doenças mais comuns dentro do cenário da Volkswagen e o seus números de incidência.O gráfico se encontra na aba saúde do dashboard, aproximadamente no meio da página.

![image](https://github.com/joaomtm/atividade_tratamento/assets/99208815/2020be37-7085-46b7-a318-31943b6c525e)

![image](https://github.com/joaomtm/atividade_tratamento/assets/99208815/d538822c-6f05-482a-a21e-016f740c14b4)

## Código do Gráfico 

O código do gráfico pode ser dividio em duas partes principais: components e services.

### Components

Os components são os elementos visuais que compõem o gráfico, como eixos, legendas, barras, linhas, pontos, etc. Eles são responsáveis por representar os dados de forma visual e interativa para os usuários. No respectivo caso, o component é constituído por códigos HTML, SCSS e TS (2). O HTML é responsável pela estruturação do conteúdo, o SCSS é utilizado para estilizar o componente de forma mais eficiente e organizada (não aplicado no gráfico), enquanto o TypeScript é empregado para adicionar funcionalidades dinâmicas e interativas ao componente.

![image](https://github.com/joaomtm/atividade_tratamento/assets/99208815/29f726c3-1ea9-48af-b231-0ca0c7e26841)

HTML:

![image](https://github.com/joaomtm/atividade_tratamento/assets/99208815/00200b29-972d-4627-8772-2738dac62a58)
Fontatação do hipertexto

TS:

![image](https://github.com/joaomtm/atividade_tratamento/assets/99208815/72a32959-6d10-4cf8-9813-6ef149fe2398)

Este código é um componente Angular chamado SaudeComponent que mostra informações de saúde. Ele usa diferentes componentes e um serviço chamado SaudeService para buscar e exibir dados sobre as principais doenças.


##### Services

Os services são responsáveis por fornecer funcionalidades adicionais ao gráfico, como interações com banco de dados, cálculos estatísticos, processamento de dados, entre outros. Eles geralmente estão envolvidos no fornecimento e manipulação dos dados que alimentam os componentes do gráfico.


![image](https://github.com/joaomtm/atividade_tratamento/assets/99208815/1fe48e03-b921-48ba-b889-41cfe2045a3d)


apiconnect.service: gerencia a comunicação com APIs externas, fornecendo métodos para requisições HTTP e manipulação de respostas.

apiconnect.service.spec: contém testes de unidade para garantir o funcionamento correto do serviço de conexão com APIs, assegurando sua robustez.

saude.service.spec: responsável por testar a integridade e precisão das funcionalidades relacionadas à saúde na aplicação, validando a manipulação de dados e cálculos específicos.

saude.service: Oferece métodos e funcionalidades relacionadas à saúde, simplificando a manipulação de dados e interações com APIs, enquanto fornece uma interface coesa para a aplicação.



## Aplicação

Executando o back-end e o front-end, o gráfico já deve funcionar com sua integração e serviço de tratamento completo.




