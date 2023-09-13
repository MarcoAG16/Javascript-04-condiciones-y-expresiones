console.log("Estoy vivo");


/*
Operador
Un elemento que nos permite realizar un operacion entre dos o mas elementos.

- Operadores aritmeticos (+,-,*,/)
-Operadores de asignacion (=, / asignacion igualdad y de igualdd estricta)
-Operadores de caden (tolowerCase, toUpperCase,trim,toString,concat)
-Operadores logicos (&&,||,!)
-Operadores de comparacion (<,>,<=,>=,==.===)

*/

/*
Operadores aritmeticos

Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas.

*/


//Operadores Aritmeticos
/*

suma(+)
resta(-)
multiplicacion(*)
division(/)
Residuo/Modulo(%)
exponenciacion(**)
incremento(++)
decremento(--)




*/
//variables

let numero1 = 10;
let numero2 = 2;
let numero3 = 5;

//Operaciones

suma = numero1 + numero2; //=12
resta = numero1 - numero2;//8
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
exponenciacion = 10 ** 2; // es obsoleto porque ya hay un metodo para esto 

console.log("valor del numero 1 antes del incremento: ",numero1);

//NOTA: cuando usamos incrementos el valor se reasigna (suma y reasigna en la misma operacion)
incremento = numero1++;//11
decremento = numero2--;//1

//forma extensa de unincremento
numero1 = numero1 +1;

console.log("valor del numero 1 despues del incremento: ",numero1);

//Incremento de 10 en 10
numero1 += 10; //20 suma y reasigna al mismo tiempo
numero1 = 10 + 10;

//Ejemplo
operacionCompleja = 10+5 /  (5-6);


//Impresiones en pantalla
console.log("Suma de 10 + 2 ", suma);
console.log("suma de 10 + 2 ", (numero1 + numero2));
console.log("Suma de 10 + 2", 10 + 2);
console.log("Resta de 10 - 2", resta);

/*
Operadores de comparacion

Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true o false)

- mayor que(>)
- menor que(<)
- mayor o igual que (>=)
- menor o igual que (<=)
- igual (==)
- estrictaente igual (===)
- no es igual (!=)
- no es estrictamente igual (!==)


Igual (==)
Sirve para comparar que dos valores sean iguales


*/

let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

//13 == "13" //true
//13 === "13" //false
//23 > 12 true
//23 < 12 false
let edadMarco = 17

if (edadMarco >= 18){
  console.log("Puedes ir a pescar");
}
else{
  console.log("No podrias ir a pescar");
}

//!vamos a comer
//!no me gusta Java(no no me gusta java)
//!no me gusta Java (no no me gusta java) (no * no = si)

/*
Operadores de asignacion 

Son los operadores que utilizan para asignar un valor a una variable. Se usa el operador =

let edad = 31:
let saldo = 0;

*/

/*Operadores logicos

Nos devuelven un resultado a partir de que se cumpla (o no) una condicion, el resultado es booleano (true o false.)

  AND &&: Sirve para determinar si dos expresiones son verdaderas. si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si a,bas son falsas, todo es falso.


*/


let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere){
  console.log("Estoy feliz");
}
else{
  console.log("Haganse a un lado que me quiero automorir");
}

/*
  -OR ||:Sirve para determinar si dos expresiones son falsas. si cualquiera de las 2 afirmaciones es veradadera, todo es verdadero,. si las dos son falsas, todo es falso.



*/


if (hayPescado || hayJugo){
  console.log("Hoy como shido"); 
}
else{
  console.log("Ni modo, no se come chilo");
}

/*
NOT (!): Regresa lo contrario de lo que evaluamos



*/

//Este codigo esta incompleto puede causar errores (explicacion de anidacion de operadores logicos)
let escenario1 = (edadMarco >= 18 && dineroMarco = !0);

let escenario2 = (edadMarco >=18 && amigosQueInviten = true);

if ( escenario1|| escenario2){

}



//Suma (+): Se utiliza para sumar dos números.
let resultado = 5 + 3; // resultado contendrá el valor 8 //Resta (-): Se utiliza para restar un número de otro.

let resultadol = 10 - 4; // resultado contendrá el valor 6
//Multiplicación (*): Se utiliza para multiplicar dos números.
let resultado2 = 6 * 3; // resultado contendrá el valor 18
//División (/): Se utiliza para dividir un número por otro. La división por cero produce un valor especial llamado "Infinity" (infinito).

let resultado3 = 15 / 3; // resultado contendrá el valor 5
//Módulo (%): Se utiliza para obtener el resto de una división entre dos números.

let resultado4 = 10 % 3; // resultado contendrá el valor 1 (el resto de 10 dividido por 3)
//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.

let numero = 5;
numero++;
// ahora numero contendrá el valor 6
//Decremento (--): Se utiliza para disminuir en 1 el valor de una variable.+ let numero1 = 8;
numero--; // ahora numero contendrá el valor 7

//Doble igual - igualdad Abstracta
5 =="5" // true, ya que javascript convierte la cadena "5" a un numero antes de la comparacion

// Triple igual- Igualdad estricta
5 === "5" // false, porque no son del mismo tipo y los tipos tambien  difieren.


//Crear programa para convertir grados celcius a fahrenheit

  let celcius = 78;
  let fahrenheit = (celcius *1.8 + 32);
  console.log(celcius + " Grados celcius " + "equivalen a " + fahrenheit + " Grados fahrenheit");