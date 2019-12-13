package climbStarts;

public class ClimbStairs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int a1 = climbStair(5, 1, 20);
		System.out.println(a1);
	}
	
	public static int climbStair(int forwardStep, int backwardStep, int totalStep) {
		int result = 0;
		int remain = totalStep;
		
		if(forwardStep < backwardStep) {
			return -1;
		}
		
		while(remain > 0) {
			remain = remain - forwardStep;
			if(remain <= 0) {
				result++;
				return result;
			} else {
				remain += backwardStep;
				result++;
			}
		}
		
		return result;
	}

}
