menu = """

[d] Depositar
[s] Sacar
[e] Extrato
[q] Sair 


"""

saldo = 0
limite = 500
extrato = ""
numero_saques = 0
LIMITE_SAQUES = 3
LIMITE_POR_SAQUE = 500

while True:
    
    opcao = input(menu)
    
    if opcao == "d":
        valor_deposito = float(input("\nInforme o valor de depósito:"))
        
        if valor_deposito > 0:
            
            saldo += valor_deposito
            extrato += f"Depósito: R$ {valor_deposito: .2f}\n"
            print("\nDepósito realizado!")
        else:
            print("\nValor informado é inválido!")
    
    elif opcao == "s":
        if saldo == 0:
            print("\nConta sem limite de saldo!")
            
        elif numero_saques < LIMITE_SAQUES:
            valor_saque = float(input("\nInforme o valor de saque:"))
            if valor_saque <= LIMITE_POR_SAQUE:
                
                if (valor_saque > 0):
                    
                    if valor_saque <= saldo:
                        saldo -= valor_saque
                        extrato += f"Saque: R$ {valor_saque: .2f}\n"
                        numero_saques += 1
                        print("\nSaque realizado!")
                    else:
                        print("\nLimite insuficiente")
                else:
                    print("Valor de saque inválido!")
            else:
                print("\nSaque permitido até R$ 500")
        else:
            print("\nVocê efetuou a quantidade de saques diário")
        
    elif opcao == "e":
        print(" EXTRATO ".center(30, "#"), end="\n" )
        print("Não foram realizadas movimentações." if not extrato else extrato.center(30))
        print(f"SALDO: R$ {saldo: .2f}".center(30))
        print("".center(30, "#"))
        
    elif opcao == "q":
        break
    
    else:
        print("\nOperação inválida, por favor selecionar novamente a operação desejada.")