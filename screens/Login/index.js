import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) =>{
  return{
      login:(email,password)=>{
          return dispatch(userAction.login(email,password));
      }
  }
}

export default connect(null, mapDispatchToProps)(Container);