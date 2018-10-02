const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString',()=>{

    it('should reject non-string values', () => {
        let name = {
            name: 'Eric',
        };
        let roomName = ['1'];
        let isRealName= isRealString(name);
        let isRealRoom = isRealString(roomName);
        expect(isRealName).toBeFalsy();
        expect(isRealRoom).toBeFalsy();
    })

    it('should reject string with only spaces', () => {
        let name = '   '
        let roomName = '   ';
        let isRealName= isRealString(name);
        let isRealRoom = isRealString(roomName);
        expect(isRealName).toBeFalsy();
        expect(isRealRoom).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        let name = '  eric  '
        let roomName = '  123  ';
        let isRealName= isRealString(name);
        let isRealRoom = isRealString(roomName);
        expect(isRealName).toBeTruthy();
        expect(isRealRoom).toBeTruthy();
    });
});
