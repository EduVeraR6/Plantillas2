

export interface Login{
    username : string,
    password : string 
}

export interface Usuario{
    id : number,
    name : String ,
    email : string , 
    avatar : String , 
    password : String , 
    rol : String , 
    office : String , 
    estado : String,
    maquinas : Maquina[],
    solicitudes : Solicitud[],
    fe_creacion : Date ,
    fe_actualizacion : Date | null
}

export interface MaquinaRequest{
    ip : String , 
    descripcion : String
}

export interface Maquina{
    id : number , 
    ip : String ,
    descripcion : string , 
    usuario : Usuario,
    estado : String,
    fe_creacion : Date ,
    fe_actualizacion : Date | null
}


export interface Solicitud{
    id : number ,
    descripcion : string ,
    usuario : Usuario, 
    maquina : Maquina , 
    estado : String,
    fe_creacion : Date ,
    fe_actualizacion : Date | null
}

export interface UsuarioRequest{
    name : String,
    email :String , 
    avatar : String , 
    rol : String , 
    password : String ,
    office : String,
    maquinas : MaquinaRequest[]
}