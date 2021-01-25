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

function Components(props) {

    const [item, setItem] = React.useState(null);
    React.useEffect(() => {
        Firebase.readUserData(props.route.params.id).then(data => {
            // const ab = [data];
            setItem(data);
            console.log(data);
          }).catch();
    })

    return (
            <>
            {
            item && (
                <>
                {/* <Image source={{uri : item.url}}/> */}
                {/* {
                props.context.showDate && ( 
                <Date>{moment(item.id, 'x').format('YYYY-MM-DD') }</Date>
                )} */}
                <Tags>{item.username}</Tags>
                <Tags>{item.email}</Tags> 

                <Button title='삭제' onPress={()=>{
                 Firebase.removeUserData(item.email)
                 .then(()=>{props.navigation.goBack();})
                 .catch();  
                    }}/>
                <Button title='수정 페이지' onPress={()=>{
                  props.navigation.navigate('ModifyView',{id : item.email})
                    }}/>

                </>)  
            }

            
                     
           </>
            

    )

}


Components = withContext(Components);
export default Components;