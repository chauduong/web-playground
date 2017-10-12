import { Test1Component } from '../app/test1/test1.component';

// #docregion describeIt
describe('Test1Component', () => {
    it('does something correctly', () => {
        expect(true).toBe(true);
        // This is a test.
        // console.log('running js test ' + JSON.stringify(hero));
    });
    it('does something else also correctly', () => {
        expect(true).toBe(true);
    });
});
