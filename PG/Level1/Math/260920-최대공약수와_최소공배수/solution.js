/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 최대공약수와 최소공배수
유형: 수학
날짜: 2026-09-20
Review 여부: true

# 📰 문제 설명
- 두 수 n, m이 주어짐
- 두 수의 최대공약수와 최소공배수를 반환하는 함수 만들기
- 배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어서 반환

# 💡 문제 풀이
- 최대공약수 구하기 -> 유클리드 호제법 사용
    - 두 수가 있을때 큰 수를 작은 수로 나눈 나머지와, 작은 수를 나머지로 나눈 나머지가 같다는 원리를 이용
    - 해당 작업을 반복하여 나머지가 0이 될 때의 나눈 수가 최대공약수이다.
- 최소공배수 구하기 -> 유클리드 호제법 활용
    - 두 수의 최소공배수는 두 수를 곱한 값을 최대공약수로 나눈 값이다.

# ⏰ 시간복잡도 O(log(min(n,m)))
- 유클리드 호제법 while문을 사용할 때의 시간복잡도는 O(log(min(a,b))) 이다.

# 🚀 알게 된 점
- 두 수 a, b의 최소공배수(LCM - Least Common Multiple)는 a x b / GCD 이다.

# 💭 아쉬운 점
- 유클리드 호제법의 코드를 while문이 아닌 재귀함수 형태로도 구현해보고싶다.
*/

function makeGCD(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
}

function solution(n, m) {
  const gcd = makeGCD(n, m);
  const lcm = (n * m) / gcd;
  return [gcd, lcm];
}

console.log(solution(3, 12));
