/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 음양 더하기
유형: 구현
날짜: 2026-09-08
Review 여부: false

# 📰 문제 설명
- 정수 배열과 해당 정수들의 부호를 담은 부호 배열이 주어짐
- 실제 정수들의 합을 반환하는 함수만들기

# 💡 문제 풀이
- for문으로 주어진 배열의 길이만큼 반복한다.
- i번째 signs 배열의 요소가 true이면 absolutes 배열의 요소가 양수이고
- false라면 음수이다.


# ⏰ 시간복잡도: O(n)
- 주어진 배열의 길이만큼 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 값들의 합을 구하는 것이므로, 새로운 배열의 요소로 추가하는게 아니라,
- 순차적으로 값들을 더해나가면 됐었다.
*/

function solution(absolutes, signs) {
  // 방식1. 배열 사용
  /*
  const arr = [];

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      arr.push(+absolutes[i]);
    } else {
      arr.push(-absolutes[i]);
    }
  }

  return arr.reduce((acc, cur) => (acc += cur));
  */

  // 방식2. 즉시 더하기
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
