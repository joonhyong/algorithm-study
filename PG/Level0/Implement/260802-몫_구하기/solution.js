/**
 * 문제명: 몫 구하기
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-02
 *
 * 풀이
 * - 반환할 연산 결과 값을 저장할 변수를 0으로 초기화
 * - 해당 변수에 인수의 나눗셈을 및 Math.floor() 적용한 값을 할당
 * - 해당 변수 출력
 *
 * 시간복잡도
 * - O(1)
 * - 입력값에 상관없이 나누기, Math.floor 연산이 일정하게 (한 번씩) 수행되기 때문
 *
 * 알게 된 점
 * - JavaScript에는 % 연산자가 없다!
 */

function solution(num1, num2) {
  let answer = 0;
  answer = Math.floor(num1 / num2);
  return answer;
}

console.log(solution(7, 3));
