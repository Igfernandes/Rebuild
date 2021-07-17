# Rebuild - Criador de HTML
# Desenvolvedor: Igor Fernandes

<pre>
- A biblioteca permite que voce crie códigos HMTL de forma dinâmica, trazendo mais facilidade na implementação<br>de códigos HTML pelo<br> JS. A dinamicidade do projeto te possibilita a divisão de elementos e uma arquitetura fragmentada que irá ajudar a otimizar o<br> desempenho e a organização de seus códigos. A sua estrutura basea-se na arquitetura do React, com utilização apenas de recursos<br> nativos do JS.<br>
Ao instalar a biblioteca em seu projeto, voce poderá encapsular seus escopos html e charmá-los em qualquer momento do projeto,<br>colocar parâmetros dinâmicos e até mesclar estruturas em momentos específicos. 
</pre>



<img src="./screenshot.jpg" alt="screenshot of project">

- O link do video de demonstração:



<br><br>
<strong>- INSTALAÇÃO:</strong> 

##DIRETO NO HTML: 
<pre>Chame o arquivo reboost dentro do seu código HTML, com o "type" definido como modulo: </br> <script src="yourpath/reboost.js" type="module"></script></pre> <br>

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
 
##INCLUINDO NO MÓDULO: 
<pre>No seu arquivo .JS, importe o construtor "Construct" do rebuild</pre> <br>

<pre>
   Em seguida instâncie uma váriável como um tipo "Construct".
</pre><br>

<pre>
   Por fim acesse o método "create" e passe um objeto com os parâmetros para construir seus elementos html.
</pre>
<br>

<pre>

import * as config from '../../../../rebuild';

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


<strong><h3>#OPTIONS:</h3></strong> 

<strong>Parâmetros</strong>

<table>
   <thead>
      <tr>
         <td>Parâmetro</td>
         <td>Descrição</td>
         <td>Exemplo</td>
      </tr>
   </thead>
  <tbody>
     <tr>
      <td>Coord</td>
      <td>O parâmetro é a localização da onde o elemento que está sendo criado será introduzido. Nesse campo o valor a ser repassado precisa ser a localização já estabelecida por um dos métodos nativos do JS para encontrar elementos do DOM.</td>
      <td><pre>coord: document.querySelector("body");</pre>
        </td>
     </tr>
    <tr>
      <td>Type</td>
      <td>Neste parâmetro voce consegue definir qualquer tipo de tag html apenas declarando o seu nome do selector. <br>@Obser: As tags "imgs" seguem um padrão próprio além da modificação de seus atributos pelo parâmetro "attribute". <a href="#imgstag">veja mais</a> </td>
       <td><pre>type: "div"</pre></td>
    </tr>
     <tr>
      <td>class</td>
      <td>Neste parâmetro voce consegue definir quais serão as classes do elemento, as colocando separadas por espaço.</td>
       <td><pre>class: "minha-classe"</pre></td>
     </tr>
     <tr>
      <td>id</td>
      <td>Neste parâmetro voce consegue definir o id do elemento.</td>
      <td><pre>text: "caixa"</pre></td>
    </tr>
    <tr>
      <td>text</td>
      <td>Nesta parâmetro voce consegue definir o texto que será esboçado dentro do elemento.</td>
      <td><pre>text: "Olá Mundo!"</pre></td>
    </tr>
    <tr>
      <td>style</td>
      <td>Nesta parâmetro voce consegue definir o estilo dentro da tag do elemento, do tipo "inline".</td>
      <td><pre>text: "Olá Mundo!"</pre></td>
    </tr>
     <tr>
      <td>attribute</td>
      <td>Nesta parâmetro voce consegue definir os atributos do elemento, sendo cada um deles um array contendo um objeto com dois parâmetros a mais. O parâmetro de "type" você irá definir o qual será o atributo setado. O parâmetro "value" voce irá introduzir o valor como string.</td>
      <td><pre>attribute: [{
            type: "data",
            value: "informacao"
         }]</pre>
        </td>
    </tr>
    <tr>
      <td>html</td>
      <td>Nesta parâmetro voce consegue definir valor htmls a serem introduzidos no elemento, sendo cada um deles um array, recebendo um valor do tipo string.</td>
          <td>
             ----
        </td>
    </tr>
   <tr>
      <td>child</td>
      <td>Nesta parâmetro voce consegue definir elementos filhos a serem introduzidos no elemento que será criado, sendo o parâmetro um array recebendo elementos do tipo html definidos. A ordem em que os elementos são introduzidos segue a mesma que serão criados no html. Na biblioteca, é possível criar um modelo cascata com esse parâmetro, definindo uma nova estrutura dentro desse parâmetro "child".</td>
          <td>   
             <pre>
              crt.create({
        type: "game",
        coord: $info.coord,
        child:[
            crt.create({
                type: "div",
                class: "game_boy",
                child: [
                    crt.create({
                        type: "div",
                        class: "game_boy-content",
                        child: $info.child
                    })
                ]
            })
        ]
    });
             </pre>
        </td
    </tr>
    <tr id="imgstag">
      <td>Extra</td>
      <td>As tags "imgs" seguem um próprio padrão, onde o programdor poderá definir mais 3 parâmetros na estrutura: src, title e o alt. Os três parâmetros recebem valores do tipo string e são destinados a esse elemento image que será criado pela biblioteca</td>
      <td><pre>type: "img",<br>
          src: "./yourpath/img.jpg",<br>
          alt: "Imagem",<br>
          title: "apenas uma imagem"</pre>
        </td>
    </tr>
  </tbody>
</table>

<br> <br>


 

