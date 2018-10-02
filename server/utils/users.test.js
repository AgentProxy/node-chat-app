const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Eric',
            room: 'A'
        },{
            id: '2',
            name: 'Ther',
            room: 'B'
        },{
            id: '3',
            name: 'Kyne',
            room: 'A'
        }
    ]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '12345',
            name: 'Eric',
            room: 'The Office Fans'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var id = '1';
        var usersLength = users.users.length;
        var deletedUser = users.removeUser(id);
        expect(deletedUser).toMatchObject({
            id: '1',
            name: 'Eric',
            room: 'A'
        });
        expect(users.users.length).toEqual(2);
    });

    it('should not remove a user', () => {
        var id = 'adsfadf';
        var deletedUser = users.removeUser(id);
        expect(deletedUser).toBeFalsy();
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        var id = '1';
        var user = users.getUser(id);
        expect(user).toEqual({
            id: '1',
            name: 'Eric',
            room: 'A'
        });
    });

    it('should not find user', () => {
        var id = '1aq234';
        var user = users.getUser(id);
        expect(user).toBeFalsy();
    });

    it('should return names for room', () => {
        let userList = users.getUserList('A');
        expect(userList).toEqual(["Eric" , "Kyne"]);
    });
})