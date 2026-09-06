/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: x만큼 간격이 있는 n개의 숫자
유형: 구현
날짜: 2026-09-05
Review 여부: false

# 📰 문제 설명
- 정수 x와 자연수 n을 입력받아,
- x부터 시작해 x씩 증가하는 숫자를 n개 지니는 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- x는 반복문의 변수 i의 시작 숫자
- n은 반복 횟수

- 빈배열 answer 선언
- 변수 s를 0으로 초기화
- for문 사용
  - n번 반복
  - s를 x만큼 증가
  - arr에 s를 요소로 추가
- for문 종료 후 answer 배열 반환

# ⏰ 시간복잡도: O(n)
- 입력값 n회 만큼 연산을 수행하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- ES6 문법을 사용한 방법을 고려하지 않았다.
- 메인이 되는 자료형에 맞는 ES6 메서드를 따올리고, 해당 메서드를 통해 풀어보려는 시도를 해보아야겠다.
*/

function solution(x, n) {
  // 방식1. 단순 반복문 사용
  /*
  const answer = [];
  let s = 0;

  for (let i = 0; i < n; i++) {
    s += x;
    answer.push(s);
  }

  return answer;
  */

  // 방식2. ES6 문법 사용 - Array.from() 메서드
  const answer = Array.from({ length: n }, (_, i) => x * (i + 1));

  return answer;
}

console.log(solution(2, 5));
