import NewProductContainer from "../../../../../src/commons/componets/units/product/newproduct/newproduct.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../src/commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      useditemAddress {
        address
        addressDetail
      }
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  console.log(data?.fetchUseditem?.contents);

  return <NewProductContainer isEdit={true} data={data} />;
}
