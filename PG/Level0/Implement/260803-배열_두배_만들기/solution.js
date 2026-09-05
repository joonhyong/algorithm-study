/**
 * 문제명: 배열 두배 만들기
 * 사이트: Programmers
 * 레벨: Level 0
 * 날짜: 2026-08-02
 * Review 여부: false
 *
 * 풀이
 * 1. 반복문 사용
 * - 인수인 numbers 배열의 길이 만큼 반복
 * - numbers의 요소들을 순차적으로 2배씩 하여 answer 배열에 삽입
 * - answer 배열 반환
 *
 * 2. map() 함수 사용
 * - 인수인 numbers 배열에 map()함수 적용한 결과값을 answer에 할당
 * - 콜백함수로는 요소를 2배 곱하는 코드를 작성
 * - answer 반환
 *
 * 시간복잡도
 * - O(n)
 * - 입력하는 배열의 길이에 따라 반복 횟수가 정해지므로 시간복잡도는 O(n)이다.
 *
 * 알게 된 점
 * - map() 함수 사용법
 * - JavaScript를 사용하므로, ES6 문법을 이용할 줄도 알아야 함
 */

function solution(numbers) {
  // 1. 반복문 사용
  //   let answer = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     answer.push(numbers[i] * 2);
  //   }
  //   return answer;

  // 2. map 메서드 사용 (ES6 문법)
  let answer = numbers.map((number) => number * 2);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
