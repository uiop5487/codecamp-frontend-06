import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $isSoldout: Boolean) {
    fetchUseditems(page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      soldAt
      useditemAddress {
        address
        addressDetail
      }
      seller {
        _id
        name
      }
      pickedCount
    }
  }
`;
