tabs = document.createElement('iframe');
tabs.setAttribute('src', chrome.extension.getURL('tabs.html'));
tabs.style.position = 'fixed';
tabs.style.height = '12px';
tabs.style.maxHeight = '12px';
tabs.style.top = '0';
tabs.style.left = '0';
tabs.style.width = '100%';
tabs.style.zIndex = '9999999';
tabs.style.border = 'none';
document.documentElement.appendChild(tabs);
