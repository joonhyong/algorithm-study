/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 짝수와 홀수
유형: 구현
날짜: 2026-09-05
Review 여부: false

# 📰 문제 설명
- 인수 num의 짝수와 홀수 여부를 판단하여 "Even"과 "Odd"를 반환하는 함수 만들기

# 💡 문제 풀이
- 조건문으로 2로 나눴을때가 0이면 "Even" 출력
- 아니라면 "Odd" 출력

# ⏰ 시간복잡도: O(1)

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}

console.log(solution(121));
