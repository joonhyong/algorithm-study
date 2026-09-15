/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 가까운 수
유형: 배열
날짜: 2026-09-15
Review 여부: false

# 📰 문제 설명
- 정수 배열 array와 정수 n이 주어짐
- array의 요소들 중 정수 n과 가장 가까운 수를 반환하는 함수 만들기
- 가장 가까운 수가 여러개인 경우, 더 작은 수를 반환

# 💡 문제 풀이
- 방식1. 인덱스 배열 사용
    - 풀이 과정
        - array의 요소들을 오름차순으로 정렬
        - array와 길이가 같고 요소가 전부 0인 배열 arr 생성
        - array를 순회하며 각 요소와 n과의 차이를 arr의 해당 인덱스에 저장
        - arr 배열의 가장 작은 요소의 인덱스와 대응되는 array의 요소를 반환
    - 핵심 과정
        - array를 오름차순으로 정렬: 가장 가까운 수를 찾을 때 더 작은 수를 찾게 됨
        - array와 arr의 길이가 같음: 두 배열 각각의 요소는 대응되는 관계를 가짐으로, arr의 인덱스를 array에 적용시키면 원하는 요소를 찾을 수 있음

- 방식2. 매 회차마다 차이를 비교
    - let 변수 min을 array[0] - n의 절대값으로 초기화 -> min은 현재까지의 최소 차이
    - let 변수 answer를 array[0]으로 초기화 -> answer는 현재까지의 최소 차이인 array의 요소
    - for문으로 array를 순회하며 다음 과정을 수행 (루프 변수 i는 1이상 array.length 미만)
        - 현재 요소와 n의 차이의 절대값을 gap 변수에 할당
        - gap < min이면 min과 answer를 갱신
        - gap === min이면 현재 요소가 answer 보다 작은 경우에만 answer를 갱신
        - gap > min이면 continue
    - for문 종료 후 answer를 반환
        

# ⏰ 시간복잡도
- 방식1. 인덱스 배열
    - sort() 메서드의 시간복잡도가 O(n log n)
    - 배열 생성 및 채우기, for문, Math.min(), indexOf() 메서드는 시간복잡도는 각각 O(n)이다.
    - 해당 연산들은 순차적으로 일어나므로, 전체 시간복잡도는 O(n log n)이다.

- 방식2.매 회차마다 차이를 비교
    - for문은 array의 길이만큼 반복되므로 시간복잡도는 O(n)이다.
    - 따라서 전체 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(array, n) {
  // 방식1. 인덱스 배열
  /*
  array.sort((a, b) => a - b);

  const arr = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    arr[i] = Math.abs(array[i] - n);
  }

  return array[arr.indexOf(Math.min(...arr))];
  */

  // 방식2. 매 회차마다 차이를 비교
  let min = Math.abs(array[0] - n);
  let answer = array[0];

  for (let i = 1; i < array.length; i++) {
    const gap = Math.abs(array[i] - n);
    const num = array[i];

    if (gap > min) continue;
    else if (gap === min) {
      if (num < answer) answer = num;
      else continue;
    } else if (gap < min) {
      min = gap;
      answer = num;
    }
  }

  return answer;
}

console.log(solution([3, 10, 28], 20));
