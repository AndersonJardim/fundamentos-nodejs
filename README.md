# Comandos iniciais

#node -v
#yarn init -y
#touch README.md

node -v
v14.17.3

mkdir fundamentos-nodejs

yarn init -y
yarn init v1.22.5

success Saved package.json
Done in 0.07s.

ls
package.json

touch README.md

# instalar express
yarn add express
yarn add v1.22.5
# ou npm install express

mkdir src
cd src
touch index.js

# // http://localhost:3333/
"Hello world!"
"Hello world Ignite!"

# para instalar o nodeman apenas no modo debug
yarn add nodeman -D

# yarn dev

D:\_Documentos\Videos\_Rocketseat_Ignite_NodeJS\fundamentos-nodejs (master)
yarn dev
yarn run v1.22.5
$ nodemon src/index.js
[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`

# requisições:
/**
 * GET    = Buscar  uma informação dentro do servidor
 * POST   = Inserir uma informação no servidor
 * PUT    = Alterar uma informação no servidor
 * PATH   = Alterar uma informação especifica
 * DELETE = Deletar uma informação no servidor
*/
