package ec.sasf.prueba.Eduardo.Vera.Services;


import ec.sasf.prueba.Eduardo.Vera.Entities.Users;

import java.util.List;

public interface IUserService {
    public Users save(Users user);

    public List<Users> usuarios();

    public List<Users> usersByRol(String rol);

    public Users  verUsuario(String username);

    public Users updateUsuario(int id ,Users usuario);

    public List<Users> listUsersByEstado(boolean estado);

}
