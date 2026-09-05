/**
 * 문제명: 각도기
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-05
 * Review 여부: false
 *
 * 풀이
 * - 조건문을 통해 angle의 범위 특정
 *
 * 시간복잡도
 * - O(1)
 * - 입력값에 상관없이 비교연산이 최대 6번만 일어나므로, 시간복자도는 O(1)이다.
 *
 * 알게 된 점
 * - 자바스크립트에서는 "연속 비교"가 안됨 (예시: 0 < angle < 90)
 * - 왼쪽부터 순서대로 나누어 계산하기 때문 (예시: 0 < angle -> true < 90 -> 1 < 90 -> true)
 * - 단일 비교와 논리 연산자를 함꼐 씀으로서 연속 비교를 대체한다.
 */

function solution(angle) {
  let answer = 0;

  if (0 < angle && angle < 90) {
    answer = 1;
    return answer;
  } else if (angle === 90) {
    answer = 2;
    return answer;
  } else if (90 < angle && angle < 180) {
    answer = 3;
    return answer;
  } else if (angle === 180) {
    answer = 4;
    return answer;
  }
}

console.log(solution(180));
