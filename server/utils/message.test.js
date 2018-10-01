let expect = require('expect');
let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', (done) => {
        var from = 'Eric';
        var text = "Testing";
        var message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        // expect(from).toBe(message.from);
        // expect(text).toBe(message.text);
        expect(message).toMatchObject({from, text});
        done();
    });
})