/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 이상한 문자 만들기
유형: 문자열
날짜: 2026-10-13
Review 여부: false

# 📰 문제 설명
- 문자열 s가 주어짐
- 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 변경
- 이 때, 공백을 기준으로 단어별로 짝/홀수 인덱스를 판단

# 💡 문제 풀이
- s를 공백을 기준으로 배열로 변화
- 중첩 for문으로 배열을 순회하며 다음 작업을 순회
    - 외부 for문: 배열을 순회
    - 내부 for문
        - 배열의 요소(문자열)를 순회
        - if(i%2 === 0) item.splice(i, 1, item[i].toUpperCase())
        - else item.splice(i, 1, item[i].toLowwerCase())
- for문 종료 후 배열.join(" ")을 반환

# ⏰ 시간복잡도 O(N)
- split() 메서드는 문자열 s의 길이 만큼 순회하므로 O(N)이다.
- 외부 루프는 단어의 개수만큼, 내부루프는 단어의 글자수만큼 순회
- 즉, 중첩 for문 자체가 문자열 s를 순회하는 것과 같다. 따라서 시간복잡도는 O(N)이다.
- join() 메서드는 문자열s 길이의 새문자열을 생성하므로 시간복잡도는 O(N)이다.
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(s) {
  const arr = s.split(" ");
  const answer = [];

  for (const item of arr) {
    let word = "";

    for (let i = 0; i < item.length; i++) {
      if (i % 2 === 0) word += item[i].toUpperCase();
      else word += item[i].toLowerCase();
    }

    answer.push(word);
  }

  return answer.join(" ");
}

console.log(solution("try hello world"));
