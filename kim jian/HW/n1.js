function solution(n) {
    for (let i = 1; i <= n; i++) {
      let stars = ''; 
  
      for (let j = 0; j < i; j++) {
        stars += '*'; 
      }
  
      console.log(stars);
    }
  }

solution(3);
solution(5);