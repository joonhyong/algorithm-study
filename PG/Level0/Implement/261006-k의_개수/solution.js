/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: k의 개수
유형: 구현
날짜: 2026-10-06
Review 여부: false

# 📰 문제 설명
- 정수 i, j, k가 주어짐
- i부터 j까지 k가 몇번 등장하는지 반환하는 함수 만들기

# 💡 문제 풀이
- answer 배열을 0으로 초기화
- 중첩 for문으로 다음 작업을 수행
    - 외부 for문: i부터 j까지 순회 (루프 변수: x)
    - 내부 for문: String(x)의 각 자리의 문자를 순회하며 k와 같다면 answer++ 
- for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(N x M)
- i부터 j까지의 수를 N, j의 자릿수를 M이라 하자.
- 중첩 for문이므로 전체 시간복잡도는 O(N x M)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 중첩 for문이 아닌 다른 방식으로도 풀어볼 예정이다.

*/

function solution(i, j, k) {
  let answer = 0;

  for (let x = i; x <= j; x++) {
    const num = String(x);
    for (let y = 0; y < num.length; y++) {
      if (num[y] === String(k)) answer++;
    }
  }

  return answer;
}

console.log(solution(1, 13, 1));
