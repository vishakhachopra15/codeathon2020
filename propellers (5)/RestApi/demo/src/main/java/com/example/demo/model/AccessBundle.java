package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "access_bundle", schema = "onboarder")
public class AccessBundle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "access_bundle_id", nullable = false)
    private long accessBundleId;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "project_id")
    private Project project;

    @JoinColumn(name = "access_bundle_entity_id")
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<AccessBundleEntity> accessEntities;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "description")
    private String desc;

    public AccessBundle() {

    }

    public long getAccessBundleId() {
        return accessBundleId;
    }

    public void setAccessBundleId(long accessBundleId) {
        this.accessBundleId = accessBundleId;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public List<AccessBundleEntity> getAccessEntities() {
        return accessEntities;
    }

    public void setAccessEntities(List<AccessBundleEntity> accessEntities) {
        this.accessEntities = accessEntities;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}

