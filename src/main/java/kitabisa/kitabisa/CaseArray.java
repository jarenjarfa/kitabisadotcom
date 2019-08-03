package kitabisa.kitabisa;

public class CaseArray {

	public void checkArray(int[] array1, int[] array2) {
		int count=0;
		for (int i = 0; i < array1.length; i++) {
			for (int j = 0; j < array2.length; j++) {
				if (array1[i]==array2[j]) {
					System.out.println("there are same value between First Array : "+array1[i]+" & And Second Array : "+array2[j]);
					count++;
				}
			}
		}
		if (count==0) {
			System.out.println("there are no same value");
		}
	}
}