function solution(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';
    
    for (let j = 0; j < n - i; j++) {
      line += ' ';
    }

  
    for (let j = 0; j < 2 * i - 1; j++) {
      line += '*';
    }

    console.log(line);
  }
}

solution(3);
solution(5);
