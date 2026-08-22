/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 개미 군단
유형: 수학
날짜: 2026-08-23
Review 여부: false

# 📰 문제 설명
- 개미들은 공격력을 갖고 있음
    - 장군 개미: 5
    - 병정 개미: 3
    - 일개미: 1
- 사냥감의 체력에 딱 맞도록 병력을 데리고 나갈 예정
- 이 때, 최소한으로 병력을 구할 때의 개미의 마리 수를 반환하는 함수 만들기

# 💡 문제 풀이
- let 변수 answer를 0으로 초기화
- 공격력이 높은 개미 부터 몫을 구하여 answer에 더함
    - 만약 hp가 공격력보다 낮더라도, 몫은 0이므로 상관없음
- 이 때, 일 개미는 공격력이 1이므로 남은 hp를 그대로 answer에 더해주면 됨

# ⏰ 시간복잡도: O(1)
- 입력값에 상관없이 연산 횟수가 정해져 있으므로 시간복잡도는 O(n)이다.


# 🚀 알게 된 점

# 💭 아쉬운 점
 */

function solution(hp) {
  let answer = 0;

  answer += Math.floor(hp / 5);
  hp = hp % 5;

  answer += Math.floor(hp / 3);
  hp = hp % 3;

  answer += hp;

  return answer;
}

console.log(solution(23));
