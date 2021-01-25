
// import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'
import database,{firebase} from '@react-native-firebase/database';


// async function read(key) {
//     const data = await AsyncStorage.getItem(key);
//     let json = [];
//     if(data !== null ){
//         json = JSON.parse(data);
//     }
//     return json;
// }

async function dataLenth(){
    
    const len = 0;

    database()
    .ref('users')
    .limitToFirst(10)
    .once('value').then(snapshot => {
      console.log('User data: ', snapshot.val())
      const result = snapshot.val();
         len=result.length
         console.log(len)
    })
    return len;
}

// async function store(key, value) {
    // await AsyncStorage.setItem(key, value);
// }

// async function readAll(id) {
//     const data = read(KEY);
//     return data;
// }

// async function readById(id) {
//     const data = await read(KEY);
//     return _.find(data, element => element.id === id);
// }

async function FirebasePush(values){
    // const data = await read(KEY);
    // data.push({
    //     ...values,
    //     id: new Date().getTime().toString(),
    // });
    // return await store(KEY, JSON.stringify(data));
    // const data = 
    // database().ref(`/users/1`).set({username :'최형석', email : 'chlgudtjr987@gmail.com',}).then(()=>{alert('gs')});
    // const len = dataLenth();
}


// async function append(values){
//     const data = await read(KEY);
//     data.push({
//         ...values,
//         id: new Date().getTime().toString(),
//     });
//     return await store(KEY, JSON.stringify(data));
// }

// export const read = read;
// export const store = store;
// export const readALL = readALL;
// export const readById = readById;
// export const append = append;

export default {
    FirebasePush,
}