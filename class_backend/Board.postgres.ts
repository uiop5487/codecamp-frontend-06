import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  // 데이터 베이스 테이블로 클래스를 확장시켜줘야됨
  @PrimaryGeneratedColumn("increment") // 자동으로 만들어지는 컬럼 uid를 입력하면 고유한 아이디를 만들어줌
  number!: number; // 느낌표를 붙이면 필수입력이다. 라고 명시해준다.

  @Column({ type: "text" }) // db에 타입을 따로 지정을 해줘야함
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  // deletedAt: Date // sort-delete 삭제할때
}
