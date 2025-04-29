function solution(n) {
    if (n===100){
        console.log("A+");
    } else if (n>=90){
        console.log("A");
    } else if (n>=80){
        console.log("B")
    } else if (n>=70){
        console.log("C");
    } else if (n>=60){
        console.log("D");
    } else {
        console.log("D")
    }
}

solution(13); // F
solution(24); // F
solution(48); // F
solution(62); // D
solution(73); // C
solution(33); // F
solution(83); // B
solution(93);  // A
solution(70);  // C
solution(80);  // B
solution(90);  // A
solution(100); // A+