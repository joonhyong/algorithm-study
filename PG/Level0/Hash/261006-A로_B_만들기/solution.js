/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: A로 B 만들기 
유형: 해시, 문자열
날짜: 2026-10-06
Review 여부: false

# 📰 문제 설명
- 문자열 before, after가 주어짐
- before의 순서를 바꾸어 after를 만들 수 있으면 1, 없으면 0을 반환하는 함수 만들기
- before와 after는 모두 소문자이며 길이가 같음

# 💡 문제 풀이
- 변수 mapBefore, mapAfter를 각각 new Map()으로 초기화
- 변수 cnt를 0으로 초기화

- for...of문으로 before를 순회하며 다음 작업을 수행
  - item이 mapBefore에 존재하지 않으면 mapBfore.set(item, 1)
  - 존재하면 mapBefore.set(item, mapBefore.get(item)+1)
  
- for...of문으로 after를 순회하며 다음 작업을 수행
  - item이 mapAfter에 존재하지 않으면 mapAfter.set(item, 1)
  - 존재하면 mapAfter.set(item, mapAfter.get(item)+1)

- for...of문으로 before를 순회하며 다음 작업을 수행
  - if (item[1] === mapAfter.get(item[0])) cnt++

- for문 종료 후 cnt === mapBefore.size()이면 1을, 아니라면 2를 반환

# ⏰ 시간복잡도 O(N)
- for문은 순차적으로 수행됨
- for문 중 가장 많이 수행하는 반복 수는 매개변수로 전달되는 문자열의 길이이다.
- 따라서 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 해시가 아닌 배열로 풀면 더 간결했다.

*/

function solution(before, after) {
  const mapBefore = new Map();
  const mapAfter = new Map();
  let cnt = 0;

  for (const item of before) {
    if (!mapBefore.has(item)) mapBefore.set(item, 1);
    else mapBefore.set(item, mapBefore.get(item) + 1);
  }

  for (const item of after) {
    if (!mapAfter.has(item)) mapAfter.set(item, 1);
    else mapAfter.set(item, mapAfter.get(item) + 1);
  }

  for (const item of mapBefore) {
    if (mapAfter.has(item[0]) && item[1] === mapAfter.get(item[0])) cnt++;
  }

  const answer = cnt === mapBefore.size ? 1 : 0;
  return answer;
}

console.log(solution("olleh", "hello"));
