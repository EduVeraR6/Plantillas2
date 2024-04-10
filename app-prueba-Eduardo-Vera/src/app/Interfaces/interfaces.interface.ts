

export interface Login{
    username : string,
    password : string 
}

export interface UsuarioResponse{
    id : number,
    username : String,
    password : String ,
    nombres : String ,
    apellidos : String ,
    enabled : boolean,
    roles : RolResponse[]
}


export interface UsuarioRequest{
    username : String,
    password : String ,
    nombres : String ,
    apellidos : String ,
    enabled : boolean,
    roles : RolRequest[]
}


export interface RolResponse{
    id: number,
    rol : String
} 

export interface RolRequest{
    rol : String
} 

