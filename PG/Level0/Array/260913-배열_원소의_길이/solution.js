/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 배열 원소의 길이
유형: 배열
날짜: 2026-09-13
Review 여부: false

# 📰 문제 설명
- 문자열 배열 strlist가 주어짐
- strlist 각 워손의 길이를 담은 배열을 반환하는 함수만들기

# 💡 문제 풀이
- answer 변수를 빈배열로 초기화
- for문으로 strlist 배열을 순회하며 다음의 작업을 수행
    - 해당 요소의 길이를 answer 배열에 추가
- for문 종료 후 answer 배열 반환

# ⏰ 시간복잡도: O(n)
- for문과 map() 메서드 모두 전달받은 strlist의 길이에 비례하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- ES6 문법으로 풀어보는 시도를 하지 않았다.
- map()를 통해 해당 문제를 풀 수 있었다.
*/

function solution(strlist) {
  // 방식1. for문
  /*
  const answer = [];

  for (const item of strlist) {
    answer.push(item.length);
  }

  return answer;
  */

  // 방식2. map() 메서드
  return strlist.map((item) => item.length);
}

console.log(solution(["We", "are", "the", "world!"]));
