/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 합성수 찾기
유형: 수학
날짜: 2026-09-01
Review 여부: false

# 📰 문제 설명
- 약수의 개수가 세 개 이상인 수를 합성수라고 함
- 자연수 n이 주어졌을 때, n 이하의 합성수의 개수를 반환하는 함수 만들기

# 💡 문제 풀이
- 1부터 n까지 각각의 약수의 개수를 확인하고, 약수의 개수가 3개이상일 때 마다 answer++
- 외부 반복문 시작: for문(i)으로 1부터 n까지 반복
    - count 변수를 0으로 초기화
    - sqrt 변수를 i의 제곱근으로 초기화
    - 내부 반복문 시작: for문(j)으로 1이상 sqrt이하의 범위 만큼 반복
        - i를 j로 나눴을 때 나머지가 0이라면,
            - j를 제곱한 값이 i라면 count를 1 증가
            - 아니라면 count를 2 증가 (해당 약수는 짝이 있으므로 2를 증가시킨다.)
    - 내부 반복문 종료: count가 3이상이라면 answer++
- 외부 반복문 종료: answer 반환

# ⏰ 시간복잡도: O(N*sqrt(N))
- 외부 반복문은 n번 반복
- 내부 반복문은 sqrt(n)번 반복
- 따라서 시간복잡도는 O(N x sqrt(N))이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0;
    const sqrt = Math.sqrt(i);

    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        if (j * j === i) count += 1;
        else count += 2;
      }
    }
    if (count >= 3) answer++;
  }

  return answer;
}

console.log(solution(15));
