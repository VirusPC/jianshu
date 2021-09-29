import styled from 'styled-components';

const height = 56;
const minWidth = 940;
const logoWidth = 100;
const minSearchWidth = 160;
const maxSearchWidth = 240;

export const SearchInfoWrapper = styled.div`
  position: absolute;
  left: 9;
  top: ${height}px;
  width: ${maxSearchWidth}px;
  padding: 10px 20px;
  margin-left: 20px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`;

export const SearchInfoItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`

export const SearchInfoItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878
`