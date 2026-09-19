/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 인덱스 바꾸기
유형: 문자열
날짜: 2026-09-20
Review 여부: false

# 📰 문제 설명
- 문자열 my_string과 정수 num1, num2가 주어짐
- my_string의 num1 인덱스의 문자와 num2 인덱스의 문자를 바꾼 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
- 변수 arr를 my_string에 split("")메서드를 적용시킨 결과값으로 초기화
- temp 변수에 num1값을 저장
- splice() 메서드 사용
    - arr의 num1 인덱스의 요소를 my_string의 num2 인덱스의 문자로 수정
    - arr의 num2 인덱스의 요소를 my_string의 temp 인덱스의 문자로 수정
- arr에 join("")을 적용시켜 반환

# ⏰ 시간복잡도 O(n)
- split() 메서드, splice() 메서드 각각의 시간복잡도는 O(n)이다.
- 연산은 순차적으로 수행되므로 전체 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- splice()는 배열 메서드이다. (문자열에 사용 불가능)
- split() 메서드에 구분자를 주지 않으면, 해당 문자열 전체를 하나의 요소로 갖는 배열로 변환 

# 💭 아쉬운 점
- 구조분해할당을 이용하면 시간복잡도가 상수 시간복잡도로 풀 수 있었다.

*/

function solution(my_string, num1, num2) {
  const arr = my_string.split("");
  const temp = num1;

  arr.splice(num1, 1, my_string[num2]);
  arr.splice(num2, 1, my_string[temp]);

  return arr.join("");
}

console.log(solution("hello", 1, 2));
