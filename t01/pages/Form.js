import React from 'react';
import styled from 'styled-components/native';
import Firebase from '../net/firebase'

const Title = styled.Text`
    font-size: 36px;
`;
const Button = styled.Button``;

const Image = styled.Image`
    width: 100%;
    height: 360px;
`;

const Input = styled.TextInput`
    width: 100%;
    font-size: 16px;
    padding: 4px;
    border: 1px solid #e5e5e5;
`;

function Component(props) {
    // const [url, setUrl] = React.useState(null);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    // const selectImage = function () {
    //     uploadImage()
    //     .then(url => {
    //         setUrl(url);
    //     }).catch(error => {
    //         alert(error.message);
    //     });
    // }

    return (
        <>
            {/* <Button title='이미지 선택' onPress={selectImage}/>
            {url && (
                <Image source={{uri: url}}/>
            )} */}

            <Input placeholder='이름'
                value={name}
                onChangeText={value => setName( value )}/>
                
            <Input placeholder='이메일'
                value={email}
                onChangeText={value => setEmail( value )}/>
                
            <Button title='저장' onPress={() => {
                Firebase.writeUserData(email, name, email, 'null')
                    .then(() => {
                        props.navigation.goBack();
                    });
            }}/>
        </>
    )
}

export default Component;