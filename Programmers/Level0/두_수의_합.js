/**
 * 문제명: 두 수의 합
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-01
 *
 * 풀이
 * - 문자열을 BigInt 타입으로 변환해서 연산
 * - 결과값을 다시 문자열로 변환해서 반환
 * - 문제 바르게 읽기 -> 정수가 10만이 아니라, 문자열의 길이가 10만이었음 -> BigInt 자료형 등장 근거
 * - BigInt() 메서드를 사용하여 해당 문자열을 숫자형이 아닌 Bigint형으로 변환하는 작업이 필요
 *
 * 시간복잡도
 * - O(n)
 * - 만약 연산 시의 자료형이 숫자형이었다면 O(1)이었음 -> CPU가 고정 크기 숫자 하나를 처리하기 때문
 * - BigInt형 연산은 입력 크기에 따라 달라짐 -> 큰 숫자인 경우 연산 시 각 자리를 확인하므로 자릿수가 n이라면 시간복잡도가 O(n)임
 * - BigInt 변환, BigInt 덧셈, 결과물 toString() 모두 O(n)임
 *
 * 알게 된 점
 * - 코딩테스트에서 자바스크립트로 문제를 풀 경우,
 * - 숫자의 최대 범위에 따라 BigInt를 고려할 수 있음
 *   -> 입력범위가 `1 ≤ N ≤ 10^18` 혹은 `1 ≤ N ≤ 10^100`인 경우
 *   -> 문자열로 큰 숫자가 들어오는 경우: a = "123456789012345678901234"
 * - BigInt가 있는 이유는 JavaScript의 Number가 표현할 수 있는 정수 범위를 넘어서는 큰 정수를 정확하게 다루기 위함
 *   -> 자리수가 1~15인 경우: 보통 필요 없음
 *   -> 자리수가 16자리 이상인 경우: 범위 확인
 */

function solution(a, b) {
  let answer = 0;
  const numA = BigInt(a);
  const numB = BigInt(b);
  answer = (numA + numB).toString();
  return answer;
}

const result = solution(0, 0);
console.log(result);
