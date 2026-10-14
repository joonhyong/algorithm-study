/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 3진법 뒤집기
유형: 수학
날짜: 2026-10-14
Review 여부: false

# 📰 문제 설명
- 자연수 n을 3진법 상에서 앞뒤로 뒤집은 후 다시 10진법으로 표현하여 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 0으로 초기화
- arr 변수를 []로 초기화

- while문으로 다음 작업을 수행
    - 루프 조건: n > 0
    - arr.push(n%3)
    - n = Math.trunc(n/3)
- while문이 종료된 후 arr.reverse()로 뒤집기 (뒤집은 3진법 수를 10진법으로 연산하기 위함)

- for문으로 arr를 순회하며 다음 작업을 수행
    - arr[i]에 3을 i-1제곱한 값을 answer에 더하기
- for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(log3 N)
- while문은 n의 3진법 자리수 개수만큼 반복하므로 시간복잡도는 O(log3 N)이다.
- reverse() 메서드는 arr의 길이만큼의 시간복잡도를 가지며, arr의 길이는 n의 3진법 자리수와 같으므로 O(log3 N)이다.
- for문도 arr를 순회하므로 시간복잡도는 O(log3 N)이다.
- 따라서 전체 시간복잡도는 O(log3 N)이다.

# 🚀 알게 된 점
- 거듭제곱 연산 방법
    1. 거듭제곱 연산자 ** 사용 -> 형식: 밑 ** 지수
    2. Math.pow() 함수 사용 -> 형식: Math.pow(밑, 지수) 

# 💭 아쉬운 점
1. for문에서 연산시 3 ** i 대신 3 ** arr.length - 1 - i 로 작성하였다면, reverse() 연산을 줄일 수 있었다.
2. n.toString(3)로 10진수를 바로 3진수로 변환, parseInt(str, 3)으로 3진수를 10진수로 변환하는 방법이 있었다.

*/

function solution(n) {
  let answer = 0;
  const arr = [];

  while (n > 0) {
    arr.push(n % 3);
    n = Math.trunc(n / 3);
  }

  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    answer += arr[i] * 3 ** i;
  }

  return answer;
}

console.log(solution(125));
