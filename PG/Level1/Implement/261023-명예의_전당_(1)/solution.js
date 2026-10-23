/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 명예의 전당 (1)
유형: 구현
날짜: 2026-10-23
Review 여부: false

# 📰 문제 설명
- 어떤 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들에게 문자 투표수로 점수를 부여받음
- 지금까지 출연한 가수들의 점수 중 상위 k번째 이내라면 해당 가수는 명예의 전당 목록에 올라감
- 해당 프로그램에서는 매일 명예의 전당 목록의 최하위 점수를 발표함
- 명예의 전당 목록의 점수의 개수 k와 1일 부터 마지막 날까지 출연한 가수들의 점수인 score가 매개변수로 주어짐
- 매일 발표된 명예의 전당의 최하위 점수를 반환하는 함수 만들기

# 💡 문제 풀이
- honer 변수를 []로 초기화
- answer 변수를 []로 초기화
- for문으로 score를 순회하며 다음 작업을 수행
    - score의 i번째 요소를 honer 배열에 추가 -> honer.push(score[i])
    - honer 배열을 내림차순으로 정렬 -> honer.sort( (a, b) => b - a )
    - honer 배열의 길이가 k 초과 시 honer 배열의 마지막 요소 제거  -> if(honer.length > k) honer.pop()
    - answer 배열에 honer 배열의 마지막 요소를 추가 -> answer.push(honer[honer.length-1]) 
- for문 종료 후 answer 배열 반환

# ⏰ 시간복잡도 O(N K log K)
- score 배열의 길이: N
- 명예의 전당 목록의 인원 수: K
- for문은 N회 반복한다.
    - for문 내부에서 sort() 메서드의 시간복잡도는 O(K log K)이다.
    - sort() 메서드를 제외한 나머지 연산의 시간복잡도는 O(1)이다.
- sort() 메서드는 N회 반복하므로, 전체 시간복잡도는 O(N K log K)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(k, score) {
  const honer = [];
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    honer.push(score[i]);
    honer.sort((a, b) => b - a);
    if (honer.length > k) honer.pop();
    answer.push(honer[honer.length - 1]);
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
