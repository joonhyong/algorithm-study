/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 점의 위치 구하기
유형: 구현
날짜: 2026-08-24
Review 여부: false

# 📰 문제 설명
- 좌표(x, y)를 차례로 담은 정수 배열 dot가 주어짐
- 좌표 dot가 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나로 반환하는 함수 만들기
- dot의 원소는 0이 아님
- dot의 원소 범위는 -500 이상 500 이하

# 💡 문제 풀이
- 변수 answer를 0으로 초기화
- 조건문을 통해 answer를 재할당
    - dot[0] > 0 AND dot[1] > 0 이라면 answer = 1
    - dot[0] < 0 AND dot[1] > 0 이라면 answer = 2
    - dot[0] < 0 AND dot[1] < 0 이라면 answer = 3
    - dot[0] > 0 AND dot[1] < 0 이라면 answer = 4
- 조건문 종료 후 answer 반환

# ⏰ 시간복잡도: O(1)
- 입력값에 상관없이 연산횟수가 특정 횟수로 정해져 있으므로 시간복잡도는 O(1)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 삼항 연산자를 이용하여 보다 코드를 간결하게 하는 방식도 있었다.

*/

function solution(dot) {
  let answer = 0;

  if (dot[0] > 0 && dot[1] > 0) {
    answer = 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    answer = 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    answer = 3;
  } else if (dot[0] > 0 && dot[1] < 0) {
    answer = 4;
  }

  return answer;
}

console.log(solution([3, 2]));
