/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 양꼬치
유형: 구현
날짜: 2026-08-18
Review 여부: false

# 📰 문제 설명
- 양꼬치를 10인분 시키면 음료수 1개 서비스 제공
- 양꼬치 n인분과 음료수 k개를 시켰을 때의 총 금액 반환하는 함수 만들기

# 💡 문제 풀이
- service 변수에 n/10의 몫을 저장 -> 서비스로 제공되는 음료수의 개수
- 12000 * n + 2000 * k - 2000 * service를 반환

# ⏰ 시간복잡도: O(1)

# 🚀 알게 된 점

# 💭 아쉬운 점
 */

function solution(n, k) {
  const service = Math.floor(n / 10);
  const answer = 12000 * n + 2000 * k - 2000 * service;
  return answer;
}

console.log(solution(4, 5));
