/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 배열의 유사도
유형: 배열
날짜: 2026-09-21
Review 여부: true

# 📰 문제 설명
- 두 문자열 배열 s1, s2가 주어짐
- 같은 원소의 개수를 반환하는 함수 만들기
- 두 배열은 중복된 원소를 갖지 않음

# 💡 문제 풀이
- 중첩 for문 이용하기
    - cnt 변수를 0으로 초기화
    - 외부 for문 (루프 변수: i): s1의 원소들을 순회하며 내부 for문을 수행
    - 내부 for문 (루프 변수: j)
        - s2의 원소들을 순회하며 i번째 s1의 원소와 비교
        - 같은 경우 cnt++
    - 외부 for문 종료 후 cnt 반환

# ⏰ 시간복잡도 O(nm)
- s1 배열의 길이를 n, s2 배열의 길이를 m이라 하자.
- 중첩 for문이므로 연산은 n x m 회 수행된다.
- 따라서 전체 시간복잡도는 O(nm)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- ES6 문법의 풀이법을 시도해보지 못했다. 시간이 지난 후에 ES6 문법으로 푸는 시도를 해볼 예정이다.

*/

function solution(s1, s2) {
  let cnt = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) cnt++;
    }
  }
  return cnt;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
