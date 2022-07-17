// // 삼각형 판별하기

// function solution(a, b, c){
// // 처음부터 answer에 'YES'등록
//     let answer='YES', max;
//     let sum = a+b+c;
// // 최댓값 구하기
//     if(a>b) max= a
//     else max = b
//     if (c>answer) max = c 
// // 전체 합의 max를 뺀 값이 max와 같거나 크면 NO 출력
//     if ((sum-max)<= max) answer='NO'
//     return answer;
// }

// console.log(solution(13, 33, 17));

// 삼각형 판별하기
function solution(a,b,c) {
    let anwser = 'YES',max
    let sum = a+b+c
    if(a > b ) anser = a
    else max = b
    if(c > max) max=c
    if((sum-max)<= max) anwser="NO"

    return anwser
}

console.log(solution(13,33,17))