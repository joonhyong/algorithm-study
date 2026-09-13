/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 컨트롤 제트
유형: 문자열
날짜: 2026-09-13
Review 여부: false

# 📰 문제 설명
- 문자열 s가 주어짐
- s는 숫자와 "Z"가 공백으로 구분되어 담긴 문자열
- 문자열에 있는 숫자를 차례대로 더하되, "Z"가 나오면 바로 전에 더했던 숫자를 뺌
- 주어진 s의 결과값을 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 배열
    - answer 변수를 0으로 초기화
    - s에 split(" ") 메서드 적용한 값을 arr 변수에 저장
    - for문으로 arr를 순회
        - 순회하며 해당 요소가 "Z"가 아니라면 숫자형으로 변환하여 answer에 더하기
        - "Z"라면 i-1 인덱스의 숫자(바로 전에 더했던 숫자)를 answer에서 빼기
    - for문 종료 후 answer 반환

- 방식2. 스택
    - stack 변수를 빈배열로 초기화 -> 스택으로 사용할 예정
    - s에 split(" ") 메서드를 적용시킨 결과값을 arr 변수에 저장
    - for문으로 arr를 순회하며 아래의 과정을 수행
        - "Z"인 경우 stack에서 pop()
        - "Z"가 아닌 경우 Number로 변환하여 stack에 push
    - for문 종료 후 stack 배열의 요소들의 합을 반환

# ⏰ 시간복잡도: O(n)
- split() 메서드, for문, reduce() 메서드가 순차적으로 수행되며 각각 시간복잡도는 O(n)이므로
- 최종 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- stack을 활용한 문제 풀이
    - "Z"는 직전에 더한 숫자를 취소하므로 stack의 pop() 연산으로 구현 가능
    - pop(), push() 메서드는 시간복잡도가 O(1)이다.

- 빈배열에 reduce() 메서드 사용 시 오류 발생 
    - 대상 배열이 빈배열인데 두번째 인수(초기값)를 생략한 경우, reduce() 메서드가 연산을 시작할 기준값이 없어 오류 발생
    - 두번쨰 인수로 초기값을 할당함으로써 해결 가능

# 💭 아쉬운 점
*/

function solution(s) {
  // 방식1. for문 내부에서 arr 배열 요소를 숫자형으로 변환하기
  /*
  let answer = 0;
  const arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") answer -= Number(arr[i - 1]);
    else answer += Number(arr[i]);
  }

  return answer;
  */

  // 방식2. arr 배열을 생성할 때 "Z"를 제외한 요소들을 숫자형으로 변환하기
  /*
  let answer = 0;
  const arr = s.split(" ").map((item) => {
    if (item === "Z") return item;
    else return Number(item);
  });

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") answer -= arr[i - 1];
    else answer += arr[i];
  }

  return answer;
  */

  // 방식3. stack 배열 이용
  const stack = [];
  const arr = s.split(" ");

  for (const item of arr) {
    if (item === "Z") stack.pop();
    else stack.push(Number(item));
  }

  return (answer = stack.reduce((acc, cur) => (acc += cur), 0));
}

console.log(solution("-1 -2 -3 Z"));
