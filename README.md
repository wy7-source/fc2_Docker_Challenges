### Docker Challenges

Esse repositório foi criado para correção dos desafios de Docker, do treinamento Fullcycle 2.0 pela [Code.Education](https://code.education/ "Code.Education") com a [School of net](https://www.schoolofnet.com/ "School of net").

#### Desafio 1:

Você terá que publicar uma imagem de uma aplicação Go no docker hub. Quando executarmos:
```
docker run wy7images/codeeducation
```
Temos que ter o seguinte resultado: Code.education Rocks!

A imagem de nosso projeto Go precisa ter menos de 2MB =)

#### Desafio 2:

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.