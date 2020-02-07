
package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "access_bundle_entity", schema = "onboarder")
public class AccessBundleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "access_bundle_entity_id", nullable = false)
    private long accessBundleEntityId;

    @Column(name = "type")
    private String type;
    @Column(name = "DIRECTORY_GROUP")
    private String group;
    @Column(name = "eonId")
    private String eonId;
    @Column(name = "grn")
    private String grn;
    @Column(name = "role")
    private String role;
    @Column(name = "team")
    private String team;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "access_bundle_id")
    private AccessBundle accessBundle;

    public AccessBundleEntity() {

    }


    public AccessBundle getAccessBundle() {
        return accessBundle;
    }

    public void setAccessBundle(AccessBundle accessBundle) {
        this.accessBundle = accessBundle;
    }

    public long getAccessBundleEntityId() {
        return accessBundleEntityId;
    }

    public void setAccessBundleEntityId(long accessBundleEntityId) {
        this.accessBundleEntityId = accessBundleEntityId;
    }



    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getEonId() {
        return eonId;
    }

    public void setEonId(String eonId) {
        this.eonId = eonId;
    }

    public String getGrn() {
        return grn;
    }

    public void setGrn(String grn) {
        this.grn = grn;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }


}


