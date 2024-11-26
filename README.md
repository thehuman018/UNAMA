O site funciona de forma bem siples. Após sua execução no terminal do windows atravéz do comando "npm start", o navegador irá abrir uma nova aba com os dados do website. Há apenas uma página com todas as informações necessárias para uso. Há 4 tipos de interações que o usuário pode fazer, dentre elas: cadastrar professor, cadastrar aluno, consultar professores cadastrados e consultar alunos cadastrados. Cada opção pode ser ocultada após o clique, se necessário. Após o cadastro de professor ou aluno, automaticamente o site irá gerar um relatório de dados do que foi registrado na base de dados. Além disso, os alunos podem acompanhar o andamento de suas notas desde a primeira até a última avaliação do seu semestre letivo. Esse sistema funciona como uma forma de organizar as notas dos alunos e registrar cada docente de uma determinada matéria, podendo fazer essa consulta sempre que necessário (em atualizações futuras).

Vale destacar dois problemas durante a fase de desenvolvimento do site. Infelizmente ainda não foi possível encontrar uma solução por completo, porém há alternativas temporárias para mitigar o problema.

1º Problema: Dependências não carregadas com npm ou faltando. 
Solução: No terminal do vs code em windows, deve-se utilizar o "yarn install" para corrigir os erros de dependências e tornar o "npm start" funcional.

2º Problema: O site não carrega ou carrega em branco.
Solução: No terminal do windows, após solucionar o primeiro problema, deve-se utilizar o comando: set NODE_OPTIONS=--openssl-legacy-provider.
Após isso, pode-se rodar novamente o app no terminal com "npm start", ele deve carregar o site normalmente com todas as suas funcionalidades. Caso seja pedido para trocar a porta de conexão 3000 para 3001, pode-se clicar em "y" ou "s" no terminal, o site deverá carregar normalmente.
