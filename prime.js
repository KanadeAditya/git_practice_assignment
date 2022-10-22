function prime(N) {
  let count = 0
  for (i = 0; i <= N; i++) {
    if (N % i === 0) {
      count++
    }
  }

 
}

prime(8)