import { MyBox, Title, Textbox, TextboxName, Box } from '../../styles/emotion'



export default function AAApage() {

    //여기는 자바스크립트


  return (
      <MyBox>
          <Title>로그인</Title>
          <Textbox>
              <TextboxName>아이디</TextboxName>
              <Box type="text"/>
          </Textbox>
          <Textbox>
              <TextboxName>비밀번호</TextboxName>
              <Box type="text"/>
          </Textbox>
      </MyBox>
  )
}
