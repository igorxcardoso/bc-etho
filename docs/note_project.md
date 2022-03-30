### session.controller
Controla o acesso do usuário a aplicação.


#### createAccessToken
Cria o token de acesso para o usuário. Usando jwt.sign que recebe os dados do usuárop, uma secret key (chave secreta) e um tempo de expiração


#### .env & config.ts
No deploy da aplicação não será usando o arquivo config.ts, e sim com um arquivo .env