import React from "react";
import styles from "./FormComponents.module.css";

const FormComponent = ({input, meta, child, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={showError && styles.formControl + ' ' + styles.error}>
            <div>
                {props.children}
            </div>
        {showError && <span className={styles.error}>{showError}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormComponent {...props}><textarea {...input} {...restProps}/></FormComponent>
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormComponent {...props}><input {...input} {...restProps}/></FormComponent>
};

