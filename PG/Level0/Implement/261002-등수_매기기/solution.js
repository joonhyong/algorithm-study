/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 등수 매기기 
유형: 구현
날짜: 2026-10-02
Review 여부: true

# 📰 문제 설명
- 학생들의 등수를 매길 예정
- 영어 점수와 수학 점수를 담은 2차원 배열 score가 주어짐
- 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 반환하는 함수 만들기

# 💡 문제 풀이
1. score2 변수를 배열에 toSorted() 메서드를 적용시킨 결과값으로 초기화
    - 내부 콜백함수: (a, b) => (b[0] + b[1]) / 2 - (a[0] + a[1]) / 2
2. rank, cnt 변수를 0으로 초기화
    - rank: 등수를 저장할 변수
    - cnt: 공동 순위인 학생이 추가될 때 다음 순위에 추가될 수
3. score3 변수를 score2를 map() 메서드가 반환하는 순위를 요소로 갖는 배열로 초기화
4. score를 map() 메서드로 순회하여 해당 요소의 순위를 요소로 갖는 배열을 반환 

# ⏰ 시간복잡도 O(N^)
- forEach(), toSorted(), map() 메서들은 순차 수행됨
- 이 때 map() 메서드 내에서 indexOf() 메서드가 실행되므로 시간복잡도가 O(N^)임
- 따라서 전체 시간복잡도는 O(N^)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 배열의 이름을 socre2, score3 와 같이 지으니 의미가 모호해서 맥락 파악에 방해가 됨을 느낌
- Map을 통해 시간복잡도를 개선할 수 있었음 -> 다시 시도해볼 예정

*/

function solution(score) {
  score.forEach((item, idx) => (score[idx] = item[0] + item[1]));
  const score2 = score.toSorted((a, b) => b - a);

  let rank = 0;
  let cnt = 0;

  const score3 = score2.map((_, idx) => {
    if (score2[idx] === score2[idx - 1]) {
      cnt++;
      return rank;
    }

    rank += cnt;
    cnt = 0;

    return ++rank;
  });

  return score.map((_, idx) => score3[score2.indexOf(score[idx])]);
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ]),
);
