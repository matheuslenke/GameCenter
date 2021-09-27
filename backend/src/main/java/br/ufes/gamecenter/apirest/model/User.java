package br.ufes.gamecenter.apirest.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @NotNull
    @Column(unique = true)
    private String login;

    @NotNull
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Field(name="nitendo_switch_code")
    private String nintendoSwitchCode;
    @Field(name="psn_code")
    private String psnCode;
    @Field(name="xbox_code")
    private String xboxCode;
    @Field(name="steam_code")
    private String steamCode;
    @Field(name="epic_code")
    private String epicCode;

    @OneToMany(mappedBy = "user")
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private List<Game> games;

    public String getNintendoSwitchCode() {
        return nintendoSwitchCode;
    }

    public void setNintendoSwitchCode(String nintendoSwitchCode) {
        this.nintendoSwitchCode = nintendoSwitchCode;
    }

    public String getPsnCode() {
        return psnCode;
    }

    public void setPsnCode(String psnCode) {
        this.psnCode = psnCode;
    }

    public String getXboxCode() {
        return xboxCode;
    }

    public void setXboxCode(String xboxCode) {
        this.xboxCode = xboxCode;
    }

    public String getSteamCode() {
        return steamCode;
    }

    public void setSteamCode(String steamCode) {
        this.steamCode = steamCode;
    }

    public String getEpicCode() {
        return epicCode;
    }

    public void setEpicCode(String epicCode) {
        this.epicCode = epicCode;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }




}