/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 7의 개수
유형: 구현
날짜: 2026-09-23
Review 여부: false

# 📰 문제 설명
- 정수 배열 array가 주어짐
- 7의 개수가 몇개인지 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 문자열로 변환
    - sum 변수를 0으로 초기화
    - 외부 for문: array 배열을 순회하며 다음 작업을 수행
        - 변수 item을 array[i]을 toString(), split("") 메서드를 적용시킨 값으로 초기화
        - 내부 for문: item을 순회하며 다음 작업을 수행
            - item[j]가 "7"이라면 sum++
    - for문 종료 후 sum 반환
        
- 방식2. 숫자 연산
    - sum 변수를 0으로 초기화
    - 외부 for문: array 배열을 순회하며 다음 작업을 수행
        - num 변수를 array[i]로 초기화
        - while문 수행
            - 루프 조건: num > 0
            - num을 10으로 나눈 나머지가 7인 경우 sum++
            - num에 num을 10으로 나눈 몫을 할당
    - for문 종료 후 sum 반환

# ⏰ 시간복잡도
- 방식1. 문자열로 변환
    - array의 길이: n
    - 외부 for문이 n회 반복하므로 시간복잡도는 O(n)
    - toString(), split() 메서드는 원소의 자릿수에 비례하는 작업을 수행
    - 내부 for문은 원소의 자릿수 만큼 반복 
    - 이 때, 원소의 범위가 0 이상 100,000 이하이므로 최대 6자리이며, 자릿수를 상수 처리 가능
    - 전체 시간복잡도는 O(n)이다.

- 방식2. 숫자 연산
    - array의 길이: n
    - 외부 for문이 n회 반복하므로 시간복잡도는 O(n)
    - while문은 원소의 자릿수 만큼 반복
        - 이 때, 원소의 범위가 0 이상 100,000 이하이므로 최대 6자리이며, 자릿수를 상수 처리 가능
    - 전체 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(array) {
  // 방식1. 문자열로 변환
  /*
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const item = array[i].toString().split("");

    for (let j = 0; j < item.length; j++) {
      if (item[j] === "7") sum++;
    }
  }

  return sum;
  */

  // 방식2. 숫자 연산
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    while (num > 0) {
      if (num % 10 === 7) sum++;
      num = Math.trunc(num / 10);
    }
  }

  return sum;
}

console.log(solution([7, 77, 17]));
