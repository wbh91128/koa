async hanleProjectTypeChange(projectType: ProjectTypeEnum) {
    try {
        localStorage.setItem(CREATE_PROJECT_TYPE, projectType);
        this.updateCustomForm();
        this.initDefaultNamespaceId();
    }
    catch(e) {
        console.error(e);
    }    
}
