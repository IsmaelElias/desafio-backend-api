const { notOverlap } = require('../../src/Actions/Rules');

describe('notOverlap', () => {
    it('should not overlap', () => {
        const interval = {
            start: '09:00',
            end: '09:20'
        };
    
        const array = [
            {
                start: '08:00',
                end: '08:20',
            },
            {
                start: '08:30',
                end: '08:50'
            },
            {
                start: '09:30',
                end: '09:50'
            }
        ];
    
    
        const result = notOverlap(interval, array);
    
        expect(result).toBe(true);
    })
    
    it('should overlap', () => {
        const interval = {
            start: '09:00',
            end: '09:20'
        };
    
        const array = [
            {
                start: '08:50',
                end: '09:10',
            },
            {
                start: '09:20',
                end: '08:40'
            },
        ];
    
    
        const result = notOverlap(interval, array);
    
        expect(result).toBe(false);
    })
})