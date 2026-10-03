/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 특이한 정렬
유형: 구현
날짜: 2026-10-02
Review 여부: true

# 📰 문제 설명
- 정수 배열 numlist와 정수 n이 주어짐
- 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 함
- 거리가 같다면 더 큰 수를 앞에 오도록 배치
- 위 조건대로 정렬한 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- numlist를 내림차순으로 정렬
  - 최종 반환 배열에서 n과의 차이가 같은 경우에는 더 큰 수가 앞에 와야 하므로 
- arr 변수를 numlist를 map() 메서드로 순회한 결과값으로 초기화
  - map() 메서드가 반환하는 배열의 요소는 [numlist요소, n과의 차이의 절대값] 형태로 저장
- arr을 sort((a, b) => a[1] - b[1])으로 정렬
- arr를 반환

# ⏰ 시간복잡도 O(N log N)
- sort() 메서드의 시간복잡도는 O(N log N) 임
- 해당 코드에서 sort() 메서드를 제외한 연산의 시간복잡도는 O(N)이므로,
- 전체 시간복잡도는 O(N log N)이다.

# 🚀 알게 된 점
- sort((a, b) => a - b)는 a - b가 음수일 때 a를 앞으로, 양수일 때 b를 앞으로 둠
- sort 메서드는 두 수가 같을 때 서로의 자리를 바꾸지 않는 것이 기본 원칙임
- 문제 풀이를 할 때 n과의 차이가 같은 두 수에 대해서 정렬하는 상황에 대해서 자리를 바꾸지 않는다는 가정하에 numlist를 내림차순으로 정렬을 먼저 했고 이는 맞는 판단이었음

# 💭 아쉬운 점
- map() 메서드를 한번만 사용하는 방법도 가능했다.
- 이는 시간이 지난 후에 다시 시도해볼 예정이다.

*/

function solution(numlist, n) {
  numlist.sort((a, b) => b - a);

  const arr = numlist.map((item) => [item, Math.abs(n - item)]);

  return arr.sort((a, b) => a[1] - b[1]).map((item) => item[0]);
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
