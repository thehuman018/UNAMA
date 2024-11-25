1º Problema recorrente: Dependências não carregadas ou faltando. 
Solução: No terminal do vs code em windows, utilizar o yarn install para corrigir os erros de dependências.

2º Problema: O site não carrega.
Solução: No terminal do windows, utilizar o seguinet comando: set NODE_OPTIONS=--openssl-legacy-provider
Após isso, rodar novamente o app no terminal com npm start.
