/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 중복된 숫자 개수
유형: 배열
날짜: 2026-09-23
Review 여부: false

# 📰 문제 설명
- 정수 배열 array와 정수 n이 주어짐
- array에 n이 몇 개 있는지 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. for문 사용
    - answer 변수를 0으로 초기화
    - for문으로 array를 순회하며 다음 작업을 수행
        - array[i]의 값이 n과 같다면 answer++
    - for문 종료 후 answer 반환

- 방식2. filter 메서드 사용
    - 콜백함수로 n과 같은 요소만 남겨서 반환
    - filter메서드의 길이를 반환

# ⏰ 시간복잡도 O(N)
- 방식1, 방식2 모두 array의 길이만큼 시간복잡도를 가지므로 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(array, n) {
  // 방식1. for문 사용
  /*
  let answer = 0;
  const len = array.length;

  for (let i = 0; i < len; i++) {
    if (array[i] === n) answer++;
  }

  return answer;
  */
  // 방식2. filter 메서드 사용
  return array.filter((item) => item === n).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
