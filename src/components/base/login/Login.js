import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, FlatButton, TextField } from 'material-ui'
import { withFormik, Form } from 'formik'
import Yup from 'yup'

import ModalTitle from '../../shared/ModalTitle'

const styles = {
    container: {
        width: '400px',
        maxWidth: '92%'
    }
}

class Login extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    render() {
        const {
            isOpen, onClose, values,
            handleChange, errors, touched,
            isSubmitting, handleSubmit
        } = this.props

        return (
            <Dialog
                title={<ModalTitle title="Login" />}
                open={isOpen}
                onRequestClose={onClose}
                contentStyle={styles.container}
                modal
                actions={[
                    <FlatButton
                        label="Cancel"
                        primary
                        onClick={onClose}
                    />,
                    <FlatButton
                        label="Login"
                        secondary
                        keyboardFocused={true}
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    />
                ]}
            >
                <Form>
                    <TextField
                        name="email"
                        type="email"
                        errorText={touched.email && errors.email && <p>{errors.email}</p>}
                        floatingLabelText="Email"
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        name="password"
                        type="password"
                        errorText={touched.password && errors.password && <p>{errors.password}</p>}
                        floatingLabelText="Password"
                        value={values.password}
                        onChange={handleChange}
                        fullWidth
                    />
                </Form>
            </Dialog>
        )
    }
}

export default withFormik({
    mapPropsToValues({ email }) {
        return {
            email: email || '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().min(4, 'Password must be 4 characters or longer').required('Password is requred')
    }),
    handleSubmit(values, { setErrors, setSubmitting }) {
        setSubmitting(false)
        console.log(values)
    }
})(Login)
