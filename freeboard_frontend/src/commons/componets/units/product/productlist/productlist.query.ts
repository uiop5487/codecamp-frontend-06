import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
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
