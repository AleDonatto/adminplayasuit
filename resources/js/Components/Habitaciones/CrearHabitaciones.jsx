import React from 'react'
import { useForm,useState,useRef, useCallback } from 'react'

//import 'react-dropzone-uploader/dist/styles.css'
//import Dropzone from 'react-dropzone-uploader'
import ImageUploading from 'react-images-uploading';

export const CrearHabitaciones = () => {

    const [habitaciones, sethabitaciones] = useState({
        nombre: '',
        entrada: '',
        salida: '',
        vista: '',
        amenidades: '',
        damenidades: '',
        image: null
    })

    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };


    // specify upload params and url for your files
  //const getUploadParams = ({ meta }) => { return { url: 'http://adminplayasuit.test/habitaciones' } }
  
  // called every time a file's `status` changes
  //const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  /*const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }*/

    const showImage = useRef(false)
    
    const handleHabitacion = (e) => {
        e.preventDefault()
        console.log(habitaciones)
    }

    const handleInputChange = (e) => {
        sethabitaciones({
            ...habitaciones,
            [e.target.name]:e.target.value,
        })
    }
    
    return (
        <div className="px-6">
            <form method="post" className="pb-6 pt-2 px" onSubmit={handleHabitacion}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="mb-3 block text-base font-semibold text-[#07074D]">Habitación</label>
                    <input type="text" name="nombre" id="" placeholder="Nombre Habitación" onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="entrada" className="mb-3 block text-base font-semibold text-[#07074D]">Hora Entrada:</label>
                            <input type="time" name="entrada" id="" onChange={handleInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="salida" className="mb-3 block text-base font-semibold text-[#07074D]">Hora Salida:</label>
                            <input type="time" name="salida" id="" onChange={handleInputChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="vista" className="mb-3 block text-base font-semibold text-[#07074D]">Vista:</label>
                            <input type="text" name="vista" id="" placeholder="Vista Habitación" onChange={handleInputChange} 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="salida" className="mb-3 block text-base font-semibold text-[#07074D]">Amenidades:</label>
                            <input type="text" name="amenidades" id="" placeholder="Amenidades Habitación" onChange={handleInputChange} 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="damenidades" className="mb-3 block text-base font-semibold text-[#07074D]">Descripcion Amenidades</label>
                    <textarea name="damenidades" id="" cols="10" rows="5" placeholder="Descripcion de amenidades" onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="vista" className="mb-1 block text-base font-semibold text-[#07074D]">Agrega una imagen de la habitacion:</label>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-5">
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                // write your building UI
                                    <div className="upload__image-wrapper">
                                        <button
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            Click or Drop here
                                        </button>
                                        &nbsp;
                                        <button onClick={onImageRemoveAll}>Remove all images</button>
                                        {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                            <button onClick={() => onImageUpdate(index)}>Update</button>
                                            <button onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                )}
                            </ImageUploading>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="salida" className="mb-3 block text-base font-semibold text-[#07074D]">Vista previa de imagen</label>
                            { showImage === true ? <img src="" alt="" /> : <img src="/img/preview.png" alt=""/>}
                        </div>
                    </div>
                </div>
                <div>
                    <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}
