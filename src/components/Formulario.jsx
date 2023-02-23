function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
            </label>

          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>

        <div className="mb-5">
          <label htmlFor="propietartio" className="block text-gray-700 uppercase font-bold">
            Nombre del propietario
            </label>

          <input 
            id="propietartio"
            type="text" 
            placeholder="Nombre del Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>

        <div className="mb-5">
          <label htmlFor="e-mail" className="block text-gray-700 uppercase font-bold">
            e-mail
            </label>

          <input 
            id="e-mail"
            type="text" 
            placeholder="e-mail del Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
            </label>

          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
            </label>
            <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Breve descripción de los sintomas"
            />
        </div>

        <input type="submit"
         id=""  
         className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all"
         value="Agregar Paciente"
         />
      </form>
    </div>
  )
}

export default Formulario