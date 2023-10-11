import 'dart:math';

import 'package:primeiro_desafio_dart/classes/pessoa.dart';

  double calcularIMC(Pessoa pessoa) {
    var imc = pessoa.getPeso() / pow(pessoa.getAltura(), 2);

    return imc;
  }