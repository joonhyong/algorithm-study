/**
 * 문제명: 숫자 비교하기
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-02
 *
 * 풀이
 * - 반환할 연산 결과 값을 저장할 변수 answer를 0으로 초기화
 * - 두 인수를 비교하여
 *   -> 같다면 변수 answer에 1을 할당
 *   -> 같지 않다면 answer에 -1을 할당
 * - 해당 변수 반환
 *
 * 시간복잡도
 * - O(1)
 * - 입력값에 상관없이 === 비교 연산이 일정하게 (한 번) 수행되기 때문
 *
 * 알게 된 점
 * - 조건문을 삼항연산자로도 표현이 가능하다.
 * - 삼항연산자를 쓰면 코드의 가독성이 올라가고, 라인수가 줄어든다는 장점이 있다.
 */

function solution(num1, num2) {
  //   let answer = 0;
  //   if (num1 === num2) {
  //     answer = 1;
  //   } else {
  //     answer = -1;
  //   }
  //   return answer;

  let answer = 0;
  answer = num1 === num2 ? 1 : -1;
  return answer;
}

console.log(solution(7, 3));
