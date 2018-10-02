
class Users{
    constructor(){
        this.users = [];
    }
    addUser(id, name, room){
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id){
        let user = this.getUser(id);

        if(user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    getUser(id){
        let user = this.users.filter((user) => {
            if(user.id === id){
                return true;
            }
        });
        return user[0];
    }
    getUserList(room){
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {
    Users
};

let x = new Users();
x.getUserList('A');

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription(){
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// var me = new Person('Eric', 20);
// var description = me.getUserDescription();
// console.log(description);