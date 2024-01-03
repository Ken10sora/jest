describe('グループ名', () => {
  test('テストケース1', () => {
    expect(true).toBe(true)
  })
  test('テストケース2', () => {
    expect(true).toBe(true)
  })
  test('テストケース3', () => {
    expect(true).toBe(true)
  })

  // 入れ子でグループを定義できる
  describe('グループ名', () => {
    test('テストケース', () => {
      expect(true).toBe(true)
    })
  })
})

// ▪️複数のテストケースを利用したcalculateSalesTax 関数のテスト
// 消費税を計算。税率を10%に固定
const calculateSalesTax = (price: number) =>
  price >  0 ? Math.floor((price / 100) * 10) : 0

  describe('calculeatSalesTax', () => {
    test('calculates the sales tax for a price equal to 100', () => {
      expect(calculateSalesTax(100)).toBe(10)
    })

    test('calculates the sales tax for a price equal to 99', () => {
      expect((calculateSalesTax)(99)).toBe(9)
    })

    test('calculates the sales tax for a price equal to 1', () => {
      expect(calculateSalesTax(1)).toBe(0)
    })

    test('calculates the sales tax for a price equal to 0.1', () => {
      expect(calculateSalesTax(0.1)).toBe(0)
    })

    test('calculates the sales tax for a price equal to 0', () => {
      expect(calculateSalesTax(0)).toBe(0)
    })

    test('calculates the sales tax for a price equal to -1', () => {
      expect(calculateSalesTax(-1)).toBe(0)
    })
  })

// ▪️パラメタライズドテストを利用したcalculateSalesTax関数のテスト:
describe('calculateSalesTax with Parameterized Tests', () => {
  test.each([
    { price: 100, expected: 10},
    { price: 99, expected: 9},
    { price: 1, expected: 0},
    { price: 0.1, expected: 0},
    { price: 0, expected: 0},
    { price: -1, expected: 0},
  ])('calculates the sales tax for a price equal to $price',
  ({ price, expected}) => {
    expect(calculateSalesTax(price)).toBe(expected)
  },
  )
})


// ▪️前後処理が実行されるタイミングを確認するためのテスト
// グループ1
describe('before/after timing', () => {
  // グループ1の前後処理
  beforeAll(() => console.log('1 - beforeAll'))
  afterAll(() => console.log('1 - afterAll'))
  beforeEach(() => console.log('1 - beforeEach'))
  afterEach(() => console.log('1 - afterEach'))
  // グループ1のテスト1
  test('', () => console.log('1 - test1'))
  // グループ2
  describe('scoped / Nested block', () => {
    // グループ2の前後処理
    beforeAll(() => console.log('2 - beforeAll'))
    afterAll(() => console.log('2 - afterAll'))
    beforeEach(() => console.log('2 - beforeEach'))
    afterEach(() => console.log('2 - afterEach'))
    // グループ2のテスト1
    test('', () => console.log('2 - test1'))
    // グループ2のテスト2
    test('', () => console.log('2 - test2'))
  })
})
