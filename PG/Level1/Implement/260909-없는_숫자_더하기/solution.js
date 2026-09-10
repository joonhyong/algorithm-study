/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 없는 숫자 더하기
유형: 구현
날짜: 2026-09-09
Review 여부: false

# 📰 문제 설명
- 0-9의 숫자 중 일부가 들어있는 정수 배열 numbers가 있음
- numbers 배열에 없는 숫자를 찾아 더한 수를 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 숫자형 방식
  - 0부터 9까지의 합에서 numbers의 요소에 속하는 숫자들을 뺀다. 
  - 0부터 9까지의 합을 sum 변수에 저장한다.
  - for문으로 numbers 배열의 길이만큼 반복한다.
    - sum - numbers[i]를 수행한다.
  - for문 종료 후 sum을 반환한다.

- 방식2. 문자열 방식: replcae() 메서드 -> 처분
  - str 변수를 "0123456789"로 초기화한다.
  - replace() 메서드를 통해 numbers의 요소들을 발견했을 경우 ""로 변환시킨다.
  - 해당 문자열을 split() 메서드를 통해 배열로 변환 후 reduce() 메서드로 요소들의 합을 구한다.

# ⏰ 시간복잡도: O(n)
- 입렵값의 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 정규표현식에 []를 씌우지 않으면 해당 문자열 자체를 덩어리로 검사함
- 정규표현식에 []를 씌우면 해당 문자열 하나하나를 검사 대상으로 인식함
- 정규표현식에 변수를 쓰려면, new RegExp() (정규식 객체 생성자)를 사용해야함

# 💭 아쉬운 점
*/

function solution(numbers) {
  // let sum = 0;

  // for (let i = 1; i <= 9; i++) {
  //   sum += i;
  // }

  let sum = Array.from({ length: 9 }, (_, i) => i + 1).reduce((acc, cur) => (acc += cur));

  for (let j = 0; j < numbers.length; j++) {
    sum -= numbers[j];
  }

  return sum;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
