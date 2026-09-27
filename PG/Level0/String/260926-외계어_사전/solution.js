/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 외계어 사전
유형: 문자열
날짜: 2026-08-25
Review 여부: false

# 📰 문제 설명
- 알파벳 문자 배열 spell과 외계어 사전(문자열 배열) dic이 주어짐
- spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 아니라면 2를 반환하는 함수 만들기

# 💡 문제 풀이
- 1번 for문으로 dic을 순회하며 다음 작업을 수행
    - dic의 요소의 길이가 spell의 길이와 같다면 다음 작업을 수행
        - visited 배열을 spell과 길이가 갖고 요소를 전부 0으로 갖는 배열로 초기화
        - 2번 for문으로 item의 각 자리의 문자를 순회
            - item[i]가 spell에 존재한다면, 다음 작업을 수행
                - 요소의 값이 item[i]인 spell의 인덱스 번째의 visited 요소에 대해 다음 작업을 수행
                    - 1이라면 0을 할당
                    - 0이라면 1을 할당
        - cnt 변수를 0으로 초기화
        - 3번 for문으로 visited를 순회하며 해당 요소의 값이 1인 경우 cnt++
        - visited 순회 후 cnt === spell.length이면 1을 반환
- 1번 for문 종료 후 2를 반환

# ⏰ 시간복잡도 O(m x n)
- spell의 길이를 m, dic의 길이를 n이라고 하자
- 문제에서 spell의 길이, dic의 원소의 길이는 10이하로 정해져 있음
- 1번 for문은 dic의 길이 만큼 반복,
- 2번 for문은 dic의 요소의 길이 만큼 반복,
- 3번 for문은 spell의 길이 만큼 반복함
- 2, 3번 for문은 1번 for문 내부에서 순차적으로 수행됨 
- dic의 요소의 최대 길이는 spell의 길이와 같음
- 따라서 전체 시간복잡도는 O(m x n)이다. 

# 🚀 알게 된 점
- 삼항연산자에는 문이 아닌 식이 와야함
  - 삼항연산자의 본래 목적: 조건에 따라 하나의 값을 선택해서 반환받는다.
  - 식이 오더라도 본래 목적과 다르게 쓰인다면 잘못된 사용(Anti-pattern)으로 봄
- includes() 메서드의 반환값은 true/false 이다.
- indexOf() 메서드는 찾는 요소가 존재하지 않는 경우 -1을 반환


# 💭 아쉬운 점

*/

function solution(spell, dic) {
  for (const item of dic) {
    if (item.length === spell.length) {
      const visited = Array(spell.length).fill(0);

      for (let i = 0; i < item.length; i++) {
        /* indexOf 연산을 불필요하게 반복함 + 삼항연산자의 잘못된 사용법
        if (spell.includes(item[i]))
          visited[spell.indexOf(item[i])]
            ? (visited[spell.indexOf(item[i])] = 0)
            : (visited[spell.indexOf(item[i])] = 1);
        */

        const targetIdx = spell.indexOf(item[i]);
        if (spell.includes(item[i])) visited[targetIdx] = 1;
      }

      let cnt = 0;

      for (const item of visited) {
        if (item === 1) cnt++;
      }

      if (cnt === spell.length) return 1;
    }
  }

  return 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
