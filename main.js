import { allUsers, linked } from './linked';

function compareArrays() {
    var result = []
    for (i = 0; i < allUsers.length; i++) {
        if(allUsers[i].id !== linked[i].id){
            result.push(allUsers[i])
        }
      }
      return result
}

export {compareArrays};