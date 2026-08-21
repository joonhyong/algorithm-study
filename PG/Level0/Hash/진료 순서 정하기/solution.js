/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 진료 순서 정하기
유형: 배열
날짜: 2026-08-21
Review 여부: true

# 📰 문제 설명
- 정수 배열 emergency가 주어짐
- 정수는 응급도를 의미
- 응급도가 높은 순서대로 진료 순서를 정한 answer 배열을 반환하는 함수 만들기
- answer 배열의 요소들은 emergency 배열의 각 요소들의 진료 순서를 의미하는 숫자이다.
- emergency에는 중복된 요소가 없음

# 💡 문제 풀이
- `rank` 변수 생성 및 0으로 초기화
- `len` 변수 생성 및 emergency 배열의 길이로 초기화
- emergency의 요소들을 Key로 갖는 Map `emergencyMap` 생성
- 반복문으로 len 만큼 반복하며 아래의 연산 수행
    - emergency 배열 중 가장 큰 요소를 확인 및 삭제
    - rank++ 수행
    - emergencyMap에서 해당 요소(가장 큰 요소)를 Key로 갖는 Value를 rank로 수정
- emergencyMap를 순회하여 각 Key들의 Value들을 요소로 갖는 배열 `answer` 생성 (이 때 순서유지하는 것에 유의)
- answer 배열 반환

# ⏰ 시간복잡도: O(n^)
- 1번쨰 반복문: `emergencyMap` Map 생성하는데 O(n) 소요
- 2번째 반복문
  - 반복문 내부에서 `Math.max()`, `indexOf()`, `splice()` 수행
  - 각 연산은 최대 O(n)이므로 한 번의 반복은 O(n)
  - 해당 반복문을 n회 수행하므로 O(n^)
- 3번째 반복문: `answer` 배열 생성하는데 O(n) 소요
- 따라서 시간복잡도는 O(n^)이다.

# 🚀 알게 된 점
- 배열에서 요소 삭제하는 방법
    - filter() 메서드 사용 -> 삭제하려는 요소가 중복으로 존재 O
    - splice() + indexOf() 사용 -> 삭제하려는 요소가 중복으로 존재 X
- Map은 순서를 유지한다.
- 순위는 Math.max()를 응용하여 구한다.
- for...of문
    - 정의
        - 반복 가능한 객체(Iterable)의 내부 요소를 하나씩 꺼내어 순회할 때 사용하는 반복문
        - 반복 가능한 객체 예시 - 배열, 문자열, Map, Set
    - 형식
        ```js
        for (const 변수명 of 반복가능한_객체) {
             // 실행할 코드
        }
        ```
    - 사용 예시: Map 처럼 인덱스로 접근이 불가능한 Iterable 객체에 사용

# 💭 아쉬운 점
- 정렬을 사용하면 코드가 더 간결해지며, 시간복잡도를 줄일 수 있었다.
  - 내림차순으로 정렬 시 결과물의 인덱스+1이 우선순위이며,
  - 정렬 시의 시간복잡도는 O(nlogn)이다. 
 */

function solution(emergency) {
  let rank = 0;
  const len = emergency.length;

  const emergencyMap = new Map();
  for (let i = 0; i < len; i++) {
    emergencyMap.set(emergency[i], 0);
  }

  for (let i = 0; i < len; i++) {
    const maxNum = Math.max(...emergency);
    rank++;
    emergencyMap.set(maxNum, rank);
    emergency.splice(emergency.indexOf(maxNum), 1);
  }

  const answer = [];
  for (const [key, value] of emergencyMap) {
    answer.push(value);
  }

  return answer;
}

console.log(solution([3, 76, 24]));
