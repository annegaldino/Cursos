#!/bin/bash

echo "Criando diretórios..."

mkdir /publico
mkdir /adm
mkdir /ven
mkdir /sec

echo "Criando grupos..."

groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

echo "Atribuindo proprietários aos diretórios..."


chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec

echo "Criando usuários..."

useradd carlos -c "Carlos" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd carlos -e

useradd maria -c "Maria" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd maria -e

useradd joao  -c "João" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd joao -e

useradd debora  -c "Débora" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd debora -e

useradd sebastiana  -c "Sebastiana" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd sebastiana -e

useradd roberto  -c "Roberto" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd roberto -e

useradd josefina  -c "Josefina" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd josefina -e

useradd amanda  -c "Amanda" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd amanda -e

useradd rogerio  -c "Rogério" -s /bin/bash -m  -p $(openssl passwd -1 Senha123)
passwd rogerio -e

echo "Relacionando usuários a grupos..."

adduser carlos GRP_ADM
adduser maria GRP_ADM
adduser joao GRP_ADM

adduser debora GRP_VEN
adduser sebastiana GRP_VEN
adduser roberto GRP_VEN

adduser josefina GRP_SEC
adduser amanda GRP_SEC
adduser rogerio GRP_SEC

echo "Definindo permissões aos diretórios..."

chmod 770 /adm
chmod 770 /ven
chmod 770 /sec
chmod 777 /publico

echo "Criação de usuários e grupos finalizados!"
