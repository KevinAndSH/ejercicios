// 1) Programa una función que cuente el número de caracteres de una cadena de texto

const count = (string = "") => {
  if (!string) {
    console.warn("No string inserted");
  } else {
    console.info(`The string "${string}" has ${string.length} characters.`)
    return string.length
  }
}

//count("Hola Mundo")


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados

const cut = (string = "", num = null) => {
  let out = "";
  if (num) {
      for (let i = 0; i < num; i++) {
      out+=string[i];
    }
  }

  console.log(out);
  return out;
}

//cut("Hola Mundo", 6)


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter

const divide = (string = "", div = " ") => {
  let out = [""], pos = 0, l = count(string);
  for (let i = 0; i < l; i++) {
    if (string[i] == div) {
      pos++
      out[pos]=""
    } else {
      out[pos]+=string[i]
    }
  }

  console.log(out);
  return out;
}

//divide("Hola que tal", " ")


// 4) Programa una función que repita un texto X veces

const repeat = (string = "", ins = 1) => {
  let out = ""
  for (let i = 0; i < ins; i++) {
    out += string + " "
  }

  console.log(out)
  return out;
}

//repeat("Hola Mundo", 5)


// 5) Programa una función que invierta las palabras de una cadena de texto

const revert = (string = "") => {
  let out = "";
  for (let i = 0; i < string.length; i++) {
    out += string[string.length-i-1];
  }

  console.log(out);
  return out;
}

//revert("Hola Mundo")


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo

const countWord = (string = "", word = "") => {
  let out = 0;
  bunch = divide(string, " ");
  bunch.forEach(ele => {
    if (ele === word) {
      out++
    }
  });

  console.log(out);
  return out;
}

//countWord("hola mundo adios mundo", "mundo")


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo

const palindrome = (string = "") => {
  let out = false;
  string = string.toLowerCase();
  console.log(string);
  if (string === revert(string)) {
    out = true;
  }

  console.log(out);
  return out
}

//palindrome("Salas")


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado

const remove = (string = "", pat = "") => {
  while (string !== string.replace(pat, "")) {
    string = string.replace(pat, "")
  }
  return string
}

//console.log(remove("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));


