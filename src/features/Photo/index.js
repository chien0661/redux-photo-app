import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const MainPage = React.lazy(() => import("./pages/Main"))
const AddEditPage = React.lazy(() => import("./pages/AddEdit"))

const Photo = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<MainPage />} />
                <Route path=':photoId' element={<AddEditPage />} />
            </Routes>
        </>
    )
}

export default Photo