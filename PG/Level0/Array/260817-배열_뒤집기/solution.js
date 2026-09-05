/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 배열 뒤집기
유형: 배열
날짜: 2026-08-17
Review 여부: false

# 📰 문제 설명
- 정수가 들어있는 배열 num_list의 원소 순서를 거꾸로 뒤집은 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- 빈 배열 answer 배열 생성

- 빙법1. pop 메서드 사용
    - 배열의 마지막 요소를 제거 및 반환하는 pop 메서드를 사용
    - num_list.pop()의 반환값을 answer 배열에 추가
    - 해당 작업반복문으로 배열의 길이만큼 수행
    - 반복문 종료 후 answer 배열 반환

    - 방법2. 배열 역순회
        - 배열의 마지막 원소부터 거꾸로 순회하기
        - 해당 원소를 answer 배열에 추가
        - 반복문 종료 후 answer 배열 반환

# ⏰ 시간복잡도: O(n)
- 입력값인 num_list 배열의 길이만큼 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- reverse 메서드를 통해 한줄로도 구현이 가능했다는 사실을 알게되었다.
- ES6 문법에 대해 공부를 많이 해야함을 느꼈다.
 */

function solution(num_list) {
  // 방법1. pop 메서드 사용
  /*
  const answer = [];
  const len = num_list.length;
  for (let i = 0; i < len; i++) {
    answer.push(num_list.pop());
  }
  return answer;
  */

  // 방법2. 배열 역순회
  const answer = [];
  const len = num_list.length;

  for (let i = len - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
