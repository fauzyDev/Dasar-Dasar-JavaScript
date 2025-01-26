import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Test case 1: Penjumlahan dua bilangan positif
test('harus mengembalikan jumlah dua angka positif', () => {
    assert.strictEqual(sum(3, 5), 8);
  });
  
test('harus mengembalikan jumlah dua angka negatif', () => {
    assert.strictEqual(sum(-5, -20), -25);
  });