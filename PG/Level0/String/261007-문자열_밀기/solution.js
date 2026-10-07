/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 문자열 밀기
유형: 문자열
날짜: 2026-10-07
Review 여부: false

# 📰 문제 설명
- 문자열 A, B가 주어짐
- 문자열 민다: 각 문자를 오른쪽으로 한칸씩 밀고, 마지막 문자는 맨앞으로 이동시키는 행위
- A를 밀어서 B가 될 수 있다면 밀어야하는 최소 횟수를, 될 수 없다면 -1을 반환하는 함수 만들기

# 💡 문제 풀이
- slide() 함수 로직
    - 매개변수 s로 문자열을 전달받음
    - 변수 answer를 ""로 초기화
    - for문으로 s를 순회
        - 루프변수 i의 범위: 0 ~ s.length - 2
        - answer에 answer + s[i]를 할당
    - for문 종료 후 answer에 s[s.length-1] + answer를 반환

- solution() 함수 로직 
    - A === B라면 0을 반환
    - answer 변수를 0으로 초기화
    - for문으로 A를 순회
        - 루프변수 i의 범위: 0 ~ A.length - 1
        - A에 slide(A)를 할당
        - answer++
        - A === B 라면 answer 반환
    - for문 종료 후 -1 반환  

# ⏰ 시간복잡도 O(N^2)
- slide() 함수는 for문이 인수의 길이 만큼 반복하므로 시간복잡도가 O(N)이다.
- solution() 함수는 for문이 최대 인수 A의 길이만큼 반복한다.
- 각 반복마다 O(N)의 시간복잡도를 갖는 slide()를 호출한다.
- 따라서 전체 시간복잡도는 O(N × N) = O(N^2)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- slice() 메서드를 활용하면 헬퍼 함수를 만들 필요가 없었다.

*/

function slide(s) {
  let answer = "";

  for (let i = 0; i < s.length - 1; i++) {
    answer += s[i];
  }

  return s[s.length - 1] + answer;
}

function solution(A, B) {
  if (A === B) return 0;

  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    A = slide(A);
    answer++;
    if (A === B) return answer;
  }

  return -1;
}

console.log(solution("hello", "ohell"));
ohellohello;
