/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 자릿수 더라기
유형: 구현
날짜: 2026-09-01
Review 여부: false

# 📰 문제 설명
- 자연수 n이 주어지면 n의 각 자릿수의 합을 구해서 반환하는 함수 만들기

# 💡 문제 풀이
- 자연수 n을 String() 함수로 문자열로 변환
- 해당 문자열을 split("") 메서드로 배열로 변환
- 해당 배열을 map(Number) 메서드로 각 요소들을 숫자형으로 변환
- 해당 배열에 reduce() 메서드를 적용시켜 각 요소들의 합을 변수 answer에 할당
- answer 반환

# ⏰ 시간복잡도: O(log_10 n)
- 입력값인 n의 자릿수에 따라 반복횟수가 결정되므로
- 시간복잡도는 O(log_10 n)이다.

# 🚀 알게 된 점
- 어떤 숫자의 자릿수는 그 숫자의 로그값과 같다.

# 💭 아쉬운 점

*/

function solution(n) {
  const arr = String(n).split("").map(Number);
  const answer = arr.reduce((acc, cur) => {
    return (acc += cur);
  });

  return answer;
}

console.log(solution(123));
