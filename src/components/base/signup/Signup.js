import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dialog, FlatButton, TextField, Avatar, FontIcon } from 'material-ui'
import { blueA700 } from 'material-ui/styles/colors'
import { withFormik, Form } from 'formik'
import Yup from 'yup'
import DropZone from 'react-dropzone'

import ModalTitle from '../../shared/ModalTitle'

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

    constructor(props) {
        super(props)

        this.state = {
            photo: null
        }
    }

    handleDropImage = (e) => {
        const { handleChange } = this.props

        for (const file of e.target.files) {
            const reader = new FileReader()
            reader.onload = () => {
                const fileAsDataURLString = reader.result
                this.setState({ photo: fileAsDataURLString })
            }
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.readAsDataURL(file);
        }
    }

    handleSubmitMiddleware = (e) => {
        // const newValues = {
        //     ...values,
        //     photo: this.state.photo
        // }

        console.log('passed ', e)
        this.props.handleSubmit(e)
    }

    render() {
        const {
            isOpen, onClose, values,
            handleChange, errors, touched,
            isSubmitting, handleSubmit
        } = this.props

        const { photo } = this.state
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
                        onClick={this.handleSubmitMiddleware}
                    />
                ]}
            >
                <form >
                    <div className="dropzone-container">
                        <label className="dropzone-wrapper">
                            <input
                                name="photo"
                                type="file"
                                style={styles.fileInput}
                                onChange={this.handleDropImage}
                                // onChange={handleChange}
                            />
                            {photo ? <Avatar src={photo} size={150} /> : <Avatar src="/assets/no-image.jpg" size={150} />}
                            <FontIcon className="material-icons upload-icon" color={blueA700}>file_upload</FontIcon>
                        </label>
                        {/* <DropZone
                            className="dropzone-wrapper"
                            onDrop={this.handleDropImage}
                            multiple={false} accept="image/*"
                            name="photo"
                        >
                            {values.photo ? <Avatar src={values.photo} size={150} /> : <Avatar src="/assets/no-image.jpg" size={150} />}
                            <FontIcon className="material-icons upload-icon" color={blueA700}>file_upload</FontIcon>
                        </DropZone> */}
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
                </form>
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
        setTimeout(() => {
            if (values.email === 'rafafhgkifh@gmail.com') {
                formikBag.setErrors({ email: 'That email is already taken' })
            }

            formikBag.setSubmitting(false)
        }, 2000)
        console.log(values)
        console.log('bag', formikBag)
    }
})(Signup)
