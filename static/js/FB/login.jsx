import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from "react-redux";

class FbLogin extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {

    return (
        <div>
            {this.props.user ? (<div>Hello! {this.props.user.name}</div>): (      <FacebookLogin
        appId="456837855135154"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_events"
        callback={this.props.setUserLogin}
      />
)}
        </div>
    )
  }
}

const mapStateToProps = function (state) {
    return {user: state.FbUserReducer.user}
};

const mapDispatchToProps = function (dispatch) {
        return {setUserLogin(resp){
            dispatch({type: 'FB_USER_LOGIN', payload: resp})
            }}
    };

export { mapDispatchToProps }

export default connect(mapStateToProps, mapDispatchToProps)(FbLogin)