/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: OX퀴즈
유형: 구현
날짜: 2026-09-22
Review 여부: false

# 📰 문제 설명
- 각 요소가 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어짐
- 수식이 옳다면 "O", 옳지 않다면 "X"를 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 빈배열로 초기화
- for...of문으로 quiz배열을 순회하며 다음 작업을 수행
    - 각 요소는 i 변수
    - item 변수를 i.split(" ").map(Number)으로 초기화
    - item[1] === "+"이면 
        - Number(item[0]) - Number(item[2])의 결과값을 item[4]과 비교한 값을 result 변수에 할당
        - result의 값이 truthy이면 answer 배열에 "O"를, 아니라면 "X"를 추가
    - item[1] === "-"이면
        - Number(item[0]) - Number(item[2])의 결과값을 item[4]과 비교한 값을 result 변수에 할당
        - result의 값이 truthy이면 answer 배열에 "O"를, 아니라면 "X"를 추가
- for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(N)
- for문은 quiz 배열의 길이만큼 반복한다.
- for문 내부의 연산 횟수는 정해져있으므로 상수 시간복잡도를 갖는다.
- 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(quiz) {
  const answer = [];

  for (const i of quiz) {
    const item = i.split(" ");

    const result =
      item[1] === "+"
        ? Number(item[0]) + Number(item[2]) === Number(item[4])
        : Number(item[0]) - Number(item[2]) === Number(item[4]);

    answer.push(result ? "O" : "X");
  }

  return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
