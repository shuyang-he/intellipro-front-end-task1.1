(() => {
  "use strict";

  const topInfo = {
    id: 'top-container'
  }

  const containerCreator = (topInfo, parent) => {
    const container = document.createElement('div');
    container.setAttribute('id', topInfo.id);
    parent.append(container);
  }

  const headerInfo = {
    id: 'header-container',
    content: 'h1',
    text: 'w3schools'
  }

  const headerContainerCreator = (headerInfo, parent) => {
    const container = document.createElement('div');
    container.setAttribute('id', headerInfo.id);
    const content = document.createElement(headerInfo.content);
    const text = document.createTextNode(headerInfo.text);
    content.append(text);
    container.append(content);
    parent.append(container);
  }

  const navigationInfo = {
    id: 'navigation-container',
    textList: ['HTML', 'CSS', 'JAVASCRIPT'],
    hrefList: ['/html', '/css', '/javascript']
  }

  const navigationContainerCreator = (navigationInfo, parent) => {
    const container = document.createElement('div');
    container.setAttribute('id', navigationInfo.id);
    for (let i = 0; i < navigationInfo.textList.length; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', navigationInfo.hrefList[i]);
      const content = document.createElement('span');
      const text = document.createTextNode(navigationInfo.textList[i]);
      content.append(text);
      link.append(content);
      container.append(link);
    }
    parent.append(container);
  }

  containerCreator(topInfo, document.querySelector('#root-container'));
  headerContainerCreator(headerInfo, document.querySelector('#top-container'));
  navigationContainerCreator(navigationInfo, document.querySelector('#top-container'));
  
  const whiteboardInfo = {
    id: 'whiteboard-container'
  }

  const sidebarInfo = {
    id: 'sidebar-container'
  }

  const sidebarSectionInfo = {
    class: 'main-section-container',
    titleList: ['HTML Tutorial', 'HTML Forms'],
    linkList: [
      {
        hrefList: ['/html_home', '/html_introduction'],
        contentList: ['HTML Home', 'HTML Introduction']
      },
      {
        hrefList: ['/html_forms', '/html_form_element'],
        contentList: ['HTML Forms', 'HTML Form Element']
      }
    ]
  }

  const sidebarSectionCreator = (sidebarSectionInfo, parent) => {
    for (let i = 0; i < sidebarSectionInfo.titleList.length; i++) {
      const mainSection = document.createElement('div');
      mainSection.setAttribute('class', sidebarSectionInfo.class);
      const title = document.createElement('h2');
      const titleContent = document.createTextNode(sidebarSectionInfo.titleList[i]);
      title.append(titleContent);
      mainSection.append(title);
      for (let j = 0; j < sidebarSectionInfo.linkList[i].hrefList.length; j++) {
        const link = document.createElement('a');
        link.setAttribute('href', sidebarSectionInfo.linkList[i].hrefList[j]);
        const span = document.createElement('span');
        const spanContent = document.createTextNode(sidebarSectionInfo.linkList[i].contentList[j]);
        span.append(spanContent);
        link.append(span);
        mainSection.append(link);
      }
      parent.append(mainSection);
    }
  }

  containerCreator(whiteboardInfo, document.querySelector('#root-container'));
  containerCreator(sidebarInfo, document.querySelector('#whiteboard-container'));
  sidebarSectionCreator(sidebarSectionInfo, document.querySelector('#sidebar-container'));

  const bodyInfo = {
    id: 'body-container'
  }

  const contentInfo = {
    id: 'content-container'
  }

  const mainInfo = {
    id: 'main-container'
  }

  const rightInfo = {
    id: 'right-container'
  }

  containerCreator(bodyInfo, document.querySelector('#whiteboard-container'));
  containerCreator(contentInfo, document.querySelector('#body-container'));
  containerCreator(mainInfo, document.querySelector('#content-container'));
  containerCreator(rightInfo, document.querySelector('#content-container'));

  const footerInfo = {
    id: 'footer-container'
  }

  containerCreator(footerInfo, document.querySelector('#body-container'));

  const mainSectionInfo = {
    class: 'main-section-container',
    contentList: ['Main section 1', 'Main section 2']
  }

  const rightSectionInfo = {
    class: 'right-section-container',
    contentList: ['Right section 1', 'Right section 2']
  }

  const footerSectionInfo = {
    class: 'footer-section-container',
    contentList: ['Footer section 1', 'Footer section 2']
  }

  const classCreator = (classInfo, parent) => {
    for (let i = 0; i < classInfo.contentList.length; i++) {
      const container = document.createElement('div');
      container.setAttribute('class', classInfo.class);
      const content = document.createTextNode(classInfo.contentList[i]);
      container.append(content);
      parent.append(container);
    }
  }

  classCreator(mainSectionInfo, document.querySelector('#main-container'));
  classCreator(rightSectionInfo, document.querySelector('#right-container'));
  classCreator(footerSectionInfo, document.querySelector('#footer-container'));

})();