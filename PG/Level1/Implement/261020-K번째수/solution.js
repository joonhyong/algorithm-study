/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: K번째수
유형: 구현
날짜: 2026-10-20
Review 여부: false

# 📰 문제 설명
- 배열 array의 i번째 부터 j번째 까지 숫자를 자르고 정렬했을 때, k번째에 있는 수를 구할 예정
- 배열 array와 [i, j, k]를 원소로 갖는 배열인 commands가 매개변수로 주어짐
- commands의 모든 원소에 대해 앞서 설명한 연산을 적용한 결과값들을 배열로 담아 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 []로 초기화
- for문으로 commands의 길이 만큼 순회하며 다음 작업을 수행
    - item 변수를 commands[i]로 초기화
    - array.slice(item[0] - 1, itema[1])에 sort()메서드를 적용시켜 오름차순 정렬
    - 오름차순된 결과값의 k-1번째 인덱스의 값을 answer 배열에 추가
- for문 종료 후 answer 반환 

# ⏰ 시간복잡도 O(K  N logN)
- array의 길이: N
- commands의 길이: K
- commands를 순회하는 반복문은 K번 실행되므로 O(K)
- 각 반복에서 다음 작업을 수행
    - slice(): 최대 N개의 요소를 복사하므로 O(N)
    - sort(): 최대 N개의 요소를 정렬하므로 일반적인 비교 정렬 기준 O(N log N)
    - [k - 1]: 인덱스로 요소를 조회하므로 O(1)
    - 따라서 각 반복의 시간복잡도는 O(N logN)
- 전체 시간복잡도는 O(K N logN)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(array, commands) {
  const answer = [];

  for (let x = 0; x < commands.length; x++) {
    const item = commands[x];
    const [i, j, k] = item;
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
