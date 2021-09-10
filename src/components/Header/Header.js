import { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from "./style";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    }
  }

  render() {
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
              in={this.state.focused}
              timeout={5000}
              classNames="slide">
              <NavSearch
                className={this.state.focused ? "focused" : ""}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={this.state.focused ? "focused iconfont" : "iconfont"}
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

  handleInputFocus = () => {
    this.setState({
      focused: true
    })
  }

  handleInputBlur = () => {
    this.setState({
      focused: false
    })
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);