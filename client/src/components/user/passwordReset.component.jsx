import React,{useState} from 'react';
import { Button } from "antd";
import {auth} from "../../firebase";
import styles from "../../sass/modules/auth/register.module.scss";
import {useToasts} from "react-toast-notifications";

function passwordResetComponent() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {addToast} = useToasts();
  const handleSubmit = async (e)=>{
      e.preventDefault();
      setIsLoading(true);
      
      auth.currentUser.updatePassword(password).then(_=>{
        addToast('password Successfully updated',{appearance : 'success', autoDismiss:true});
        setIsLoading(false);
      }).catch(err=>{
        addToast(err.message,{appearance : 'error', autoDismiss:true});
        setIsLoading(false);
      });
  }

    return (
        <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h1>Reset your password here</h1>
          
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <Button
            className={styles.formButton}
            loading={isLoading}
            onClick={handleSubmit}
            disabled={!password}
          >
            Reset
          </Button>
          <br />

          
          
        </div>
      </form>
    </div>
    )
}

export default passwordResetComponent
