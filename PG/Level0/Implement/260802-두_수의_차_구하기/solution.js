/**
 * 문제명: 두 수의 차 구하기
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-02
 *
 * 풀이
 * - 반환할 연산 결과 값을 저장할 변수를 0으로 초기화
 * - 해당 변수에 인수의 차를 즉시 할당
 * - 해당 변수 출력
 *
 * 시간복잡도
 * - O(1)
 * - 빼기 연산이 한 번만 수행되기 떄문
 *
 * 알게 된 점
 */

function solution(num1, num2) {
  let answer = 0;
  answer = num1 - num2;
  return answer;
}

let result = solution(4, 7);
console.log(result);
