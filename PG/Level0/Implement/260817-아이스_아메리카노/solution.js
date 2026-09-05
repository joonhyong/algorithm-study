/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 아이스 아메리카노
유형: 구현
날짜: 2026-08-17
Review 여부: false

# 📰 문제 설명
- 아이스 아메리카노는 한잔에 5500원
- 가지고 있는 돈 money로 최대로 마실 수 있는 아메리카노 잔 수와 남는 돈을 반환

# 💡 문제 풀이
- 아메리카노 잔 수를 cup에 저장
- 남는 돈을 remain에 저장
- money를 5500으로 나눈 몫이 cup, 나머지가 remain이 된다.
- answer는 cup과 remain을 순서대로 요소로 갖는 배열

# ⏰ 시간복잡도: O(1)
- 입력값에 상관없이 연산 횟수가 정해져 있으므로 시간복잡도는 O(1)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
 */

function solution(money) {
  const cup = Math.trunc(money / 5500);
  const remain = money % 5500;
  const answer = [cup, remain];

  return answer;
}

console.log(solution(150000));
