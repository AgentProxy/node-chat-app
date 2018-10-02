let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Eric';
        var text = "Testing";
        var message = generateMessage(from,text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Eric';
        var longitude = '1';
        var latitude = '1';
        var message = generateLocationMessage(from, latitude, longitude);
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
})