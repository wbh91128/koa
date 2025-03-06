async hanleProjectTypeChange(projectType: ProjectTypeEnum) {
  try {
    localStorage.setItem(CREATE_PROJECT_TYPE, projectType);
  }
  catch(e) {
    console.error('localStorage occurs error');  
  }
    
  this.updateCustomForm();
  this.initDefaultNamespaceId();
}
