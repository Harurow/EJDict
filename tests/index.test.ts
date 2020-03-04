import { lookUp, reverseLookUp } from '../src/index'

describe('lookUp', () => {
    test('camellia', () => {
        const founds = lookUp('camellia')
        console.log(founds)
        expect(founds.length).toBe(1)
    })
    test('llia', () => {
        const founds = lookUp('llia')
        console.log(founds)
        expect(founds.length).toBe(10)
    })
})

describe('reverseLookUp', () => {
    test('ツバキ', () => {
        const founds = reverseLookUp('ツバキ')
        console.log(founds)
        expect(founds.length).toBe(2) 
    })

    test('学校', () => {
        const founds = reverseLookUp('学校', 100)
        console.log(founds)
        expect(founds.length).toBe(100)
    })

    test('学 校', () => {
        const founds = reverseLookUp('校 学', 100)
        console.log(founds)
        expect(founds.length).toBe(100)
    })
})
