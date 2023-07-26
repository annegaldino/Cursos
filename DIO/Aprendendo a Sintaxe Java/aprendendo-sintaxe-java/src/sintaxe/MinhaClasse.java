package edu.anne.primeirasemana;

public class MinhaClasse {
    public static void main(String[] args) {
        String primeiroNome = "Anne Carolinne";
        String segundoNome = "Carvalho Galdino";

        System.out.println(nomeCompleto(primeiroNome, segundoNome));
    }

    public static String nomeCompleto(String primeiroNome, String segundoNome){
        return primeiroNome.concat(" ").concat(segundoNome);
    }
}
