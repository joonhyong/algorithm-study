/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 팩토리얼
유형: 수학
날짜: 2026-08-31
Review 여부: true

# 📰 문제 설명
- i 팩토리얼 (i!)은 부터 i까지 정수의 곱을 의미
- 정수 n이 주어질 때 가장 큰 정수 i를 반환하는 함수 만들기
- 0 < n <= 3,628,800
- i! <= n

# 💡 문제 풀이
- 정수 할당 시 해당 수의 팩토리얼을 반환하는 makeFactorial() 함수 생성
- answer 변수 0으로 초기화
- i 변수 1로 초기화
- while문 사용
  - 조건문: makeFactorial(i) <= n
  - answer에 i를 할당
  - i를 +1증가 


# ⏰ 시간복잡도: O(1)
- 입력값은 n이며, n의 범위는 3,628,800로 정해져있음
- 3,628,800 = 10!이므로 while문은 최대 10번까지 반복되며, 이는 상수 시간복잡도를 갖는다고 볼 수 있음
- makeFactorial()함수의 입력값을 기준으로 본다면 O(K^2)이다.
  - makeFactorial()함수는 k번 반복하며,
  - solution() 함수에서 makeFactorial()함수를 k번 반복한다.
  - 반복 작업당 연산 횟수는 1 + 2 + ... + k = k(k+1)/2 이므로 시간복잡도는 O(K^2)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 팩토리얼 곱셈을 반복적으로 하는 연산이 비효율적이라는 것을 알게되었다.
- makeFactorial()을 매번 처음부터 계산하지 않고,
  이전 팩토리얼 값을 재사용하면 더 효율적으로 구현할 수 있었다.
*/

function makeFactorial(k) {
  // 방법1. 반복문
  /*
  let fac = 1;
  for (let i = 1; i <= k; i++) {
    fac *= i;
  }
  return fac;
  */

  // 방법2. 재귀호출
  if (k <= 1) return 1;
  return k * makeFactorial(k - 1);
}

function solution(n) {
  let answer = 0;
  let i = 1;

  while (makeFactorial(i) <= n) {
    answer = i;
    i++;
  }

  return answer;
}

console.log(makeFactorial(5));
console.log(solution(3628800));
