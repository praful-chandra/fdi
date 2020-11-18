import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase";
import styles from "../../sass/modules/auth/register.module.scss";
import { useToasts } from "react-toast-notifications";
import { Button } from "antd";
import { userLoading, userLoadingDone } from "../../redux/actions/userActions";

function ResetPassword({ history, user, userLoadingDone, userLoading }) {
  const [email, setEmail] = useState("");

  const { addToast } = useToasts();

  useEffect(() => {
    if (user.user) {
      history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    userLoading();
    if (!email) {
      addToast("enter an valid email address", {
        appearance: "error",
        autoDismiss: true,
      });
      userLoadingDone();
      return;
    }
    const config ={
        url : process.env.REACT_APP_RESETPASSWORD_REDIRECT_URL,
        handleCodeInApp : true
      }

    await auth.sendPasswordResetEmail(email,config).then(_=>{
            setEmail('');
            userLoadingDone();
            addToast("email has been sent",{appearance :'success'})
    }).catch(err=>{
        addToast(err.message, {
            appearance: "error",
            autoDismiss: true,
          });
          userLoadingDone();
    });
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h1>Forgot password</h1>
          <input
            type="email"
            className="form-control"
            autoFocus
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            loading={user.userLoading}
            className={styles.formButton}
            onClick={handleSubmit}
            disabled={!email}
          >
            get link
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { userLoading, userLoadingDone })(
  ResetPassword
);
