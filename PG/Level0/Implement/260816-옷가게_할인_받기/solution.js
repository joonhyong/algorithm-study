/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 옷가게 할인 받기
유형: 구현
날짜: 2026-08-16
Review 여부: false

# 📰 문제 설명
- 옷 가격에 따라 할인률 적용
- 10만원 미만 -> 할인 없음
- 10만원 이상 30만원 미만 -> 5% 할인
- 30만원 이상 50만원 미만 -> 10% 할인
- 50만원 이상 -> 20% 할인

# 💡 문제 풀이
- 조건문 사용
- 10만원 미만 시 answer = price
- 10만원 이상 AND 30만원 미만 시 answer = prcie * 0.95
- 30만원 이상 AND 50만원 미만 시 answer = prcie * 0.9
- 50만원 이상 시 answer = price * 0.8

# ⏰ 시간복잡도: O(1)
- 입력값에 상관없이 연산회수가 정해져 있으므로 시간복잡도는 O(1)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
 */

function solution(price) {
  let answer = 0;

  if (price < 100000) answer = price;
  else if (price >= 100000 && price < 300000) answer = price * 0.95;
  else if (price >= 300000 && price < 500000) answer = price * 0.9;
  else answer = price * 0.8;

  return answer;
}

console.log(solution(150000));
