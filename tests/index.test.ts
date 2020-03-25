import { lookUp, reverseLookUp, match } from '../src/index'

describe('lookUp', () => {
    test('camellia', () => {
        const founds = lookUp('camellia')
        expect(founds.length).toBe(1)
    })
    test('llia', () => {
        const founds = lookUp('llia')
        expect(founds.length).toBe(10)
    })
    test('llia', () => {
        const founds = lookUp('llia', 11)
        expect(founds.length).toBe(11)
    })
    test('two', () => {
        const founds = lookUp('two', 10)
        console.log(founds)
        expect(founds.length).toBe(10)
    })
    test('two', () => {
        const founds = lookUp('two', 50)
        console.log(founds)
        expect(founds.length).toBe(39)
    })
})

describe('reverseLookUp', () => {
    test('ツバキ', () => {
        const founds = reverseLookUp('ツバキ')
        expect(founds.length).toBe(2) 
    })

    test('学校', () => {
        const founds = reverseLookUp('学校', 100)
        expect(founds.length).toBe(100)
    })

    test('校 学', () => {
        const founds = reverseLookUp('校 学', 100)
        expect(founds.length).toBe(100)
    })
})

describe('match', () => {
    test('less 国', () => {
        const founds = match('less 国', 100)
        console.log(founds)
        expect(founds.length).toBe(9)
    })
    test('less 国', () => {
        const founds = match('less 国', 2)
        console.log(founds)
        expect(founds.length).toBe(2)
    })
    test('camellia', () => {
        const founds = match('camellia', 1)
        console.log(founds)
        expect(founds.length).toBe(1)
    })
    test('検索されない', () => {
        const founds = match('検索されない', 100)
        console.log(founds)
        expect(founds.length).toBe(0)
    })
})
