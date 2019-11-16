import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) =>({
    login: () => dispatch(userAction.login(email,password))
});
const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    token: user.token,
    Userinfo: user.Userinfo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);