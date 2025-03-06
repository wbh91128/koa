async hanleProjectTypeChange(projectType: ProjectTypeEnum) {
    localStorage.setItem(CREATE_PROJECT_TYPE, projectType);
    this.updateCustomForm();
    this.initDefaultNamespaceId();
}

export default handleProjectTypeChange;
