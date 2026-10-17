/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 두 개 뽑아서 더하기
유형: 구현
날짜: 2026-10-17
Review 여부: false

# 📰 문제 설명
- 정수 배열 numbers가 주어짐
- 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열로 오름차순으로 담아 반환하는 함수 만들기

# 💡 문제 풀이
- set 변수를 new Set() 생성자로 초기화
- 중첩 for문으로 다음 작업을 수행
    - 외부 for문: 첫번째로 뽑을 수를 결정
    - 내부 for문
        - 두번째로 뽑을 수를 결정
        - 첫번째 수 + 두번째 수의 결과 값을 set에 추가
- answer 변수를 [...set].sort((a, b) => a-b)로 초기화
- answer 반환

# ⏰ 시간복잡도 O(N^2 logN)
- 중첩 for문은 다음과 같이 반복 수행한다.
  - 외부 for문: numbers.length - 1번 수행한다.
  - 내부 for문: 최대 numbers.length - 1번 수행한다.
  - 두 for문 모두 numbers.length에 비례하여 반복하므로 중첩 for문의 시간복잡도는 O(N^2)이다.

- [...set]으로 배열을 변환하는 작업은 고유한 합계의 개수를 (K)라고 할 때 (O(K))이다.
- sort() 메서드의 일반적인 정렬 성능 시간복잡도는 O(K logK)이다.
- 서로 다른 두 인덱스를 선택하는 조합의 개수는 NC2로 N(N-1)/2이므로 K의 개수는 (N^2 - N) / 2 이다.
- 따라서 정렬 시간복잡도는 O(K logK) = O(N^ logN^2) = O(N^2 2logN)로 분석할 있다.
- 그러므로 전체 시간복잡도는 O(N^ logN)이다.

# 🚀 알게 된 점
- sort() 메서드의 시간복잡도는 O(N logN)이다.

# 💭 아쉬운 점

*/

function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  const answer = [...set].sort((a, b) => a - b);

  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
