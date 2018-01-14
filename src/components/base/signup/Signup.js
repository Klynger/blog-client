import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, FlatButton, TextField } from 'material-ui'
import { withFormik, Form } from 'formik'
import Yup from 'yup'

import ModalTitle from '../../shared/ModalTitle'


const styles = {
    container: {
        width: '450px',
        maxWidth: '92%'
    }
}

class Signup extends Component {

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
                title={<ModalTitle title="Signup" />}
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
                        label="Create"
                        secondary
                        keyboardFocused={true}
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    />
                ]}
            >
                <Form>
                    <TextField
                        name="name"
                        floatingLabelText="Name"
                        errorText={touched.name && errors.name && <p>{errors.name}</p>}
                        value={values.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <br />
                    <TextField
                        name="email"
                        type="email"
                        errorText={touched.email && errors.email && <p>{errors.email}</p>}
                        floatingLabelText="Email"
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <br />
                    <TextField
                        type="password"
                        name="password"
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
    mapPropsToValues({ name, email }) {
        return {
            name: name || '',
            email: email || '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().min(4, 'Password must be 4 characters or longer').required('Password is requred')
    }),
    handleSubmit(values, { setErrors, setSubmitting }) {
        setTimeout(() => {
            if(values.email === 'rafafhgkifh@gmail.com') {
                setErrors({ email: 'That email is already taken' })
            }
            
            setSubmitting(false)
        }, 2000)
        console.log(values)
    }
})(Signup)
