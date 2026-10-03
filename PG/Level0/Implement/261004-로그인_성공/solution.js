/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 로그인 성공?
유형: 구현
날짜: 2026-10-04
Review 여부: false

# 📰 문제 설명
- 사용자가 입력한 아이디, 패스워드가 담긴 id_pw가 주어짐
- 회원들의 정보가 담긴 db가 주어짐
- 아이디와 비밀번호가 모두 일치하는 회원 정보가 있으면 "login" 반환
- 아이디가 일치하는 회원이 없으면 "fail" 반환
- 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 "wrong pw" 반환
- 하는 함수 만들기 

# 💡 문제 풀이
- for문으로 db를 순회하며 다음 작업을 수행
    1. db 요소의 아이디와 id_pw의 아이디를 비교
        - 일치한다면 2번 작업 수행
    2. db 요소의 비밀번호와 id_pw의 비밀번호를 비교
        - 일치한다면 "login" 반환
        - 일치하지 않는다면 "wrong pw" 반환
- for문 종료 후 "fail" 반환

# ⏰ 시간복잡도 O(N)
- for문으로 db를 순회하므로 시간 복잡도는 O(N) 이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(id_pw, db) {
  for (const user of db) {
    if (id_pw[0] === user[0]) {
      if (id_pw[1] === user[1]) return "login";
      else return "wrong pw";
    }
  }

  return "fail";
}

console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ],
  ),
);
