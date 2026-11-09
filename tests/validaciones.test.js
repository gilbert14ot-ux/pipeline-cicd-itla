const { normalizarTitulo } = require('../src/validaciones');

describe('Pruebas unitarias de validaciones', () => {
  test('Elimina espacios del título', () => {
    expect(normalizarTitulo('  Estudiar  ')).toBe('Estudiar');
  });

  test('Rechaza títulos vacíos', () => {
    expect(normalizarTitulo('   ')).toBe('');
  });

  test('Rechaza valores que no son texto', () => {
    expect(normalizarTitulo(123)).toBe('');
  });
});