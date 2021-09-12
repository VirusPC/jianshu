import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

const height = 56;
const minWidth = 940;
const logoWidth = 100;

export const HeaderWrapper = styled.div`
  position: relative;
  height: ${height + "px"};
  min-width: ${minWidth + "px"};
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100px;
  height: ${height + "px"};
  background-image: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  box-sizing: border-box;
  padding: 0 220px 0 ${logoWidth + 10}px;
  left: 100px;
  width: 100%;
  height: 100%;
  marign: 0 auto;
`

export const NavItem = styled.div`
  line-height: ${height + "px"};
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a
  }
`

// line-height + text-align实现居中
export const SearchWrapper = styled.div`
 float: left;
 position: relative;
 .iconfont{
   position: absolute;
   right: 5px;
   bottom: 5px;
   width: 30px;
   line-height: 30px;  
   text-align: center;
   border-radius: 15px;
   &.focused {
     background: #777;
     color: #fff;
   }
 }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder{
    color: #999;
  }
  // &.focused{
  //   width: 240px;
  // }
  &.slide-enter{
    width: 160px;
  }
  &.slide-enter-active{
    width: 240px;
    transition: all .2s ease-out;
  }
  &.slide-enter-done{
    width: 240px;
  }
  &.slide-exit{
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-exit-done{
    width: 160px;
  }
  `

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: ${height + "px"};
`;

export const Button = styled.button`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  background: none;
  &.reg {
    color: #eec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`;

