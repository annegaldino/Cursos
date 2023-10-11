import 'package:primeiro_desafio_dart/primeiro_desafio_dart.dart';
import 'package:test/test.dart';
import 'package:primeiro_desafio_dart/classes/pessoa.dart';
import 'package:primeiro_desafio_dart/services/services.dart' as func;

void main() {
   test('Cálculo de IMC', () {
    Pessoa p = Pessoa();
    p.setNome("Anne");
    p.setPeso(82);
    p.setAltura(1.65);
    expect(func.calcularIMC(p), 30.119375573921033);
  });
}
