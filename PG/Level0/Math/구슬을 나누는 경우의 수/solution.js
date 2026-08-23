/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 구슬을 나누는 경우의 수
유형: 수학
날짜: 2026-08-23
Review 여부: true

# 📰 문제 설명
- 구슬은 모두 다르게 생김
- 구슬의 개수 balls와 나누어줄 구슬의 개수 share가 주어짐
- balls개의 구슬 중 share개의 구슬을 고르는 모든 경우의 수를 반환하는 함수 만들기

# 💡 문제 풀이
- 경우의 수에서 조합을 사용
- balls를 n으로, share를 r로 보아 nCr을 구하는 알고리즘을 구현한다.
- 여기서의 알고리즘은 Combination을 재귀함수로 방식으로 구현한다. (r이 유동적이기 때문에 중첩 반복문 방식은 사용하지 못한다.)

# ⏰ 시간복잡도: O(nCr)
- nCr개의 조합을 직접 생성해서 카운트하므로 시간복잡도는 O(nCr)이다.

# 🚀 알게 된 점
- 순열 (Permutation)
    - 정의: 서로 다른 원소 중에서 순서를 고려하여 r개를 선택하고 나열하는 것
    - 공색: nPr = n!/(n-r)!
- 조합(Combination)
    - 정의: 서로 다른 원소 중에서 순서를 생각하지 않고 몇 개를 선택하는 것을 의미
    - 공식: nCr = nPr/r! = n!/r!(n-r)!

# 💭 아쉬운 점
- 아직 Combination을 구하는 방식을 재귀 함수로 구현한 알고리즘을 매끄럽게 이해하진 못한다.
    - 특히, dfs(i+1, d+1)에서 i+1을 전달하느 이유를 완전히 익히지 못함
- Permutation, Subset을 비롯해서 익숙해질 때 까지 노트에 써가면서 적응해야겠다.

- 또한, 팩토리얼 함수를 구현하여 단순하게 nCr의 공식인 n!/r!(n-r)!에 대입하는 방식도 있다는 것을 알게되었다.
*/

function combination(n, r) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0;
  const temp = [];

  function dfs(s, d) {
    if (d === r) {
      count++;
      return;
    }
    for (let i = s; i < arr.length; i++) {
      temp.push(arr[i]);
      dfs(i + 1, d + 1);
      temp.pop();
    }
  }

  dfs(0, 0);
  return count;
}

function solution(balls, share) {
  const answer = combination(balls, share);

  return answer;
}

console.log(solution(3, 2));
