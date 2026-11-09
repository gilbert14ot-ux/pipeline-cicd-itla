function normalizarTitulo(titulo) {
  if (typeof titulo !== 'string') return '';

  const texto = titulo.trim();

  if (texto.length > 100) return '';

  return texto;
}

module.exports = { normalizarTitulo };