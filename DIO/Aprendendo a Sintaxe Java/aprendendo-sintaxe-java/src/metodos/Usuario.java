package metodos;



public class Usuario {
    public static void main(String[] args) {

        SmartTv smartTv = new SmartTv();

        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.aumentarVolume();
        smartTv.aumentarVolume();

        smartTv.aumentarCanal();
        smartTv.diminuirCanal();
        smartTv.mudarCanal(30);

        System.out.println("TV Ligada ?" + smartTv.ligada);
        System.out.println("canal Atual : " + smartTv.canal);
        System.out.println("Volume Atual : " + smartTv.volume);

        smartTv.ligar();

        System.out.println("Novo Status -> TV Ligada ? " + smartTv.ligada);
    }




}
