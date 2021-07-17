# Rebuild - Criador de HTML
# Desenvolvedor: Igor Fernandes

<pre>
- A biblioteca permite que voce crie códigos HMTL de forma dinâmica, trazendo mais facilidade na implementação de códigos. 
</pre>


<img src="./screenshot.jpg" alt="screenshot of project">

- O link do video de demonstracação:



<br><br>
<strong>- INSTALAÇÃO:</strong> 

##DIRETO NO HTML: 
<pre>Chama o arquivo reboost dentro do seu código HTML, com o "type" definido como modulo: </br> <script src="yourpath/reboost.js" type="module"></script></pre> <br>

<pre>
Em seguida instâncie uma váriável como um tipo "Construct".
</pre><br>

<pre>Por fim acesse o método "create" e passe um objeto com os parâmetros para construir seus elementos html.</pre>
<br>

<pre>

let crt = new Construct();

crt.create({
   type: "div",
   class: "hello-world",
   coord: document.querySelector("body"),
   child:[
      <span>Olá Mundo</span>        
   ]
});
</pre>


<br><br><br>
 
<pre>4° - Agora coloque a classe 'sidebar' dentro da mesma div em que está o 'data-offset'</pre> <br> <br>

<pre>6° - Coloque também a classe 'content' na div irmã da que está com a class 'sidebar'</pre><br> <br>

<pre>5° - Ainda nos seus códigos, coloque o atributo 'data-sideBtn' no seu button responsável pela ativação do sidebar</pre><br> <br>

<strong><h3>PRONTO!</h3></strong> 

Agora o código irá configurar sozinho a propriedade do sidebar, além de criar um botão personalizado. 

<img src="https://raw.githubusercontent.com/Igfernandes/sidebars/main/print.jpg" >
<br><br><br>


<strong><h3>#DOCUMENTAÇÃO:</h3></strong> 

<strong>data-offset</strong> - Nesse atributo podemos modificar sua estrutura. O valor 'default' é  representado pelo sidebar alcançando 15% da tela, mas caso queira ajustar para outras propriedades, os valores disponívels são:

<table>
  <tbody>
    <tr>
      <td>data-offset</td><td>default</td>
    </tr>
    <tr>
       <td>data-offset</td><td>25</td>
    </tr>
    <tr>
       <td>data-offset</td><td>50</td>
    </tr>
    <tr>
       <td>data-offset</td><td>75</td>
    </tr>
    <tr>
       <td>data-offset</td><td>90</td>
    </tr>
    <tr>
       <td>data-offset</td><td>100</td>
    </tr>
  </tbody>
</table>

<br> <br>




<strong>data-sideBtn</strong> - Esse atributo foi configurado para aceitar dois valores: <br><br>

<strong>data-sideBtn="pillars"</strong> - Irá criar pilares no botão, com o efeito único. Caso queira modificar o elemento de dentro, voce pode utilizar qualquer símbolo disponível nesse site: https://pt.wiktionary.org/wiki/%E2%98%B0. Apenas chame no final do seu código a função btnSideBar() e coloque o símbolo dentro dela. Exemplo: <br>

<pre>
<script> 
  btnSideBar('♅');
</script>
</pre>
<br> <br>

<strong>data-sideBtn="cross"</strong> - Irá criar também três pilares deitados, mas a animação final irá transformar os itens em um "X"; Não há como variar, apenas manter esse efeito.
<br> <br>

<strong>data-sideBtn</strong> - Caso queira criar voce mesmo o seu botão, apenas coloque a propriedade sem um valor para que não seja criado um elemento. 

<br><br><br>

<Strong>RESPONSIVIDADE:</strong>

Todos as resoluções abaixo de 425px terão como padrão o sidebar 100%. Caso haja necessidade de modificação, modifique por conta própria na folha de estilo. 

