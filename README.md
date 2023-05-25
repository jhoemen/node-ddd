# Arquitetura dividida em camadas, domínio, aplicação e infra.

# Domain

Camada responsável pelo modelo do domínio, possui as pastas, entitites que contém as classes das entidades do negócio, e a pasta repositories, com as interfaces de acesso da entidade, que são implementados pela camada de infra.

# Application

Camada responsável pelas regras de negócios da aplicação e pela comunição entre as camadas domain e infra, as classes de usecase e controller tem a responsabilidade de validar, tratar, e aplicar regras de negócios que atendam o domínio. Tem a finalidade de prover os serviços que acessam as classes das entidades da camada de domain e as classes dos repositórios na camada de infra.

# Infra

Camada responsável pelo armazenamento e acesso os dados, podendo ser um banco de dados, arquivo ou in-memory.

Na pasta repositories temos as classes de repository cliente, pedido e produto que implementam as interfaces do repositório da camada de domínio.

Na pasta http temos a API, que está organizada em pastas:

-   Adapters, responsável por adaptar o retorno das controllers para a rota retornar via response para o solicitante da API;
-   Config, responsável pela configuração do EXPRESS, que irá gerenciar as rotas, cors e parse;
-   Factories, é uma fábrica responsável por criar instancias de objetos das classes usecase e controller da camada de aplicação;
-   Middlewares, renponsável por proteger as rotas, verifica e valida o token JWT informado no header da requisição;
-   routes, responsável por configurar as rotas que irão acessar a camada de aplicação.

A API é responsável por, disponibilizar rotas de acessos para a camada de aplicação, algumas rotas são protegidas por uma classe de middleware, que após validação chama a fábrica, que é responsável por instanciar objetos das classes de usecase e controller da camada de aplicação, enviando para a mesma o repository a ser utlizado.

# Fluxo:

Uma solicitação, REQUEST é disparado via API para o sistema de rotas do EXPRESS, após localização da rota, pode ser solicitado ou não a classe de MIDDLEWARE, que protege a rota, exigindo que um token JWT seja informado no HEADER da REQUEST, caso atenda as regras do MIDDLEWARE, a FACTORY é chamada para fabricar os USECASE, CONTROLLER e REPOSITORY que serão utilizados na CAMADA DE APLICAÇÃO, seu papel é fazer uma ponte de comunicação entre as CAMADAS.

A CAMADA DE APLICAÇÃO recebe os dados de uma REQUEST, valida os dados e as regras de negócios, envia para o USECASE que acessa a ENTITTY e faz uma chamada ao REPOSITORY. O repositório retorna um objeto para o USECASE, que envia para a CONTROLLER, onde a mesma devolve para a FACTORY, que envia para o ADAPTER, que é responsável por tratar os dados que serão retornados no corpo da RESPONSE.
