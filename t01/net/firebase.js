import React from 'react';
import database from '@react-native-firebase/database';
import auth, { firebase } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage'


// 데이터 전체 조회
async function dataList() {
      let list = []
      await database().ref('users').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          list.push(childData);
          // ...
        });     
      });
      return list;
    }

// 데이터 추가
async function writeUserData(userId, name, email, imageUrl) {
    database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

// 데이터 수정
async function updateUserData(userId, name, email, imageUrl) {
  database().ref('users/' + userId).update({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


// 데이터 삭제
async function removeUserData(userId) {
    await database()
    .ref('/users/'+userId)
    .set(null);
}


// 데이터 선택 조회(ID)
async function readUserData(userId) {
    let result = {
        email : '',
        username : '',
    };
    await database().ref('/users/' + userId).once('value').then((snapshot) => {
        result.email = snapshot.val().email;
        result.username = snapshot.val().username;
    console.log('User data: ', result);
  // ...
});
return result;
}

// 데이터 선택 조회(Email)


//  // database()
//   // .ref(`/users/${userId}`)
//   // .once('value')
//   // .then(snapshot => {
//   //   console.log('User data: ', snapshot.val());
//   // });

// //   database()
//   // .ref(`/users/123`)
//   // .set({username :'seok',
//   //       email : 'eddd',});

//   // database()
//   // .ref(`/words/`)
//   // .once('value')
//   // .then(snapshot => {
//   //   console.log('User data: ', snapshot.val());
//   // });

// // function read() {
// //   const data = database()
// //   .ref(`/words/0`)
// //   .once('value')
// //   .then(snapshot => {
// //     setList(snapshot.val)
// //     console.log(typeof(snapshot.val))});

// //     // let json = [];
// //     // if(data !== null ){
// //     //     json = JSON.parse(data);
// //     // }
// // //     return json;
// //     return [{weight : 12,word : '111'}];
// // }


// // //////////////////////////////////////////////////////////////////////////
// async function read(key) {
//     const data = await AsyncStorage.getItem(key);
//     let json = [];
//     if(data !== null ){
//         json = JSON.parse(data);
//     }
//     return json;
// }

// async function readAll() {
//   const data = []

//       database()
//       .ref('users')
//       .limitToFirst(10)
//       .once('value').then(snapshot => {
//         console.log('User1 data: ', snapshot.val())
//         const result = snapshot.val();
//         data.push(result);
//       })
    
//     return data;
// }
 
// // async function readByEmail(email) {
// //     const data = await read(KEY);
// //     return _.find(data, element => element.id === id);
// // }

// /////////////////////////////////////////////////////////////////////////////
// // async function store(key, value) {
// //   await AsyncStorage.setItem(key, value);
// // }

// /////////////////////////////////////////////////////////////////////////////
// // set/ write


// async function dataLenth(){
    
//   const len = 0;

//   database()
//   .ref('users')
//   .limitToFirst(10)
//   .once('value').then(snapshot => {
//     console.log('User data: ', snapshot.val())
//     const result = snapshot.val();
//        len=result.length
//        console.log(len)
//   })
//   return len;
// }


// async function FirebasePush(values){
//   // const data = await read(KEY);
//   // data.push({
//   //     ...values,
//   //     id: new Date().getTime().toString(),
//   // });
//   // return await store(KEY, JSON.stringify(data));
//   // const data = 
//   // database().ref(`/users/1`).set({username :'최형석', email : 'chlgudtjr987@gmail.com',}).then(()=>{alert('gs')});
//   // const len = dataLenth();
// }


// // export const read = read;
// // export const store = store;
// // export const readALL = readALL;
// // export const readById = readById;
// // export const append = append;

export default {
  dataList,
  writeUserData,
  readUserData,
  removeUserData,
  updateUserData,
}