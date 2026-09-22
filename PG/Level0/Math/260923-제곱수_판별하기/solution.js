/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 제곱수 판별하기
유형: 수학
날짜: 2026-08-25
Review 여부: false

# 📰 문제 설명
- 제곱수란, 자연수를 제곱했을 때 나오는 정수
- 정수 n이 제곱수라면 1을, 아니라면 2를 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. while문
    - sqrt 변수를 1로 초기화
    - while문으로 다음 동작을 수행
        - 루프 조건: sqrt * sqrt < n (sqrt의 제곱이 n과 같거나 커지면 while문 종료) 
        - sqrt 1 증가
    - while문 종료 후 sqrt * sqrt === n이면 1반환
    - 아니라면 2 반환

- 방식2. Math.sqrt() 메서드 사용
    - n의 제곱근이 자연수인지 확인
    - sqrt 변수를 Math.sqrt(n)로 초기화
    - Math.trunc(sqrt)와 Math.sqrt(n)가 같다면 sqrt는 자연수이므로 1 반환
    - 아니라면 2반환

# ⏰ 시간복잡도
- 방식1. O(sqrt n)
    - while문은 n의 제곱근 만큼 반복한다.
    - 따라서 시간복잡도는 O(sqrt n)이다.

- 방식2. O(1)
    - 내장 메서드인 Math.sqrt()는 하드웨어 연산을 이용하므로 시간복잡도가 O(1)이다.
    - 그 외의 연산도 횟수가 정해져있으므로, 전체 시간복잡도는 O(1)이다.

# 🚀 알게 된 점
- Number.isInteger() 메서드는 정수 판별 여부를 하여 참/거짓을 반환한다.

# 💭 아쉬운 점

*/

function solution(n) {
  // 방식1. while문 사용
  /*
  let sqrt = 1;

  while (sqrt * sqrt < n) {
    sqrt++;
  }

  return sqrt * sqrt === n ? 1 : 2;
  */

  // 방식2. Math.sqrt() 메서드 사용
  const sqrt = Math.sqrt(n);
  return sqrt === Math.trunc(sqrt) ? 1 : 2;
}

console.log(solution(5));
