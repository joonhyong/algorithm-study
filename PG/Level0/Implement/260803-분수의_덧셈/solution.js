/**
 * 문제명: 분수의 덧셈
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-02
 * Review 여부: true
 *
 * 풀이
 * - 반환할 연산 결과 값을 저장할 변수 answer를 []로 초기화
 * - 분수의 연산 과정
 *   1. 통분
 *     - 분모를 통합
 *     - 각 분수의 분자에 해당 분수의 분모에 곱한 값을 동일하게 곱함
 *   2. 분자끼리 더함
 *   3. 기약 분수로 약분 진행 -> 유클리드 호제법을 통해 구한 gcd로 numer와 denom을 나눔
 * - 약분된 numer와 denom을 answer에 추가
 * - answer 반환
 *
 * 시간복잡도
 * - O(logn)
 * - 유클리드 호제법에서 while 반복문이 사용되며, 매 반복마다 큰 수를 작은 수로 나눈 나머지를 사용한다.
 * - 이 과정에서 두 수의 크기가 빠르게 감소하며, 최악의 경우에도 반복 횟수가 입력크기에 대해 로그 수준으로 증가한다.
 * - 즉, 유클리드 호제법은
 *   -> 나머지를 이용하여 값의 크기를 빠르게 줄이며,
 *   -> 반복 횟수는 로그 수준으로 증가함
 *
 * 알게 된 점
 * - 두 수의 최대공약수 찾기: 유클리드 호제법
 *   -> 두 수 a를 b로 나눈 나머지 r이 있을 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같음
 *   -> 따라서 나머지가 0이 될 때까지 반복하면, 그 때의 나누는 수가 최대공약수가 됨
 */

function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  let [numer, denom] = [0, 0];
  let gcd = 0;
  numer = numer1 * denom2 + numer2 * denom1;
  denom = denom1 * denom2;

  let a = numer;
  let b = denom;
  let r = 0;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  gcd = a;

  answer = [(numer /= gcd), (denom /= gcd)];

  return answer;
}

console.log(solution(1, 2, 3, 4));
