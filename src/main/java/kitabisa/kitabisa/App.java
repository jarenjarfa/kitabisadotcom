package kitabisa.kitabisa;
import java.util.Scanner;
import kitabisa.kitabisa.CaseArray;;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	Scanner scan = new Scanner (System.in);
    	
    	System.out.println("input number of data : ");
    	int n=scan.nextInt();
    	int array1[] = new int [n];
    	int array2[] = new int [n];
    	
    	System.out.println("input first array");
    	for (int i = 0; i < array1.length; i++) {
    		array1[i]=scan.nextInt();
		}
    	System.out.println("input second array");
    	for (int i = 0; i < array2.length; i++) {
    		array2[i]=scan.nextInt();
		}
    	
    	CaseArray arrayCase = new CaseArray();
    	arrayCase.checkArray(array1, array2);
    }
}
