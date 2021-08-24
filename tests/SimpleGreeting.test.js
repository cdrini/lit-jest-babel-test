import { describe, expect, test } from '@jest/globals';
import { SimpleGreeting } from '../SimpleGreeting.js';

describe('SimpleGreeting', () => {
    test('foo bar', () => {
        const s = new SimpleGreeting();
        s.name = "JIM";
        expect(s.name).toEqual("JIM");
    });
});
