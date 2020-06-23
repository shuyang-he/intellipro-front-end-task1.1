(() => {
  "use strict";

  const headerContainer = {
    id: 'header-container',
    content: 'h1',
    text: 'w3schools'
  }

  const headerContainerCreator = (headerContainer, parent) => {
    const container = document.createElement('div');
    container.setAttribute(headerContainer.id);
    const content = document.createElement(headerContainer.content);
    const text = document.createTextNode(headerContainer.text);
    content.append(text);
    container.append(content);
    parent.append(container);
  }

  const navigationContianer = {
    id: 'navigation-contianer',
    textList: ['HTML', 'CSS', 'JAVASCRIPT'],
    hrefList: ['/html', '/css', '/javascript']
  }

  const navigationContainerCreator = (navigationContainer, parent) => {
    const container = document.createElement('div');
    container.setAttribute(navigationContainer.id);
    for (let i = 0; i < navigationContainer.textList.length; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', navigationContainer.hrefList[i]);
      const content = document.createElement('span');
      const text = document.createTextNode(navigationContainer.textList[i]);
      content.append(text);
      link.append(content);
      container.append(link);
    }
    parent.append(container);
  }

  const render = (element, container) => {
    // when element type is string, create text node.
    if (typeof element === 'string') {
      const text = document.createTextNode(element);
      container.append(element);
      return;
    }

    // create dom element tree recursively.
    const newElement = document.createElement(element.type);
    Object.keys(element.props).forEach((prop) => {
      // children prop is representing children of element.
      if (prop === 'children') {
        let children = element.props[prop];
        children = Array.isArray(children) ? children : [children];
        children.forEach((child) => {
          render(child, newElement);
        });
      }
      newElement.setAttribute(prop, element.props[prop])
    })

    container.append(newElement);
  }

  const createElement = (type, config, children) => {
    const props = {};
    Object.keys(config).forEach((prop) => {
      if (config.hasOwnProperty(prop)) {
        props[prop] = config[prop];
      }
    })

    props.children = children

    const element = {
      type: type,
      props: props
    };
    return JSON.parse(JSON.stringify(element));
  }

  // start build components

  const headerContainerH1 = createElement(
    'h1',
    {},
    'w3schools'
  );

  const headerContainer = createElement(
    'div',
    {id: 'header-container'},
    headerContainerH1
  );

  const navigationContainerA1Span = createElement(
    'span',
    {},
    'HTML'
  );

  const navigationContainerA1 = createElement(
    'a',
    {href: '/html'},
    navigationContainerA1Span
  );

  const navigationContainerA2Span = createElement(
    'span',
    {},
    'CSS'
  );

  const navigationContainerA2 = createElement(
    'a',
    {href: '/css'},
    navigationContainerA2Span
  );

  const navigationContainerA3Span = createElement(
    'span',
    {},
    'JAVASCRIPT'
  );

  const navigationContainerA3 = createElement(
    'a',
    {href: '/javascript'},
    navigationContainerA3Span
  );

  const navigationContainer = createElement(
    'div',
    {id: 'navigation-container'},
    [navigationContainerA1, navigationContainerA2, navigationContainerA3]
  );

  const topContainer = createElement(
    'div',
    {id: 'top-container'},
    [headerContainer, navigationContainer]
  );

  render(topContainer, document.querySelector('#root-container'));

  const menuSectionContainer1H2 = createElement(
    'h2',
    {},
    'HTML Tutorial'
  );

  const menuSectionContainer1A1Span = createElement(
    'span',
    {},
    'HTML Home'
  );

  const menuSectionContainer1A1 = createElement(
    'a',
    {href: '/html_home'},
    menuSectionContainer1A1Span
  );

  const menuSectionContainer1A2Span = createElement(
    'span',
    {},
    'HTML Introduction'
  );

  const menuSectionContainer1A2 = createElement(
    'a',
    {href: '/html_introduction'},
    menuSectionContainer1A2Span
  );

  const menuSectionContainer1 = createElement(
    'div',
    {class: 'menu-section-container'},
    [menuSectionContainer1H2, menuSectionContainer1A1, menuSectionContainer1A2]
  );

  const menuSectionContainer2H2 = createElement(
    'h2',
    {},
    'HTML Tutorial'
  );

  const menuSectionContainer2A1Span = createElement(
    'span',
    {},
    'HTML Home'
  );

  const menuSectionContainer2A1 = createElement(
    'a',
    {href: '/html_home'},
    menuSectionContainer2A1Span
  );

  const menuSectionContainer2A2Span = createElement(
    'span',
    {},
    'HTML Introduction'
  );

  const menuSectionContainer2A2 = createElement(
    'a',
    {href: '/html_introduction'},
    menuSectionContainer2A2Span
  );

  const menuSectionContainer2 = createElement(
    'div',
    {class: 'menu-section-container'},
    [menuSectionContainer2H2, menuSectionContainer2A1, menuSectionContainer2A2]
  );

  const sidebarContainer = createElement(
    'div',
    {id: 'sidebar-container'},
    [menuSectionContainer1, menuSectionContainer2]
  );

  const mainSectionContainer1 = createElement(
    'div',
    {class: 'main-section-container'},
    'Main Section 1'
  );

  const mainSectionContainer2 = createElement(
    'div',
    {class: 'main-section-container'},
    'Main Section 2'
  );

  const mainContainer = createElement(
    'div',
    {id: 'main-container'},
    [mainSectionContainer1, mainSectionContainer2]
  );

  const rightSectionContainer1 = createElement(
    'div',
    {class: 'right-section-container'},
    'Right Section 1'
  );

  const rightSectionContainer2 = createElement(
    'div',
    {class: 'right-section-container'},
    'Right Section 2'
  );

  const rightContainer = createElement(
    'div',
    {id: 'right-container'},
    [rightSectionContainer1, rightSectionContainer2]
  );

  const contentContainer = createElement(
    'div',
    {id: 'content-container'},
    [mainContainer, rightContainer]
  );

  const footerSectionContainer1 = createElement(
    'div',
    {class: 'footer-section-container'},
    'Footer Section 1'
  );

  const footerSectionContainer2 = createElement(
    'div',
    {class: 'footer-section-container'},
    'Footer Section 2'
  );

  const footerContainer = createElement(
    'div',
    {id: 'footer-container'},
    [footerSectionContainer1, footerSectionContainer2]
  );

  const bodyContainer = createElement(
    'div',
    {id: 'body-container'},
    [contentContainer, footerContainer]
  );

  const whiteboardContainer = createElement(
    'div',
    {id: 'whiteboard-container'},
    [sidebarContainer, bodyContainer]
  );

  render(whiteboardContainer, document.querySelector('#root-container'));

})();