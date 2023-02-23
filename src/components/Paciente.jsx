function Paciente() {
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Juan</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
          <span className="font-normal normal-case">22/02/2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto harum repellendus dolorem in dignissimos ipsum minima temporibus dicta necessitatibus. Sapiente fugiat excepturi cumque nemo eius, perspiciatis recusandae. Repudiandae, ratione?</span>
        </p>
      </div>
  )
}

export default Paciente