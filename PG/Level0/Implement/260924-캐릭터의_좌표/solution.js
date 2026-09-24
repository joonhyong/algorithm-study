/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 캐릭터의 좌표
유형: 구현
날짜: 2026-09-24
Review 여부: false

# 📰 문제 설명
- up, down, left, right 방향키가 있으며, 누르면 각각 y좌표+1, y좌표-1, x좌표-1, x좌표+1
- 캐릭터는 [0, 0]에서 시작
- 맵의 크기는 board이며, 만약 board가 [11, 11]이라면, 상하좌우로 5까지 퍼져있는 것
- board의 크기를 벗어난 방향키 입력은 무시
- 입력할 방향키의 배열 keyinput과 맵의 크기 board가 주어짐
- 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 [0, 0]으로 초기화
- limitX 변수를 (board[0] - 1) / 2로 초기화
- limitY 변수를 (board[1] - 1) / 2로 초기화
- for문으로 keyinput을 순회하며 다음 작업을 수행
    - switch문으로 keyinput의 요소에 따라 다음 작업을 수행
        - "up" : answer[1] + 1 <= board[1] 이라면, answer[1] + 1
        - "down" : answer[1] -1 1 >= board[1] 이라면, answer[1] - 1
        - "left" : answer[0] - 1 >= board[0] 이라면, answer[0] - 1
        - "right" : answer[0] + 1 <= board[0] 이라면, answer[0] + 1
- for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(N)
- for...of문은 keyinput의 길이 만큼 수행한다.
- 내부 작업의 시간복잡도는 단순 연산이므로 O(1)의 시간복잡도를 갖는다.
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점
- 평면 좌표 이동 시뮬레이션에서 이동 범위를 확인할 때는 음수 범위를 지정해줘야함

# 💭 아쉬운 점
- board의 범위란 상하, 좌우를 합친 범위였다는 것을 놓침 -> 문제 조건을 정확하게 이해해야함

*/

function solution(keyinput, board) {
  const answer = [0, 0];
  const limitX = (board[0] - 1) / 2;
  const limitY = (board[1] - 1) / 2;

  for (const key of keyinput) {
    switch (key) {
      case "up":
        if (answer[1] + 1 <= limitY) answer[1] += 1;
        break;
      case "down":
        if (answer[1] - 1 >= -limitY) answer[1] -= 1;
        break;
      case "left":
        if (answer[0] - 1 >= -limitX) answer[0] -= 1;
        break;
      case "right":
        if (answer[0] + 1 <= limitX) answer[0] += 1;
        break;
    }
  }

  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
