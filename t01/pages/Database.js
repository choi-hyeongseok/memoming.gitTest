import React from 'react';
import styled from 'styled-components/native';
import { withContext } from 'context-q';
import database,{firebase} from '@react-native-firebase/database';
// import auth from '@react-native-firebase/auth';
import RNFS from 'react-native-fs' 
import { Text } from 'react-native';
import Firebase from '../net/firebase';
import axios from 'axios'

// RNFS.readdir(RNFS.MainBundlePath)
// .then((result) => {
//   console.log('Got result',result);

//   return Promise.all([RNFS.stat(result[0].path),result[0].path]);
// })

const Title = styled.Text`
font-size : 36px;
`
const Button = styled.Button`
`
const ListItem = styled.TouchableOpacity`
flex-direction : row;
align-items : center;
border : 1px solid #e55e5e;
`
// const database = firebase.
//     app().
//     database('https://oooo-f989e-default-rtdb.firebaseio.com/');

function Components(props) {
    const [list, setList] = React.useState([]);
    
    // React.useEffect(()=>{  
    //   Firebase.dataList().then(data => {
    //     console.log(data);
    //     setList(data);
    //   }).catch();
    //     }
    //   );

    return (
            <>
            <Title>
                목록
            </Title>

                {
                list.map(item => ( 
                    <ListItem key={item.email} onPress={()=> {
                      props.navigation.navigate('View',{id : item.email});
                    }}>
                    <Text>이름: {item.username}</Text>
                    <Text>이메일 : {item.email}</Text>
                    </ListItem>
                ))
                }

              <Button title='구글 계정 테스트' onPress={()=>{
                props.navigation.navigate('Googlelogin');
            }}/>

              <Button title='신규 작성 테스트' onPress={()=>{
                props.navigation.navigate('Form');
            }}/>

             <Button title='노드 서버 테스트' onPress={()=>{
                props.navigation.navigate('AxiosView');
            }}/>

            </>
    )

}

Components = withContext(Components);
export default Components;