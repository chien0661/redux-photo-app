import Select from "react-select"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global"
import Images from "../../../../constants/images"

const PhotoForm = () => {

    const handleRandomPhoto = (e) => {
        e.preventdefault()
    }

    return (

        <Form autoComplete="off">
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input autoComplete="off" name="title" id="titleId" />
            </FormGroup>

            <FormGroup>
                <Label for="categeryId">Category</Label>
                <Select name="category" options={PHOTO_CATEGORY_OPTIONS} id="categoryId" />
            </FormGroup>

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
}

export default PhotoForm