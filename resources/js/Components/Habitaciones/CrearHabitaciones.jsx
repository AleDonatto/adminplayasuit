import React from 'react'
import { useForm,useState } from 'react'

export const CrearHabitaciones = () => {

    const [habitaciones, sethabitaciones] = useState({
        nombre: '',
        entrada: '',
        salida: '',
        vista: '',
        amenidades: '',
        damenidades: ''
    })
    
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
                <div>
                    <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}
