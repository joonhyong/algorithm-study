/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 카드 뭉치
유형: 구현
날짜: 2026-10-24
Review 여부: false

# 📰 문제 설명
- 문자열 배열인 카드뭉치 두개 cards1, cards2가 주어짐
- 카드에 적힌 단어로 다음 규칙을 통해 원하는 순서의 단어 배열을 만들 수 있음
    - 원하는 카드 뭉치에서 카드를 순서대로 한장씩 사용
    - 한번 사용한 카드는 다시 사용 불가
    - 카드를 사용하지 않고 다음 카드로 넘어갈 수 없음
    - 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없음
- 단어 배열 goal이 매개변수로 주어질 때, 
- cards1, cards2에 적힌 단어들로 goal을 만들 수 있다면 "Yes", 없다면 "No"를 반환하는 함수 만들기

# 💡 문제 풀이
- 배열의 goal의 순서대로 문장을 만들 때, 카드 뭉치의 순서대로 사용을 해야한다는 점에서 스택 자료형의 필요성을 떠올림
- cards1, cards2를 스택으로 취급하여 배열의 마지막 요소를 스택의 top으로 본다.
- 스택을 pop() 하는 행위를 cards1, cards2의 카드를 사용하는 행위와 일치시키기 위해 두 배열에 reverse() 메서드를 적용
- for문으로 goal을 순회하며 다음 작업을 수행
    - 만약 cards1의 top이 goal[i]와 같다면 cards1.pop()
    - 만약 cards2의 top이 goal[i]와 같다면 cards2.pop()
    - 두 경우 모두 아니라면, 카드뭉치의 단어로 goal 문장을 만들 수 없다고 판단하여 "No"를 반환
- for문을 끝까지 순회했다면, goal의 모든 단어를 순서대로 만들 수 있다는 의미이므로 "Yes" 반환

# ⏰ 시간복잡도 O(N + M + K)
- cards1의 길이: N
- cards2의 길이: M
- goal 배열의 길이: K
- reverse() 메서드는 cards1, careds2 각각에 대하여 시간복잡도가 O(N), O(M)이다.
- for...of문은 goal의 길이만큼 반복하므로 시간복잡도는 O(K)이다.
- reverse() 메서드와 for...of문은 순차 수행하므로 전체 시간복잡도는 O(N + M + K)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 코드의 안정성을 높인다는 이유로 cards1, careds2의 길이가 0인지 확인하는 과정을 넣었으나,
- 문제에서는 카드뭉치의 모든 카드를 사용해야한다는 조건이 없었음
- for문을 끝까지 순회한 순간 이미 goal의 문장을 완성 시킬 수 있다는 의미이므로 "Yes"를 반환하여도 되었음

*/

function solution(cards1, cards2, goal) {
  cards1.reverse();
  cards2.reverse();

  for (const word of goal) {
    if (cards1[cards1.length - 1] === word) cards1.pop();
    else if (cards2[cards2.length - 1] === word) cards2.pop();
    else return "No";
  }

  return "Yes";

  //   if (cards1.length === 0 && cards2.length === 0) return "Yes";
  //   else return "No";
}

console.log(
  solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]),
);
