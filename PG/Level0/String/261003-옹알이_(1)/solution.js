/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 옹알이 (1)
유형: 문자열
날짜: 2026-10-03
Review 여부: true

# 📰 문제 설명
- 문자열 배열 babbling이 주어짐
- 조카는 "aya", "ye", "woo", "ma" 네가지를 말할 수 있음
- babbling에서 조카가 발음할 수 있는 단어의 개수를 반환하는 함수 만들기

# 💡 문제 풀이
- babbling 배열을 for문으로 순회
    - babbling[i]의 값을 다음 값으로 재할당한다.
    - babbling[i]에 reaplce() 메서드를 적용시킨다.
        - 첫번째 인수: /aya|ye|woo|ma/g
        - 두번째 인수: ""
- babbling 배열에 reduce() 메서드를 통해 cur 요소가 "" 경우에만 acc의 값을 1 증가한다. 

# ⏰ 시간복잡도 O(N x M)
- babbling의 길이: N
- babbling 요소의 길이: M
- for문은 babbling의 길이 만큼 반복
- for문 내부의 replace() 메서드는 요소의 자릿수 만큼 반복
- 따라서 전체 시간복잡도는 O(N x M)이다.

# 🚀 알게 된 점
- test() 메서드로는 존재 여부만 확인이 가능함
    - 따라서 전체 문자열이 특정 문자열들로만 구성되어있는지 확인이 불가능
- replace() 메서드로는 특정 문자열을 정해둔 문자열로 변경 가능
    - 따라서 해당 문자열이 정해준 문자열로만 구성되어있는 경우, 특정 문자열들로만 구성되어 있었다고 판단 가능

# 💭 아쉬운 점
- 반례의 케이스
    - 기존 코드에서는 "wyeoo"의 경우 ""로 치환했을때 양끝의 문자가 붙으면서 새로운 발음이 만들어짐
    - 따라서 " "으로 치환 후 .trim()을 적용하는 방식으로 보완
- 정규표현식 없이 푸는 방식으로도 시도해보고 싶다.

*/

function solution(babbling) {
  for (let i = 0; i < babbling.length; i++) {
    // babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g, "");
    babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g, " ").trim();
  }

  return babbling.reduce((acc, cur) => {
    if (cur === "") acc += 1;
    return acc;
  }, 0);
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
