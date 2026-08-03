/**
 * 문제명: 나이 출력
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-02
 * Review 여부: false
 *
 * 풀이
 * - 2022에서 연도를 빼면 나이보다 1이 적다.
 * - 따라서 2022에서 연도를 뺀 후 1을 더한 것이 나이다.
 *
 * 시간복잡도
 * - O(1)
 *
 * 알게 된 점
 */

function solution(age) {
  let answer = 0;
  answer = 2022 - age + 1;
  return answer;
}

console.log(solution(40));
