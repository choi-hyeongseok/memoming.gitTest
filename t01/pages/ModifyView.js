import React from 'react'
import styled from 'styled-components/native'
import Firebase from '../net/firebase'
import { withContext } from 'context-q';
// import moment from 'moment'

const Title = styled.Text`
font-size : 36px;

`
const Image = styled.Image`
width : 100%;
height : 360px;
`

const Tags = styled.Text`
font-size : 18px;
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

    const read = () => {
        Firebase.readUserData(props.route.params.id).then(data => {
            console.log(data.username);
            setName(data.username)
            setEmail(data.setEmail)
          }).catch();
    }

    React.useEffect(() => {  
    });

    read;
    
    return (
        <>
            {/* <Image source={{uri : item.url}}/> */}
            {/* {
            props.context.showDate && ( 
            <Date>{moment(item.id, 'x').format('YYYY-MM-DD') }</Date>
            )} */}

            <Input
            value={name}
            onChangeText={value => setName( value )}/> 
            
            {/* <Input
            value={email}
            onChangeText={value => setEmail( value )}/> */}


            <Button title='저장' onPress={() => {
            Firebase.updateUserData(email, name, email, 'null')
                .then(() => {
                    props.navigation.goBack();
                })
            }}/>           
        </>
    )

}


Components = withContext(Components);
export default Components;