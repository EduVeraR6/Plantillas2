package ec.sasf.prueba.Eduardo.Vera.Services.Impl;

import ec.sasf.prueba.Eduardo.Vera.Entities.Users;
import ec.sasf.prueba.Eduardo.Vera.Repositories.IUserRepository;
import ec.sasf.prueba.Eduardo.Vera.Services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public Users save(Users user) {
        return userRepository.save(user);
    }

    @Override
    public List<Users> usuarios() {
        return userRepository.findAll();
    }

    @Override
    public Users verUsuario(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Users updateUsuario(int id ,Users usuario) {

        Users usuario1 = userRepository.findById(id).get();

        usuario1.setNombres("Eduardo");

        return userRepository.save(usuario1);
    }

    @Override
    public List<Users> listUsersByEstado(boolean estado) {
       return userRepository.findByEnabled(estado);
    }

}
