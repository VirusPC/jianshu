import { SearchInfoWrapper, SearchInfoTitle, SearchInfoSwitch, SearchInfoItemList, SearchInfoItem } from "./style";

function SearchInfo() {
  return (<SearchInfoWrapper>
    <SearchInfoTitle>
      热门搜索
      <SearchInfoSwitch>换一批</SearchInfoSwitch>
    </SearchInfoTitle>
    <SearchInfoItemList>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>简书</SearchInfoItem>
      <SearchInfoItem>生活</SearchInfoItem>
      <SearchInfoItem>投稿</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>简书</SearchInfoItem>
      <SearchInfoItem>生活</SearchInfoItem>
      <SearchInfoItem>投稿</SearchInfoItem>
    </SearchInfoItemList>
  </SearchInfoWrapper>)
}

export default SearchInfo;