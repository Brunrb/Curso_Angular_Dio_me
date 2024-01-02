import java.io.IOException;
import java.util.Scanner;

public class URI 2867 {
	
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int C = leitor.nextInt();
        for (int i = 0; i < C; i++) {
        	int N = leitor.nextInt();
        	int M = leitor.nextInt();
        	int digitos = (int) (Math.log10(Math.pow(N, M)) + 1);
        	System.out.println(digitos);
        }
    }
	
}