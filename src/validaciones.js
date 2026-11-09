function normalizarTitulo(titulo) {
  return typeof titulo === 'string' ? titulo.trim() : '';
}

module.exports = { normalizarTitulo };