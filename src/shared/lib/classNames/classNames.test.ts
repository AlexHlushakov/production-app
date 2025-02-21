import { classNames } from './classNames';

describe('classNames', () => {
    test('test1', () => {
        expect(classNames('someClass1', {}, ['class2']))
            .toBe('someClass1 class2');
    });
    test('test2', () => {
        expect(classNames(
            'someClass1',
            { collapsed: true, outline: true },
            ['class2'],
        )).toBe('someClass1 class2 collapsed outline');
    });
    test('test3', () => {
        expect(classNames(
            'someClass1',
            { collapsed: true, outline: false },
            ['class2'],
        )).toBe('someClass1 class2 collapsed');
    });
});
