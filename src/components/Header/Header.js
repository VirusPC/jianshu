import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from "./style";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { getSearchFocusAction, getSearchBlurAction } from '../../store/actionCreators'

const Header = (props) => {
  const { focused } = props;
  const { handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>

          <CSSTransition
            in={focused}
            timeout={5000}
            classNames="slide">
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i
            className={focused ? "focused iconfont" : "iconfont"}
          >
            &#xe623;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className="iconfont">&#xe615;</i>写文章
        </Button>
        <Button className='reg'>
          注册
        </Button>
      </Addition>
    </HeaderWrapper>
  )
}



const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(getSearchFocusAction());
    },
    handleInputBlur() {
      dispatch(getSearchBlurAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);