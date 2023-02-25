function Paciente({paciente, setPaciente, eliminarPaciente}) {

  const {nombre, especie, propietario, email, alta, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl dark:bg-slate-600">
        <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">Especie: {''}
          <span className="font-normal normal-case">{especie}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">E-mail: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">Fecha de Alta: {''}
          <span className="font-normal normal-case">{alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">

          <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
          onClick={ (e)  => setPaciente(paciente)}
          >Editar</button>

          <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded"
          onClick={handleEliminar}
          >Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente