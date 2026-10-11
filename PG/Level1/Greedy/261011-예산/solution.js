/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 예산
유형: 그리디
날짜: 2026-10-11
Review 여부: false

# 📰 문제 설명
- 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 주어짐
- 최대 몇개의 부서에 물품을 지원할 수 있는지 반환하는 함수 만들기
- 부서에 예산을 지원할 때는 신청한 금액 만큼 모두를 지원해주어야함 (이하, 이상 X)

# 💡 문제 풀이
- 방식1. 신청 예산이 가장 적은 부서를 우선적으로 지원해주기 
  - 판단 근거
    - "예산"문제에서의 그리디 접근 방식은 가장 적은 예산의 부서를 우선적으로 지원해주는 것이다.
    - 부서가 신청한 금액과는 상관없이 오로지 지원을 해주는 부서의 수를 최대 수를 구하는 문제이기 때문이다.
    - 또한 budget이 남아있어도 문제가 없으므로, 예산이 적은 부서를 먼저 지원해줌으로써, 그 뒤의 부서들에게 덜 지원할 수 있는 경우는 존재하지 않는다.
  
  - 풀이 방법
      1. answer 변수를 0으로 초기화
      2. d를 오름차순으로 정렬한다.
      3.  for...of문으로 다음 작업을 수행한다.
        - d의 요소를 wish라고 하자
        - 만약 wish > budget이라면 break
        - 아니라면 budget -= wish 및 answer++
      4. for...of문 종료 후 answer 반환 
 

# ⏰ 시간복잡도 O(N logN)
- sort() 메서드의 시간복잡도는 O(N logN)이다.
- for...of문은 d의 길이만큼 반복하므로 시간복잡도는 O(N)이다.
- 그외의 연산작업의 시간복잡도는 O(1)이다.
- sort() 메서드와 for...of문은 순차적으로 수행된다.
- 따라서 전체 시간복잡도는 O(N logN)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);

  for (const wish of d) {
    if (wish > budget) break;
    budget -= wish;
    answer++;
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
