/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 자릿수 더하기
유형: 구현
날짜: 2026-08-25
Review 여부: false

# 📰 문제 설명
- 정수 n이 매개변수로 주어짐
- n의 각 자리 숫자의 합을 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 문자열로 변환
    - n에 toString(), split(), map(), reduce() 메서드를 적용시킨 결과값을 반환
        - split() 메서드에는 ""을 전달
        - map() 메서드에는 Number 함수를 전달

- 방식2. 숫자 연산만 사용
    - sum 변수를 0으로 초기화
    - while문으로 다음 작업을 수행
        - 루프 조건: n !== 0
        - sum += n % 10
        - n = Math.trunc(n / 10)
    - while문 종료 후 sum 반환

# ⏰ 시간복잡도 O(log n)
- 방식1
    - toString()의 시간복잡도는 O(d)이다. (d는 숫자 n의 자릿수)
    - split(), map(), reduce() 메서드의 시간복잡도는 O(d)이며 연산은 순차적으로 진행
    - 전체 시간복잡도는 O(log n)이다.
- 방식2
    - while문은 n의 자릿수 만큼 반복한다.
    - 따라서 전체 시간복잡도는 O(log n)이다.

# 🚀 알게 된 점
- map() 메서드 대신 reduce() 메서드의 콜백함수 내에서 cur 요소에 Number함수를 적용시키면 더 효율적이었다.

# 💭 아쉬운 점

*/

function solution(n) {
  // 방식1. 문자열로 변환
  /*
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  */

  // 방식2. 숫자 연산
  let sum = 0;

  while (n !== 0) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }

  return sum;
}

console.log(solution(930211));
