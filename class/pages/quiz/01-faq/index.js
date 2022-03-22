import { Main, BackGround, Search, MainBox1, MainBox4, ImogeBox, BottomText1,
    MainBox2, My, ProfileBox, SubBox1, UnderArrow, Qtext1, Qtext2, BottomImoge, BottomText,
    DivedLine, MainBox3, SubBox2, Qbox, SearchImoge, ProfName, ProfImg, RightArrow} from'../../../styles/quiz';

// import search_logo from '../../../public/img/search.png'



export default function PageMy() {




    return (
        <BackGround>
            <Main>
                <Search>
                    <SearchImoge src='/img/search.png'/>
                </Search>
                <MainBox1>
                    <My>마이</My>
                    <ProfileBox>
                        <ProfImg src='/img/lotto.png'/>
                        <ProfName>김진성</ProfName>
                        <RightArrow src='/img/ic-28-arrow.png'/>
                    </ProfileBox>
                </MainBox1>
                <MainBox2>
                    <SubBox1>공지사항</SubBox1>
                    <SubBox1>이벤트</SubBox1>
                    <SubBox1>FAQ</SubBox1>
                    <SubBox1>Q&amp;A</SubBox1>
                </MainBox2>
                <DivedLine></DivedLine>
                <MainBox3>
                    <Qbox>
                        <SubBox2>
                            <Qtext1>Q. 01</Qtext1>
                            <Qtext2>리뷰 작성은 어떻게 하나요?</Qtext2>
                        </SubBox2>
                        <UnderArrow src='/img/ic-70-arrow-right.png'/>
                    </Qbox>
                    <Qbox>
                        <SubBox2>
                            <Qtext1>Q. 02</Qtext1>
                            <Qtext2>리뷰 수정/삭제는 어떻게 하나요?</Qtext2>
                        </SubBox2>
                        <UnderArrow src='/img/ic-70-arrow-right.png'/>
                    </Qbox>
                    <Qbox>
                        <SubBox2>
                            <Qtext1>Q. 03</Qtext1>
                            <Qtext2>아이디/비밀번호를 잊어버렸어요.</Qtext2>
                        </SubBox2>
                        <UnderArrow src='/img/ic-70-arrow-right.png'/>
                    </Qbox>
                    <Qbox>
                        <SubBox2>
                            <Qtext1>Q. 04</Qtext1>
                            <Qtext2>회원탈퇴를 하고싶어요.</Qtext2>
                        </SubBox2>
                        <UnderArrow src='/img/ic-70-arrow-right.png'/>
                    </Qbox>
                    <Qbox>
                        <SubBox2>
                            <Qtext1>Q. 05</Qtext1>
                            <Qtext2>출발지 설정은 어떻게 하나요?</Qtext2>
                        </SubBox2>
                        <UnderArrow src='/img/ic-70-arrow-right.png'/>
                    </Qbox>
                    <Qbox>
                        <SubBox2>
                            <Qtext1>Q. 06</Qtext1>
                            <Qtext2>비밀번호를 변경하고 싶어요.</Qtext2>
                        </SubBox2>
                        <UnderArrow src='/img/ic-70-arrow-right.png'/>
                    </Qbox>
                </MainBox3>
                <MainBox4>
                    <ImogeBox>
                        <BottomImoge src='/img/ic-58-main-home-unselected.png'/>
                        <BottomText>홈</BottomText>
                    </ImogeBox>
                    <ImogeBox>
                    <BottomImoge src='/img/ic-58-main-location-unselected.png'/>
                        <BottomText>잇츠로드</BottomText>
                    </ImogeBox>
                    <ImogeBox>
                        <BottomImoge src='/img/ic-58-main-like-unselected.png'/>
                        <BottomText>마이찜</BottomText>
                    </ImogeBox>
                    <ImogeBox>
                        <BottomImoge src='/img/ic-58-main-my-selected.png'/>
                        <BottomText1>마이</BottomText1>
                    </ImogeBox>
                </MainBox4>
            </Main>
        </BackGround>
    )
}