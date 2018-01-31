import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, FlatButton, TextField, Avatar, FontIcon } from 'material-ui'
import { blueA700 } from 'material-ui/styles/colors'
import { withFormik, Form } from 'formik'
import Yup from 'yup'
import DropZone from 'react-dropzone'

import ModalTitle from '../../shared/ModalTitle'
import { mutationCreateUser } from './SignupQueryGenerator'
import { request } from '../../../utils/HTTPClient'

const styles = {
    container: {
        width: '450px',
        maxWidth: '92%'
    },
    fileInput: {
        display: 'none'
    },
    avatarInput: {
        display: 'none'
    }
}

class Signup extends Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    handleDropImage = (files) => {

        for (const file of files) {
            const reader = new FileReader()
            reader.onload = () => {
                const fileAsDataURLString = reader.result
                this.props.setFieldValue('photo', fileAsDataURLString)
            }
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.readAsDataURL(file);
        }
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
                    <div className="dropzone-container">
                        <DropZone
                            className="dropzone-wrapper"
                            onDrop={this.handleDropImage}
                            multiple={false} accept="image/*"
                            name="photo"
                        >
                            {values.photo ? <Avatar src={values.photo} size={150} /> : <Avatar src="/assets/no-image.jpg" size={150} />}
                            <FontIcon className="material-icons upload-icon" color={blueA700}>file_upload</FontIcon>
                        </DropZone>
                    </div>
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
    mapPropsToValues({ name, email, photo }) {
        return {
            name: name || '',
            email: email || '',
            password: '',
            photo: null
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().min(4, 'Password must be 4 characters or longer').required('Password is requred')
    }),
    handleSubmit(values, formikBag) {

        request(mutationCreateUser(values)).then(response => {

            if (response.data.createUser) {
                formikBag.props.onClose(true, true)
            } else {
                if(response.errors.length > 0) {
                    const errors = response.errors.map(error => JSON.parse(error.message))
                    

                    const errorsObj = errors.reduce((prev, curError, i, errorsArray) => {
                        switch(curError.name) {
                            case 'DuplicateEmail':
                                return {
                                    ...prev,
                                    email: curError.message
                                }
                            default:
                                return prev
                        }
                    }, {})

                    formikBag.setErrors(errorsObj)
                }
                
            }
            formikBag.setSubmitting(false)
        }).catch(error => {
            console.log('error ', error)
            formikBag.setSubmitting(false)
            // formikBag.setErrors({ password:  })
        })

        console.log(values)
        console.log('bag', formikBag)
    }
})(Signup)
