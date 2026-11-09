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

  test('Rechaza títulos que superan los 100 caracteres', () => {
    const titulo = 'A'.repeat(101);

    expect(normalizarTitulo(titulo)).toBe('');
  });
});