console.log("타입스크립트를 실행했어요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  # 프론트엔드에서 받는 타입은 따로 타입이 있다.
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  # 없는 타입을 만들어서 사용
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # 여기에 들어가는 보드는 타입이 없기때문에 따로 만들어 줘야함
    fetchBoards: [Board]
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String - 연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String # - 실제사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기

      // .find는 데이터를 찾아올 수 있게 해준다.
      const result = await Board.find();

      return result;
    },
  },
  Mutation: {
    // args: 데이터가 들어오게됨, context: 기타 요약정보, info: API에 대한 정보,
    //parent: 예들 들어 api들이 10개이상이 있다면 다른곳에 api를 요청하는 일이 생길수 있는데 이때 여기에 넣어주는 데이터가 위쪽에 매개변수로 들어가게 됨
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기

      // .insert를 사용하게 되면 데이터가 데이터베이스에 저장되게 된다.
      // await를 붙여줘야됨
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      // 수정할때 사용
      // Board.update({writer: "철수"}, {title: "제목2"})

      // 삭제할때 사용
      // Board.update({writer: "철수"}, {deletedAt: new Date()})
      // 데이터베이스에서 삭제가 되기때문에 가급적이면 사용하지 않는게 좋음
      // Board.delete({writer: "철수"})

      return "게시물을 등록했습니다!!!!!!!!!!!!!!!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // cors를 true로 해주게 되면 어디서든 요청을 하더라도 접속이 가능해진다.
  // cors: {
  //   // 이런식으로 사용하게 되면 origin에서만 요청이 가능해진다.
  //   origin: "http://naver.com",
  // },
});

const AppAdtaSource = new DataSource({
  type: "postgres", // 사용할 sql을 지정
  host: "34.64.124.189", // 자기가 지정한 host 번호 입력
  port: 5029, // 자기가 지정한 port 번호 입력
  username: "postgres", // 지정한 유저네임 입력
  password: "postgres2021", // 지정한 패스워드 입력
  database: "postgres",
  entities: [Board], // 불러올 데이터 목록 입력
  synchronize: true, // 동기화 여부 입력
  logging: true, // typeorm에 로그를 찍어준다.
});

AppAdtaSource.initialize()
  .then(() => {
    console.log("연결성공 ㅎㅎㅎ");

    // 백엔드 API를 오픈-리슨(24시간동안 접속가능하게끔 대기상태로 만들어주기)
    // .then은 성공했으면 어디 주소로 갈것인지
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  // 데이터연결을 실패했을때
  .catch(() => {
    console.log("연결실패 ㅠㅠㅠ");
  });
