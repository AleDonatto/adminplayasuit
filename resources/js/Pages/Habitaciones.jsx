import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CrearHabitaciones } from '@/Components/Habitaciones/CrearHabitaciones';

export default function Habitaciones(props){
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} 
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Habitaciones</h2>}
        >
            <Head title="Habitaciones"></Head>

            <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 font-bold text-xl">Agregar Habitaciones</div>
                        <CrearHabitaciones />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}