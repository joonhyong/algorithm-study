/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: n의 배수 고르기
유형: 배열
날짜: 2026-09-22
Review 여부: false

# 📰 문제 설명
- 정수 n과 정수 배열 numlist가 주어짐
- numlist에서 n의 배수가 아닌 수들을 제거한 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. for문 사용
    - answer 변수를 빈배열로 초기화
    - for문으로 numlist를 순회하며 다음 작업을 수행
        - numlist[i]를 n으로 나눈 나머지가 0이라면, numlist[i]를 answer 배열에 추가
    - for문 종료 후 answer 반환

- 방식2. filter() 메서드 사용
    - filter() 메서드의 콜백함수의 매개변수를 item으로 작성
    - item을 n으로 나눈 나머지가 0인 경우 참을 반환하도록 작성
    - filter() 메서드의 결과값을 반환

# ⏰ 시간복잡도 O(N)
- for문의 반복횟수와 filter 메서드 연산 작업 수 모두 numlist의 길이이다.
- 따라서 방식1, 방식2 모두 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(n, numlist) {
  // 방식1. for문 사용
  /*
  const answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) answer.push(numlist[i]);
  }

  return answer;
  */

  // 방식2. filter() 메서드 사용
  return numlist.filter((item) => item % n === 0);
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
