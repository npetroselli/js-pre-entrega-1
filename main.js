//***********IDEA 1: Calculadora********** */
/* El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n. Por ejemplo:

5! = 1 x 2 x 3 x 4 x 5 = 120.
 
5! = 1  \times  2  \times  3  \times  4 \times  5= 120.

Para este ejemplo vamos a limitar las posibilidades de ingreso desde el 1 al 10, para repasar condicionales y operadores lógicos*/

//**********IDEA 2: Pago de producto en cuotas + interés, y con descuento en efectivo*********** */
/* Calcular pagos en cuotas sobre un monto determinado.
El precio final del producto se calculará según los medios de pago:
Efectivo: 10% descuento
Débito; o
Crédito: el interés a percibir depende de las cuotas a elegir (3, 6 o 12).  */

/* function cuotas(monto, cuotas, tasaInteres) {
    const interesMensual = (monto * (tasaInteres / 100)) / 12;
    const cuotaMensual = (monto + interesMensual) / cuotas;
    return cuotaMensual;
}

let resultado = cuotas(20000, 3, (monto * 0.10));
console.log(resultado);
 */

prompt("Ingrese "), prompt(segundoNumero), prompt(operacion)
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
