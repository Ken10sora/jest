// ▪️復習や新しいテストコードを記述
test('testを使用してJapanを試す', () => {
  const result = 'Japan'
  const expected = 'Japan'
  expect(result).toBe(expected)
})

test('contains Hearthflame Mask in Ogerpon', () => {
  expect(Ogerpon).toContain('Hearthflame Mask')
})

// ▪️文字列型オブジェクトのパラメタライズドテストを作成
const Ogerpon = ['Hearthflame Mask', 'Wellspring Mask', 'Cornerstone Mask']

describe('test Ogerpon mask', () => {
  test.each([
    { mask: 'Hearthflame Mask' },
    { mask: 'Wellspring Mask' },
    { mask: 'Cornerstone Mask' },
    ]) ('Ogerpon should have the correct mask', ({ mask }) => {
    const result = Ogerpon.find(ogerponMask => ogerponMask.includes(mask));
    expect(result).toBe(mask);
  });
})
