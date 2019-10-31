import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "../../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
      userinfoRefresh:(token)=>{
        return dispatch(userAction.userinfoRefresh(token));
      }
    }
}
const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    makeProfile: user.makeProfile,
    token: user.token,
    profile: user.profile
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);