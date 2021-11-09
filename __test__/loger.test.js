
'use strict'

const loggerMiddleware = require('../src/middleware/logger');

describe('logger middleware', () => {

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn()
    
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    
    afterEach(() => {
        consoleSpy.mockRestore();
    })
    
    test('doset have any console log', () => {
        loggerMiddleware(req, res, next);
        expect(consoleSpy).toHaveBeenCalled()
        
    })
    
    test('check if the next work', () => {
        loggerMiddleware(req, res, next);
        expect(next).toHaveBeenCalled()
        
    })
    
})