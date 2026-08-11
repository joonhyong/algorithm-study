/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 특정 문자 제거하기
유형: 문자열
날짜: 2026-08-11
Review 여부: true

# 📰 문제 설명
- 문자열 my_sting과 문자 letter가 주어짐
- my_string에서 letter 제거 후 반환하기
- 이 때, letter는 길이가 1인 영문자

# 💡 문제 풀이
1. my_string의 각 철자를 요소로 갖는 strArr 배열로 변환
2. filter 메서드를 통해 각 요소를 확인하며 letter와 같지 않은 값만 새로운 배열의 요소로 추가하여 반환
3. 새로 반환한 값을 join 메서드를 통해 문자열로 변환 및 반환

# ⏰ 시간복잡도: O(n)
- Array.from(my_string)에서 문자열의 길이(n) 만큼 연산 발생
- .filter(...)에서 배열의 요소 개수(n) 만큼 연산 발생
- .join("")에서 필터링된 배열의 요소 개수(최대 n) 만큼 연산 발생
- 즉, 전체 연산이 3n이므로 시간복잡도는 O(n)

# 🚀 알게 된 점
- filter 메서드는 조건을 만족하는 요소들로 새로운 배열을 반환함.
- 메서드 체이닝을 통해 불필요한 변수를 막을 수 있음. -> 중간 결과를 별도의 변수에 저장하지 않고, 연속적으로 처리할 수 있으므로
- strArr와 answer를 나눈 이유는 가독성을 높이기 위함.

# 💭 아쉬운 점
- 문제 유형이 문자열인 만큼, 배열을 사용하지 않고 해결하는 방법도 시도해보고 싶다.
 */

function solution(my_string, letter) {
  const strArr = Array.from(my_string);
  const answer = strArr.filter((item) => item !== letter).join("");

  return answer;
}

console.log(solution("abcdef", "f"));
