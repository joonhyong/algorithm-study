/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 연속된 수의 합
유형: 수학
날짜: 2026-10-08
Review 여부: false

# 📰 문제 설명
- 두 정수 num, total이 주어짐
- 연속된 수 num개를 더한 값이 total이 될 때,
- 정수 배열을 오름차순으로 담아 반환하는 함수 만들기

# 💡 문제 풀이
- 개선 전
  - answer 변수를 빈배열로 초기화한다.
  - 어떤 정수 x가 있다고 할 때,
  - 해당 문제는 연속된 num개의 수가 total이 되는 케이스는 반드시 존재하므로
  - x + x+1 + x+2 + ... + x+(num-1) === total를 만족시키는 x는 반드시 존재한다.
  - 따라서 x + x+1 + x+2 + ... + x+(num-1) = total 이다.
  - 이 때, num이 짝수라면
    - total = num*x + (num-1)*num/2 이고,
    - x = (total - (num-1)*num/2) / num 이다.
  - 홀수라면 
    - total = num*x + (num-1)*Math.ceil(num/2) - (num-1)/2 이고, 
    - x = (total - (num-1)*Math.ceil(num/2) + (num-1)/2) / num 이다.
  - 해당 식을 통해 x를 구한 후, for문으로 num회 반복하며 다음작업을 수행한다.
    - 루프변수 i의 범위: 0 ~ num-1
    - x + i 값을 answer에 추가한다.
  - for문 종료 후 answer를 반환한다.

- 개선 후
  - answer 변수를 빈배열로 초기화 한다.
  - total = x + x+1 + x+2 + ... + x+(num-1) = num*x + (num-1)*num/2 이다.
  - 따라서 x = (total - (num-1)*num/2) / num 이다.
  - for문을 통해 num 회 반복하며 다음작업을 수행
    - answer.push(x+i)
  - for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(N)
- x를 구하는 과정은 수식 연산이므로 O(1)이다.
- for문은 num번 반복하므로 O(N)이다.
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점
- 등차 수열의 합 공식: total = 항의 개수 x (첫항 + 마지막 항) / 2

# 💭 아쉬운 점
- 가우스의 법칙 공식을 모르는 상태로 풀어서 코드가 지저분 해짐
- 가우스의 법칙 사용 시 홀짝 분기가 필요 없어짐

*/

function solution(num, total) {
  // 개선 전
  /*
  const answer = [];
  const x =
    num % 2 === 0
      ? (total - ((num - 1) * num) / 2) / num
      : (total - (num - 1) * Math.ceil(num / 2) + (num - 1) / 2) / num;

  for (let i = 0; i < num; i++) {
    answer.push(x + i);
  }

  return answer;
  */

  // 개선 후
  const answer = [];
  const x = (total - ((num - 1) * num) / 2) / num;

  for (let i = 0; i < num; i++) {
    answer.push(x + i);
  }

  return answer;
}

console.log(solution(3, 12));
