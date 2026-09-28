/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 저주의 숫자 3
유형: 구현
날짜: 2026-09-27
Review 여부: false

# 📰 문제 설명
- 3의 배수의 숫자를 사용하지 않는 마을이 있음
- 예시 - 3 대신 4, 6대신 8 (5대신 7이 쓰이므로), ...
- 정수 n이 주어질 때 해당 마을에서 사용하는 숫자를 반환하는 함수 만들기

# 💡 문제 풀이
- has3() 함수 선언
  - 인수로 전달받은 num에 대해, num의 자릿수 만큼 반복
  - num의 자릿수를 하나씩 확인하여 3이 존재하는 경우 true를, 아닌 경우는 false 반환

- solution() 함수 선언
  - answer 변수를 0으로 초기화
  - for문으로 1부터 n까지 다음 작업을 수행
    - answer를 1 증가
    - while문으로 다음 작업을 수행
      - 루프 조건: answer가 3의 배수이거나, 자릿수에 3이 존재하는 경우
      - answer를 1 증가
  - for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(n log n)
- has3() 함수
  - num의 자릿 수를 n이라고 할 때,
  - has3() 함수의 시간복잡도는 O(log n)이다.
  - 어떤 수 num의 자릿수가 d일 때, d는 약 log n 이기 때문이다.

- solution() 함수
  - for문은 n회 수행한다.
  - for문 내부의 while문은 answer가 3의 배수이거나, 자릿수에 3이 존재하는 동안 반복한다.
  - 이 때, n은 1이상 100이하이며, 3의 배수이거나 자릿수에 3이 존재하는 경우는 일정수준 이하로 제한됨
  - 따라서 solution() 함수의 외부 for문의 n회와 has3() 함수의 log n이 결합하여 전체 시간복잡도는 O(n log n)이다.  

# 🚀 알게 된 점

# 💭 아쉬운 점

*/
function has3(num) {
  const len = num.toString().length;

  for (let i = 0; i < len; i++) {
    if (num % 10 === 3) return true;
    else num = Math.trunc(num / 10);
  }

  return false;
}

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer++;
    while (answer % 3 === 0 || has3(answer)) answer++;
  }

  return answer;
}

console.log(solution(15));
