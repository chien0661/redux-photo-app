import { Formik, Form, FastField, Field } from "formik"
import Select from "react-select"
import PropTypes from 'prop-types';
import { Button, FormGroup, Input, Label } from "reactstrap"
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global"
import Images from "../../../../constants/images"

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {

    const { field, form, label, placeholder, type, disabled } = props
    const { name } = field

    console.log(field)

    return (
        <FormGroup>
            {label && (<Label for={name}>{label}</Label>)}
            <Input
                id={name}
                {...field}
                autoComplete="off"
                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    )
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

SelectField.defaultProps = {
    label: '',
    placeholder: 'placeholder select...',
    disabled: true,
}

function SelectField(props) {

    const { field, form, label, placeholder, options, disabled } = props
    const { name, value } = field
    const selectedOpiton = options.find(x => x.value === value)
    console.log(props)

    const handleSelectedOptionChange = (selectedOpiton) => {

        console.log(selectedOpiton)
    }

    // console.log(field)

    return (
        <FormGroup>
            <FormGroup>
                {label && (<Label for={name}>{label}</Label>)}
                <Select
                    id={name}
                    {...field}
                    value={selectedOpiton}
                    onChange={handleSelectedOptionChange}
                    options={options}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </FormGroup>

        </FormGroup>
    )
}

const PhotoForm = () => {

    const initialValue = {
        title: "",
        categoryId: 1
    }

    const handleRandomPhoto = (e) => {
        console.log(e)
        // e.preventdefault()
    }

    return (
        <Formik initialValues={initialValue}>
            {formikProp => {
                // console.log(formikProp);

                return (
                    <Form autoComplete="off">
                        {/* <Field /> */}

                        <FastField
                            //props của FastField
                            name="title"
                            component={InputField}

                            //prop cho component, ở đây là InputField
                            label="Title123"
                            placeholder="Title..."
                        />

                        <FastField
                            //props của FastField
                            name="categoryId"
                            component={SelectField}

                            //prop cho component, ở đây là SelectField
                            label="Category"
                            // placeholder="placeholder select..."
                            options={PHOTO_CATEGORY_OPTIONS}
                        />


                        <FormGroup>
                            <Label>Photo</Label>
                            <div>
                                <Button type="button" outline color="primary" onClick={handleRandomPhoto}>Random Photo</Button>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <img width="200px" height={200} src={Images.COLORFUL_BG} />
                            </div>
                        </FormGroup>
                    </Form>
                )
            }}

        </Formik>


    )
}

export default PhotoForm