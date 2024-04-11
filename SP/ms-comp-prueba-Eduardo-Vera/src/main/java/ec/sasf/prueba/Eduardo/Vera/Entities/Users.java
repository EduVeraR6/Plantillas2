package ec.sasf.prueba.Eduardo.Vera.Entities;

import org.antlr.v4.runtime.misc.NotNull;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Entity
@Data
@Table(name = "users_Prueba")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(unique = true)
	@NotBlank(message = "Username no puede ser null")
	private String username;
	private String password;
	
	@NotBlank(message = "Nombres no puede ser null")
	private String nombres;
	private String apellidos;

	private String rol;
	private boolean enabled;
	


}