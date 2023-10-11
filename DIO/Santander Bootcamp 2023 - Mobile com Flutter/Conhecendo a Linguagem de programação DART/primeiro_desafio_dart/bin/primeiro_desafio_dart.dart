import 'package:primeiro_desafio_dart/classes/pessoa.dart';
import 'package:primeiro_desafio_dart/exceptions/nome_invalido_exception.dart';
import 'package:primeiro_desafio_dart/utils/console_utils.dart';
import 'package:primeiro_desafio_dart/services/services.dart';

void main(List<String> arguments) {
  Pessoa pessoa = Pessoa();

  print("Bem vindo ao sistema de cálculo de IMC!");

  String nome;

  do {
    nome = ConsoleUtils.lerStringComTexto("Digite seu nome:");

    try {
      if (nome.trim() == "") {
        throw NomeInvalidoException();
      }
    } on NomeInvalidoException catch (e) {
      print(e);
    }
  } while (nome.trim() == "");
  pessoa.setNome(nome);

  double? peso;
  double? altura;

  do {
    peso = ConsoleUtils.lerDoubleComTexto("Digite seu peso");
    if (peso != null) pessoa.setPeso(peso);
  } while (peso == null || peso == 0);

  do {
    altura = ConsoleUtils.lerDoubleComTexto("Digite sua altura");
    if (altura != null) pessoa.setAltura(altura);
  } while (altura == null || altura == 0);

  var imc = calcularIMC(pessoa);

  var mensagem;

  switch (imc) {
    case < 16:
      mensagem = "Magreza grave";
      break;
    case >= 16 && < 17:
      mensagem = "Magreza moderada." ;
      break;
    case >= 17 && < 18.5:
      mensagem = "Magreza leve.";
      break;
    case >=18.5 && < 25:
      mensagem = "Saudável";
      break;
    case >= 25 && < 30:
      mensagem = "Sobrepeso";
      break;
    case >= 30 && < 35:
      mensagem = "Obesidade Grau I";
      break;
    case >= 35 && < 40:
      mensagem = "Obesidade Grau II (severa)";
      break;
    case >= 40:
      mensagem = "obesidade Grau III (mórbida)";
      break;
  }

  print("Dados: $pessoa");
  print("IMC: ${imc.toStringAsFixed(2)}");
  print(mensagem);
}
