import Banner from "../../../../components/Banner"
import PhotoForm from "../../components/PhotoForm"
import './style.scss'

const AddEditpage = () => {

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />
            <div className="photo-edit__form">
                <h2>Add/Edit Page</h2>
                <PhotoForm />
            </div>
        </div>
    )
}

export default AddEditpage