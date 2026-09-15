/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 약수의 개수와 덧셈
유형: 수학
날짜: 2026-09-15
Review 여부: false

# 📰 문제 설명
- 두 정수 left와 right가 주어짐
- left부터 right까지의 모든 수들 중에서,
- 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺌
- 결과값을 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 0으로 초기화

- 약수의 개수 구하기
    1. 어떤 수 n의 약수의 개수를 초기값이 0인 cnt 변수에 저장할 예정이다.
    2. 어떤 수 n의 약수는, 제곱했을 때 n이 되는 수를 제외한다면 모두 짝이 존재한다.
    3. 따라서 루트n까지의 수들을 차례로 n에서 나눠보고 나머지가 0이라면 짝이 있는 약수로 여긴다. -> cnt += 2
    4. 루트n을 제곱해서 n이 되는 경우는 짝이 없는 약수로 여긴다. -> cnt += 1

- for문으로 left부터 right까지 다음 작업을 수행한다. (i는 루프 변수이다.)
    1. i의 약수의 개수를 구한다.
    2-1. 약수의 개수를 2로 나눴을 때 나머지가 0이라면 answer에 i를 더한다.
    2-2. 그렇지 않다면 answer에서 i를 뺀다.

- for문 종료 후 anwer를 반환한다.

# ⏰ 시간복잡도: O(n * sqrt(n))
- 외부 for문은 주어진 인수 left - right + 1 번 반복되므로 시간복잡도는 O(n)이다.
- 내부 for문은 루트i번 작업을 수행하므로 시간복잡도는 O(sqrt(n))이다.
- 중첩 for문이므로 최종 시간복잡도는 O(n * sqrt(n))이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(left, right) {
  // 방식1.  if 조건문으로 작성
  /*
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 0;
    const sqrt = Math.sqrt(i);

    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        if (j * j === i) cnt += 1;
        else cnt += 2;
      }
    }

    if (cnt % 2 === 0) answer += i;
    else answer -= i;
  }

  return answer;
  */

  // 방식2. reduce() 메서드
  return Array.from({ length: right - left + 1 }, (_, i) => left + i).reduce((acc, cur) => {
    let cnt = 0;
    const sqrt = Math.sqrt(cur);

    for (let i = 1; i <= sqrt; i++) {
      if (cur % i === 0) {
        if (i * i === cur) cnt += 1;
        else cnt += 2;
      }
    }

    if (cnt % 2 === 0) return (acc += cur);
    else return (acc -= cur);
  }, 0);
}

console.log(solution(13, 17));
