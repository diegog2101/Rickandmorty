class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class Pila {
  constructor() {
    this.cima = null;
    this.tamano = 0;
  }

  // Apila 
  push(valor) {
    const nuevo = new Nodo(valor);
    nuevo.siguiente = this.cima;
    this.cima = nuevo;
    this.tamano++;
  }

  // Desapila
  pop() {
    if (this.isEmpty()) return null;
    const nodo = this.cima;
    this.cima = nodo.siguiente;
    this.tamano--;
    return nodo.valor;
  }

  // Devuelve la cima sin removerla

  peek() {
    if (this.isEmpty()) {
  return null;
} else {
  return this.cima.valor;
}
  }
  isEmpty() {
    return this.cima === null;
  }

}