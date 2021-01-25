import React from 'react'
import styled from 'styled-components/native'
import Firebase from '../net/firebase'
import { withContext } from 'context-q';
// import moment from 'moment'
import axios from 'axios';

const Title = styled.Text`
font-size : 36px;

`
const Image = styled.Image`
width : 100%;
height : 360px;
`

const Tags = styled.Text`
font-size : 12px;
`

const Date = styled.Text`
color : #aaaaaa;
font-size : 14px;
text-align : right;
`

const Button = styled.Button`
`

const Input = styled.TextInput`
    width: 100%;
    font-size: 16px;
    padding: 4px;
    border: 1px solid #e5e5e5;
`;
 

function Components(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    
  function klikGet(){
        var url = 'http:/172.16.105.200:3210/data';
     axios.get(url)
        .then((ambilData) => {
        console.log(ambilData.data);
        setName(ambilData.data.nama);
        setEmail(ambilData.data.usia);
        })
    };
 
    React.useEffect(() => {  
    });

    
    return (
        <>
        <Tags>Get node server data / localhost:3120/data /</Tags>
        <Tags>get data name : {name}</Tags>
        <Tags>get data Email : {email}</Tags>

            <Button title='Get Data' onPress={() => {
                console.log('dkdkdk');
                klikGet()

                
            }}/>           
        </>
    )

}


Components = withContext(Components);
export default Components;