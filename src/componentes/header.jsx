function Header({props, admin}) {
    console.log(props);
    console.log(admin);
    return (
        <h1 className="font-black text-center mx-auto text-5xl nd:w-2/3">Seguimiento de Pacientes <span className="text-indigo-600">Veterinaria</span></h1>
      )
}

export default Header;