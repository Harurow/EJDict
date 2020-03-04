import { lookUp, reverseLookUp } from '../src/index'

describe('lookUp', () => {
    test('camellia', () => {
        const founds = lookUp('camellia')
        expect(founds.length).toBe(1)
    })
    test('llia', () => {
        const founds = lookUp('llia')
        expect(founds.length).toBe(10)
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

    test('学 校', () => {
        const founds = reverseLookUp('校 学', 100)
        expect(founds.length).toBe(100)
    })
})

describe('match', () => {
    test('less ', () => {
        const founds = reverseLookUp('less 国', 100)
        console.log(founds)
        expect(founds.length).toBe(1)
    })
})
