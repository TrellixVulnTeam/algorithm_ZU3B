// 최솟값 구하기
// 1. 내장 객체 Math.min() 이용
function solution(a, b, c){
    let answer = Math.min(a,b,c)
    return answer
}
console.log(solution(6,5,11))

// 2. if문 이용
function solution(a, b, c){
    let answer;
    if(a < b) a= answer
    if(c < answer) c=answer 
    
   return answer
}
console.log(solution(6,5,11))