import React from 'react'
import { useState,useRef, useCallback } from 'react'
import { useForm } from '@inertiajs/react';
import Swal from 'sweetalert2'

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
        image: null,
        urlImage: ''
    })

    const [images, setImages] = useState(null);   
    const { data, setData, errors, post, progress } = useForm({
        title: "",
        image: null,
    });
    const maxNumber = 1;

    const handleSaveImage = (e) => {
        console.log(e.target.files[0])
        setData("image", e.target.files[0])
    }

    //imageList, addUpdateIndex
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        //console.log(imageList[0].file);
        setImages(imageList);
    };
    
    const handleHabitacion = (e) => {
        e.preventDefault()

        if(images !== null){
            sethabitaciones({
                ...habitaciones, 
                image: images[0].file
            })
        }

        const formData = new FormData()
        formData.append('nombre', habitaciones.nombre)
        formData.append('entrada', habitaciones.entrada)
        formData.append('salida', habitaciones.salida)
        formData.append('vista', habitaciones.vista)
        formData.append('amenidades', habitaciones.amenidades)
        formData.append('damenidades', habitaciones.damenidades)
        formData.append('imageH', habitaciones.image)
        formData.append('urlImage', habitaciones.urlImage)

        axios.post('/habitaciones/create', habitaciones)
        .then(res => {
            console.log(res)

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: res.data.statusText,
                showConfirmButton: false,
                timer: 1500
            })

            sethabitaciones({
                nombre: '',
                entrada: '',
                salida: '',
                vista: '',
                amenidades: '',
                damenidades: '',
                image: null,
                urlImage: ''
            })

            setImages(null)
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    const handleInputChange = (e) => {
        sethabitaciones({
            ...habitaciones,
            [e.target.name]: e.target.value,
        })
    }
    
    return (
        <div className="px-6">
            <form method="post" className="pb-6 pt-2 px" onSubmit={handleHabitacion}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="mb-3 block text-base font-semibold text-[#07074D]">Habitación</label>
                    <input type="text" name="nombre" id="" placeholder="Nombre Habitación" onChange={handleInputChange} value={habitaciones.nombre}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="entrada" className="mb-3 block text-base font-semibold text-[#07074D]">Hora Entrada:</label>
                            <input type="time" name="entrada" id="" onChange={handleInputChange} value={habitaciones.entrada}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="salida" className="mb-3 block text-base font-semibold text-[#07074D]">Hora Salida:</label>
                            <input type="time" name="salida" id="" onChange={handleInputChange} value={habitaciones.salida}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="vista" className="mb-3 block text-base font-semibold text-[#07074D]">Vista:</label>
                            <input type="text" name="vista" id="" placeholder="Vista Habitación" onChange={handleInputChange} value={habitaciones.vista} 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="salida" className="mb-3 block text-base font-semibold text-[#07074D]">Amenidades:</label>
                            <input type="text" name="amenidades" id="" placeholder="Amenidades Habitación" onChange={handleInputChange} value={habitaciones.amenidades} 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="damenidades" className="mb-3 block text-base font-semibold text-[#07074D]">Descripcion Amenidades</label>
                    <textarea name="damenidades" id="" cols="10" rows="5" placeholder="Descripcion de amenidades" onChange={handleInputChange} value={habitaciones.damenidades}
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
                                            type='button'
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            className="w-full bg-gray-200 rounded-lg py-3.5"
                                        >
                                            <span className="">Click or Drop here</span> 
                                        </button>
                                        &nbsp;
                                        {/*<button onClick={onImageRemoveAll}>Remove all images</button>*/}
                                        {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                                <button onClick={() => onImageUpdate(index)} className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                    Update
                                                </button>
                                                <button onClick={() => onImageRemove(index)} className="ml-5 text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                )}
                            </ImageUploading>

                            {/*<input
                                type="file"
                                className="w-full px-4 py-2"
                                label="Image"
                                name="image"
                                onChange={handleSaveImage}
                            />*/}
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="salida" className="mb-3 block text-base font-semibold text-[#07074D]">O pudes agregar la url de la imagen que desees:</label>
                            <input type="text" name="urlImage" id="" placeholder='URL Imagen' onChange={handleInputChange} value={habitaciones.urlImage}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div>
                    <button type='submit' className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}
