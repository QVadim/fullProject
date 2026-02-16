import { classNames } from "./classNames";

describe('classNames', () => {
    //  Test 
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    //  Test 
    test('with aditional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    })
    //  Test true
    test('with aditional class', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(classNames('someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2']
        )).toBe(expected);
    })
    //  Test false
    test('with aditional class false', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2']
        )).toBe(expected);
    })
    // undefined
    test('with aditional class undefined', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2']
        )).toBe(expected);
    })
})
