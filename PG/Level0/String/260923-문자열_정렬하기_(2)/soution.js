/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 문자열 정렬하기 (2)
유형: 문자열
날짜: 2026-09-23
Review 여부: false

# 📰 문제 설명
- 영어 대소문자로 이루어진 my_string 문자열이 주어짐
- my_string을 모두 소문자로 바꾸고 알파벳을 순서대로 정렬한 문자열을 반환

# 💡 문제 풀이
- my_string에 toLowerCase() 적용시킨 결과값을 split("")으로 배열로 변환
- 해당 배열에 sort() 메서드 적용시킨 후 join("")으로 다시 문자열로 변환

# ⏰ 시간복잡도 O(N)
- my_string의 길이를 n이라고 하자.
- toLowerCase(), split(), join() 메서드의 시간복잡도는 모두 O(n)이다.
- sort() 메서드의 시간복잡도는 O(n log n)이다.
- 연산이 순차 수행되므로 전체 시간복잡도는 O(n log n)이다.

# 🚀 알게 된 점
- sort() 메서드는 배열 메서드이다.

# 💭 아쉬운 점

*/

function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}

console.log(solution("Bcad"));
