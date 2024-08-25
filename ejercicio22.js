// Clase base para Cuenta
class Cuenta {
    constructor(numeroCuenta, titular, saldo = 0) {
      this._numeroCuenta = numeroCuenta;
      this._titular = titular;
      this._saldo = saldo;
    }
  
    // Métodos getter y setter para saldo
    get saldo() {
      return this._saldo;
    }
  
    set saldo(cantidad) {
      if (cantidad < 0) {
        console.error('El saldo no puede ser negativo.');
      } else {
        this._saldo = cantidad;
      }
    }
  
    // Método para depositar dinero
    depositar(cantidad) {
      if (cantidad > 0) {
        this._saldo += cantidad;
        console.log(`Depositado: ${cantidad}. Nuevo saldo: ${this._saldo}`);
      } else {
        console.error('La cantidad a depositar debe ser positiva.');
      }
    }
  
    // Método para retirar dinero
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this._saldo) {
        this._saldo -= cantidad;
        console.log(`Retirado: ${cantidad}. Nuevo saldo: ${this._saldo}`);
      } else {
        console.error('Fondos insuficientes o cantidad inválida.');
      }
    }
  }
  
  // Clase CuentaAhorros que hereda de Cuenta
  class CuentaAhorros extends Cuenta {
    constructor(numeroCuenta, titular, saldo = 0, tasaInteres = 0.02) {
      super(numeroCuenta, titular, saldo);
      this._tasaInteres = tasaInteres;
    }
  
    // Método para calcular intereses
    calcularInteres() {
      const interes = this._saldo * this._tasaInteres;
      this.depositar(interes);
      console.log(`Intereses añadidos: ${interes}. Nuevo saldo: ${this._saldo}`);
    }
  
    // Método estático para ajustar la tasa de interés
    static ajustarTasaInteres(nuevaTasa) {
      if (nuevaTasa >= 0) {
        CuentaAhorros._tasaInteres = nuevaTasa;
        console.log(`Nueva tasa de interés: ${nuevaTasa}`);
      } else {
        console.error('La tasa de interés no puede ser negativa.');
      }
    }
  }
  
  // Clase CuentaCorriente que hereda de Cuenta
  class CuentaCorriente extends Cuenta {
    constructor(numeroCuenta, titular, saldo = 0, comision = 5) {
      super(numeroCuenta, titular, saldo);
      this._comision = comision;
    }
  
    // Sobrescribe el método retirar para incluir la comisión
    retirar(cantidad) {
      const cantidadTotal = cantidad + this._comision;
      if (cantidadTotal <= this._saldo) {
        this._saldo -= cantidadTotal;
        console.log(`Retirado: ${cantidad}, Comisión: ${this._comision}. Nuevo saldo: ${this._saldo}`);
      } else {
        console.error('Fondos insuficientes para cubrir la cantidad y la comisión.');
      }
    }
  
    // Método estático para ajustar la comisión
    static ajustarComision(nuevaComision) {
      if (nuevaComision >= 0) {
        CuentaCorriente._comision = nuevaComision;
        console.log(`Nueva comisión por transacción: ${nuevaComision}`);
      } else {
        console.error('La comisión no puede ser negativa.');
      }
    }
  }
  
  // Clase Préstamo
  class Prestamo {
    constructor(titular, monto, tasaInteres = 0.05, plazo = 12) {
      this._titular = titular;
      this._monto = monto;
      this._tasaInteres = tasaInteres;
      this._plazo = plazo; // en meses
      this._saldo = monto;
    }
  
    // Método para calcular la cuota mensual
    calcularCuota() {
      const cuota = (this._monto * this._tasaInteres * (1 + this._tasaInteres) ** this._plazo) /
                    ((1 + this._tasaInteres) ** this._plazo - 1);
      return cuota;
    }
  
    // Método para realizar un pago
    realizarPago(cantidad) {
      if (cantidad > 0 && cantidad <= this._saldo) {
        this._saldo -= cantidad;
        console.log(`Pago realizado: ${cantidad}. Saldo restante: ${this._saldo}`);
      } else {
        console.error('Cantidad de pago inválida.');
      }
    }
  
    // Método estático para ajustar la tasa de interés del préstamo
    static ajustarTasaInteres(nuevaTasa) {
      if (nuevaTasa >= 0) {
        Prestamo._tasaInteres = nuevaTasa;
        console.log(`Nueva tasa de interés para préstamos: ${nuevaTasa}`);
      } else {
        console.error('La tasa de interés no puede ser negativa.');
      }
    }
  
    // Métodos getter y setter para saldo
    get saldo() {
      return this._saldo;
    }
  
    set saldo(cantidad) {
      if (cantidad < 0) {
        console.error('El saldo del préstamo no puede ser negativo.');
      } else {
        this._saldo = cantidad;
      }
    }
  }
  
  // Pruebas de las clases
  
  // Crear una cuenta de ahorros y realizar operaciones
  const cuentaAhorros = new CuentaAhorros('12345', 'Sebastián', 1000);
  cuentaAhorros.depositar(500);
  cuentaAhorros.retirar(200);
  cuentaAhorros.calcularInteres();
  
  // Crear una cuenta corriente y realizar operaciones
  const cuentaCorriente = new CuentaCorriente('67890', 'Sebastián', 1500);
  cuentaCorriente.depositar(300);
  cuentaCorriente.retirar(100);
  
  // Crear un préstamo y calcular cuota
  const prestamo = new Prestamo('Sebastián', 5000);
  console.log('Cuota mensual del préstamo:', prestamo.calcularCuota());
  prestamo.realizarPago(500);
  