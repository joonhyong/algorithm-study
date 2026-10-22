/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 문자열 내 마음대로 정렬하기
유형: 문자열
날짜: 2026-10-22
Review 여부: false

# 📰 문제 설명
- 문자열을 요소로 갖는 배열 strings와 정수 n이 매개변수로 주어짐
- strings를 각 요소의 n번째 인덱스의 글자를 기준으로 오름차순 정렬하는 함수 만들기
- n번째 인덱스의 글자가 같은 경우 사전순으로 앞선 문자열이 앞쪽에 위치

# 💡 문제 풀이
- strings 배열에 sort() 메서드 적용
- 콜백함수 내용

# ⏰ 시간복잡도 O(N log N)
- strings의 길이: N
- sort()메서드는 strings를 대상으로 수행하므로 시간복잡도는 O(N log N)이다.

# 🚀 알게 된 점
- sort() 메서드의 콜백함수가 반환하는 할 때 비교하는 값은 숫자여야 함
- 따라서 문자열을 기준으로 정렬할때는 localeCompare() 메서드를 사용해야함
- localeCompare() 메서드
  - 형식: `기준문자열.localeCompare(비교할문자열)`
  - 반환값에 따른 의미
    - 음수: 기준 문자열이 비교할 문자열보다 앞에 옴 -> 음수 반환: a를 b보다 앞에 배치
    - 0: 두 문자열이 정렬 기준상 같음 -> 둘의 상대적인 순서를 바꿀 필요가 없다고 판단
    - 양수: 기준 문자열이 비교할 문자열보다 뒤에 옴 -> a를 b보다 위에 배치

# 💭 아쉬운 점

*/

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] !== b[n]) return a[n].localeCompare(b[n]);
    else return a.localeCompare(b);
  });
}

console.log(solution(["sun", "bed", "car"], 1));
