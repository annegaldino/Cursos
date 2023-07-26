package br.com.dio;

import br.com.dio.model.Gato;

public class PrimeiroPrograma {
    public static void main(String[] args) {
        Gato gato = new Gato();

        System.out.println(gato);

        Livro livro = new Livro("o problema dos 3 corpos", "300");
        System.out.println(livro);
        /*int a = 5;
        int b = 3;

        System.out.println("Hello World!");*/
    }
}

class Livro {
    private String nome;
    private String nPg;

    public Livro(String nome, String nPg) {
        this.nome = nome;
        this.nPg = nPg;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getnPg() {
        return nPg;
    }

    public void setnPg(String nPg) {
        this.nPg = nPg;
    }

    @Override
    public String toString() {
        return "Livro{" +
                "nome='" + nome + '\'' +
                ", nPg='" + nPg + '\'' +
                '}';
    }
}
