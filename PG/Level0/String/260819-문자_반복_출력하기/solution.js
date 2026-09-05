/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 문자 반복 출력하기
유형: 문자열
날짜: 2026-08-19
Review 여부: true

# 📰 문제 설명
- 문자열 my_string과 숫자 n이 주어질 때
- my_string의 각 문자가 n번씩 반복되는 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
- 빈문자열 answer 생성
- my_string의 길이를 저장하는 변수 len 생성
- 반복문으로 n번씩 반복되는 문자열 만들기
    - 외부 반복문
        - my_string을 순회
        - 내부 반복문을 len회 반복
    - 내부 반복문
        - 해당 문자를 answer에 더하는 연산을 n회 수행

# ⏰ 시간복잡도: O(mn)
- n회의 연산을 my_string의 길이(m)회 반복하므로 시간복잡도는 O(mn)이다. 

# 🚀 알게 된 점
- 입력 크기의 m과 n의 범위가 정해져 있더라도 (범위가 작더라도),
- 시간복잡도는 코드의 입력 크기에 따른 증가율로 표현한다.
- 각 입력 크기 모두 변수이므로, m x n으로 표현한다.

# 💭 아쉬운 점
- ES6 문법으로 푸는 방법도 있다는 것을 알게되었다.
- 앞으로는 반복문으로 먼저 직접 구현하고 -> 다른 문법으로 더 간결하게 구현해보는 방식으로 접근해야겠다.
 */

function solution(my_string, n) {
  const len = my_string.length;
  let answer = "";

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }

  return answer;
}

console.log(solution("hello", 3));
