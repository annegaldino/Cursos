# Dominando IDEs Java

 ▪️ Instalação e configuração Java no MacOS
 
  :white_check_mark: Instalação JDK 17 LTS
  
  :white_check_mark: Configuração de variável de ambiente
  
  :white_check_mark: Instalação do Eclipse
  
  :white_check_mark: Configurando o ícone do Eclipse no Dock
  
  :white_check_mark: Instalação do IntelliJ
  
  :white_check_mark: Configurando o ícone do Eclipse no Dock
  
  :white_check_mark: Instalação Git
 

:apple: MACOS

🔺 Instalação JDK Oracle
O **JDK 17 LTS** é a última versao de longo suporte cujos binários são de uso gratuito sendo (https://www.oracle.com/downloads/licenses/no-fee-license.html)

🔸 1. Abra o terminal e vamos verificar se temos o Java instalado:

java -version

🔸 2. Para instalar o JDK 17, acesse o link (https://www.oracle.com/java/technologies/downloads/#jdk17-mac), e escolha a versão para a respectiva arquitetura do seu Mac.

Executar o arquivo de extensão .dmg e seguir com NEXT até o final da instalação.

🔸 3. Confirme se realmente foi instalado com sucesso:

java -version

🔸 4. Vamos configurar o ambiente JAVA_HOME:

🔺 Instalação Eclipse

🔸 1. Entre no site oficial do Eclipse Foundation e faça o DOWNLOAD O site já identifica o sistema operacional e você escolhe qual arquitetura de hardware do seu Mac, no caso o meu é o Intel x86_64

🔸 2. Você clica no executor de extensào .dmg e depois em Eclipse Installer

🔸 3. Escolha segunda a opção: Eclipse IDE for Enterprise Java and Web Developers

🔸 4. Clique no folder da primeira opção e selecione o JDK que instalamos na nossa máquina.

🔸 5. Install

🔸 9. Launch

🔸 10. Pronto, intalação concluída!

4.1. Verificar o caminho da instalação do Java:

/usr/libexec/java_home

4.2. Copie o caminho que aparecerá no terminal, no meu caso:

/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

4.3. Descubra qual o tipo de Shell do seu MacOS:

echo $SHELL
No meu caso: /bin/zsh

4.3.1. Se o seu SHELL for o zsh, Abra o ~/.zshenv:

nano ~/.zshenv 

4.3.2. Se o seu SHELL for o bash, Abra o ~/.bash_profile:

nano ~/.bash_profile

4.4. Copie o código abaixo e cole no final do arquivo:
export JAVA_HOME=$(/usr/libexec/java_home)

4.5. Salve o arquivo

4.6. Source the arquivo e escreva $JAVA_HOME:

source ~/.zshenv _OU_ source ~/.bash_profile

% echo $JAVA_HOME
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

🔸 5. Feche o terminal e abra novamente

🔸 6. Vamos conferir mais uma vez se o Java está instalado na nossa máquina

java --version

🔺 Instalação Eclipse

🔸 1. Entre no site oficial do Eclipse Foundation e faça o DOWNLOAD O site já identifica o sistema operacional.

🔸 2. Escolha o arquivo referente ao tipo de arquitetura do seu MacOS

🔸 3. Execute o arquivo de extensão .dmg e depois Eclipse Installer

🔸 4. Escolha segunda a opção: Eclipse IDE for Enterprise Java and Web Developers

🔸 5. Clique no folder da primeira opção e selecione o JDK que instalamos na nossa máquina.

🔸 6. Mantenha as opções "create start menu entry" e "create desktop shortcut"

🔸 7. Install

🔸 8. Launch

🔸 9. Pronto, intalação concluída!

🔺 Configurando o ícone do Eclipse IDE no Dock

Clicar com botao direito no ícone do Eclipse >> opcoes >> Manter no Dock

🔺 Instalação IntelliJ IDEA Community

🔸 1. Entre no site ofical do INTELLIJ (https://www.jetbrains.com/pt-br/idea/)

🔸 2. Se você for universitário pode instalar a versão Ultimate, irá fazer um cadastro com o seu e-mail da universidade. Caso não esteja matriculado em uma universidade, escolha a opção Community e faça o download

🔸 3. Executar o arquivo com extensão .dmg

🔸 4. Mover o ícone do Intellij para a pasta Aplicativos e depois executar o seu Intellij já instalado!

🔺 Configurando o ícone do Intellij no Dock

Clicar com botao direito no ícone do Intellij >> opcoes >> Manter no Dock

🔺 Instalação Git

🔸 1. Abra o terminal e vamos verificar se temos o git instalado:

git --version

🔸 2. Execute o comando:

brew install git

🔸3. Confirme novamente se o git realmente está instalado:

git --version

🔸 4. Vamos começar as configurações iniciais:

4.1 Cofigurar o nome de usuário

sudo git config --global user.name "Seu nome"

4.2 Configurar o endereço de e-mail: ​ É de suma importância que o ENDEREÇO DE E-MAIL SEJA O MESMO DO GITHUB afim de evitar conflitos!

sudo git config --global user.email seuemail@email.br

4.3 Vamos conferir a lista de configurações:

git config --list

🔸 5. Pronto, git instalado e configurado com sucesso!
