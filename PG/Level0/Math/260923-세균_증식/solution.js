/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 세균 증식
유형: 수학
날짜: 2026-09-23
Review 여부: false

# 📰 문제 설명
- 어떤 세균은 1시간에 두배만큼 증식한다.
- 처음 세균의 마리수 n과 경과한 시간 t가 주어짐
- t시간 후 세균의 수를 반환하는 함수 만들기 

# 💡 문제 풀이
- for문으로 t회 반복하며 다음 작업을 수행
    - n *= n
- for문 종료 후 n 반환

# ⏰ 시간복잡도 O(N)
- for문은 t회 반복하므로 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(n, t) {
  for (let i = 0; i < t; i++) {
    n *= 2;
  }
  return n;
}

console.log(solution(2, 10));
