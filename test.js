const triangle = n => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i) + " ".repeat(n - i) + " *".repeat(n));
  }
}

triangle(20)
