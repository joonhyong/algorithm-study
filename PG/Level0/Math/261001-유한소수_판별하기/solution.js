/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 
유형: 
날짜: 2026-10-01
Review 여부: true

# 📰 문제 설명
- 유한소수: 소수점 아래 숫자가 유한개인 소수
- 분수를 소수로 고칠 때, 유한소수가 되기 위한 분수의 조건
    - 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재
- 두 정수 a, b가 매개변수로 주어짐
- 유한소수면 1을, 무한소수면 2를 반환하는 함수 만들기

# 💡 문제 풀이
- 기약분수는 분자와 분모의 최대공약수로 분자와 분모를 각각 나눠주면 된다.
- 따라서 a와 b의 최대공약수를 구하고, b를 최대공약수로 나눈 수의 소인수를 구한다.
- 소인수에 2와 5만 존재하면 1을, 그렇지 않다면 2를 반환한다.

# ⏰ 시간복잡도 O(N sqrt(N))
- b/GCD를 N이라고 하자.
- for문에서 sqrt(N)의 시간복잡도는 갖는 cntFactor() 함수를 N회 반복하므로 전체 시간복잡도는 O(N sqrt(N))이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 기존의 코드는 시간복잡도가 큰 편이라서 시간 초과가 날 위험이 있었다. 
- 2와 5만을 소인수로 갖는지 판별하는 방법은 해당 수가 2(혹은 5)로 나눴을 때 나머지가 0이 될 까지 반복하면 된다.
- 해당 방법을 사용한다면 시간복잡도는 O(log N)까지 낮출 수 있다.
*/
function makeGCD(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
}

function cntFactor(n) {
  let cnt = 0;
  const sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      if (i * i === n) cnt += 1;
      else cnt += 2;
    }
  }

  return cnt;
}

function solution(a, b) {
  const gcd = makeGCD(a, b);
  const b2 = Math.trunc(b / gcd);
  const set = new Set();

  for (let i = 1; i <= b2; i++) {
    if (b2 % i === 0 && cntFactor(i) === 2) set.add(i);
  }

  if ([...set].filter((item) => item !== 2 && item !== 5).length === 0) return 1;
  else return 2;
}

console.log(solution(7, 20));
