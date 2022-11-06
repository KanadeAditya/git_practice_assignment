function prime(N) {
  let count = 0
  for (i = 0; i <= N; i++) {
    if (N % i === 0) {
      count++
    }
  }
  if (count === 2) {
    return console.log(N, "is not a prime")
  } else {
    return console.log(N, "is a prime")
  }

}

prime(8)