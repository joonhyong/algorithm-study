/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 배열 자르기
유형: 배열
날짜: 2026-08-20
Review 여부: false

# 📰 문제 설명
- 정수 배열 numbers와 정수 num1, num2가 주어짐
- numbers의 num1번쨰 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 반환하는 함수 만들기
- num1과 num2의 범위는 0이상 numbers 배열의 길이 이하이다.

# 💡 문제 풀이
- 방법1. 단순 반복문 사용하기
    - numbers 배열의 길이를 len 변수에 저장
    - numbers 배열을 순회하며 i가 num1 이상, num2 이하인 경우
    - numbers[i]를 answer 배열의 요소로 추가
    - for문 종료 후 answer 배열 반환

- 방법2. splice() 메서드 사용하기
    - num1 번쨰 인덱스 부터 삭제할 것이므로 splice() 메서드의 첫번째 인수는 num1
    - num1 인덱스 부터 num2 인덱스 까지의 개수는 num2 - num1 + 1 이므로 splice() 메서드의 두번째 인수는 num2 - num1 + 1

# ⏰ 시간복잡도: O(n)
- 입력값의 배열의 길이에 따라 연산의 반복횟수가 결정되므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- splice() 메서드
    - 정의: 배열의 특정 위치에 있는 요소를 추가/교체/삭제하여 배열의 내용을 변경하는 배열 메서드
    - 형식
        - `array.splice(start, deleteCount, item1, item2, ...)`
        - start: 변경을 시작할 인덱스
        - deleteCount: 삭제할 요소의 개수
        - item1, item2, ...: 삭제한 위치에 추가할 요소
    - 특징
        - 원본 배열을 직접 수정 (Mutate)
        - 삭제한 요소를 반환 (삭제한 요소가 없다면 [] 반환)
        - 음수 인덱스 사용 가능
    - 문법
        `const arr=[1,2,3,4,5]`
        1. 요소 삭제
            - `arr.splice(2, 2)`
            - 인덱스 2부터 2개의 요소 삭제
            - `arr.splice(2)`
            - deleteCount 생략 시, start 인덱스 부터 배열 끝까지 전부 삭제
        2. 요소 추가
            - `arr.splice(2, 0, 3)`
            - deleteCount로 0 전달
            - 인덱스 2 위치에 3을 삽입
        3. 요소 교체
            - 삭제와 추가를 동시에
            - `arr.splice(2, 1, 10)`
            - 인덱스 2 위치의 데이터를 삭제하고 10을 삽입
        4. 요소 여러개 교체
            - `arr.splice(1, 2, 10, 20)`
            - 인덱스 1 위치의 요소부터 2개의 데이터 삭제 후 10, 20을 추가
            - 즉, 인덱스 1,2 위치의 요소를 10, 20으로 교체
    

# 💭 아쉬운 점
 */

function solution(numbers, num1, num2) {
  // 방법1. 단순 반복문
  /*
  const len = numbers.length;
  const answer = [];

  for (let i = 0; i < len; i++) {
    if (i >= num1 && i <= num2) {
      answer.push(numbers[i]);
    }
  }

  return answer;
  */

  // 방법2. splice() 메서드
  const answer = numbers.splice(num1, num2 - num1 + 1);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));
