/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 배열 회전시키기
유형: 배열
날짜: 2026-08-25
Review 여부: false

# 📰 문제 설명
- 정수가 담긴 배열 numbers와 문자열 direction이 주어짐
- 배열 numbers의 원소들을 direction 방향으로 한 칸 씩 회전시킨 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- right인 경우
    - 맨 뒤의 요소를 앞으로 옮긴 후 나머지 요소들을 뒤로 당기므로
    - `numbers.unshift(numbers.pop());`를 수행
- left인 경우
    - 맨 앞의 요소를 뒤로 옮긴 후 나머지 요소들을 앞으로 당기므로
    - `numbers.push(numbers.shift());`를 수행

# ⏰ 시간복잡도 O(N)
- unshift(), shift() 메서드는 배열의 길이 만큼의 시간복잡도를 갖는다.
- 입력값인 numbers의 길이에 따라 연산 횟수가 달라지므로 시간복잡도는 O(N)이다.

# 🚀 알게 된 점
- 배열의 요소 조작 관련 메서드
    - push() 메서드: 배열의 맨 뒤에 요소 추가
    - pop() 메서드: 배열의 맨 뒤의 요소 제거 및 반환
    - unshift() 메서드: 배열의 맨 앞의 요소 추가
    - shift() 메서드: 배열의 맨 앞의 요소 제거 및 반환

# 💭 아쉬운 점
- numbers.unshift(numbers.pop()) 혹은 numbers.push(numbers.shift()) 연산은 한번만 해도 원하는 결과값이 나온다는 사실을 몰랐다.
- 해당 연산은 `1번 수행`될 때 마다 `1칸씩 회전`시키므로 switch문 내부 동작 코드에 for문을 작성할 필요가 없었다.
- 삼항 연산자를 통해 코드를 보다 간략하게 나타낼 수 있다!
*/

function solution(numbers, direction) {
  // 방법1. switch문
  /*
  switch (direction) {
    case "right": {
      numbers.unshift(numbers.pop());

      break;
    }
    case "left": {
      numbers.push(numbers.shift());

      break;
    }
  }

  return numbers;
  */

  // 방법2. 삼항 연산자
  direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());

  return numbers;
}

console.log(solution([1, 2, 3], "left"));
