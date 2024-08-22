import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import systemFunctionsData from './systemFunctions.json'; // Importing the JSON file with system functions data.
import './FunctionsByScope.css'; // Importing custom CSS for styling the component.

const FunctionsByScope = () => {
  const [expandedScope, setExpandedScope] = useState('');
  const location = useLocation();

  useEffect(() => {
    const resizeCategories = () => {
      const categories = document.querySelectorAll('.scope-category');
      const totalWidth = document.querySelector('.functions-by-scope').offsetWidth;
      const categoryWidth = totalWidth / categories.length;
      categories.forEach(category => {
        category.style.width = categoryWidth + 'px';
      });
    };

    resizeCategories();
    window.addEventListener('resize', resizeCategories);
    return () => {
      window.removeEventListener('resize', resizeCategories);
    };
  }, []);

  // Mapping tags to scope categories for categorization of system functions.
  const tagMapping = {
    "Gateway": ["Gateway"],
    "Vision": ["Vision", "Client", "Vision Client"],
    "Perspective": ["Perspective", "Session", "Perspective Session"],
    "Designer": ["Designer"],
  };

  // Function to extract the current documentation version from the URL.
  const extractVersion = (pathname) => {
    const versionMatch = pathname.match(/\/docs\/(\d+\.\d+)/);
    return versionMatch ? versionMatch[1] : 'latest';
  };
  const version = extractVersion(location.pathname);

  // Function to dynamically extract the current module from the URL path.
  const extractModule = (pathname) => {
    const moduleMatch = pathname.match(/\/docs\/(?:\d+\.\d+\/)?appendix\/scripting-functions\/(system-\w+)/);
    return moduleMatch ? moduleMatch[1] : '';
  };
  const currentModule = extractModule(location.pathname);

  // Filtering and categorizing system functions based on the current module and documentation version.
  const categories = Object.entries(tagMapping).reduce((acc, [category, tags]) => {
    const items = systemFunctionsData.filter(func =>
      tags.some(tag => func.tags.includes(tag)) &&
      func.url.includes(`/docs/${version}/appendix/scripting-functions/${currentModule}`) && // Filter functions by current module if applicable.
    !((currentModule === 'system-dnp' && func.url.includes('system-dnp3')) || // Exclude system.dnp3 functions when current module is system.dnp
      (currentModule === 'system-opc' && (func.url.includes('system-opchda') || func.url.includes('system-opcua')))) // Exclude system.opchda and system.opcua functions when current module is system.opc
  );
    if (items.length > 0) {
      acc[category] = items;
    }
    return acc;
  }, {});

  const toggleScope = (scope) => {
    // Collapse the previously expanded category
    if (expandedScope) {
      const prevCategory = document.querySelector(`.scope-category.${expandedScope}`);
      if (prevCategory) { // Check if the element exists before trying to modify its style
        prevCategory.style.width = 'auto';
      }
    }
  
    // Expand the new category
    if (scope !== expandedScope) {
      const newCategory = document.querySelector(`.scope-category.${scope}`);
      if (newCategory) { // Check if the element exists before trying to modify its style
        newCategory.style.width = `${newCategory.scrollWidth}px`;
      }
    }
  
    setExpandedScope(scope === expandedScope ? '' : scope);
  };

  return (
  <section className="functions-by-scope">
    <div className="categories">
      {Object.keys(categories).length > 0 ? (
        Object.keys(categories).map(scope => (
          <article
            key={scope}
            className={clsx('scope-category', { expanded: expandedScope === scope })}
            onClick={() => toggleScope(scope)}>
            <div>
              <b>{scope}</b> <span className={`chevron ${expandedScope === scope ? 'expanded' : ''}`}></span>
            </div>
            <ul className={`function-list ${expandedScope === scope ? 'show' : ''}`}>
              {categories[scope].map((func, index) => (
                <li key={index} className="function-item">
                  <a href={func.url}>{currentModule ? func.title.split('.').pop() : func.title.replace('system.', '')}</a>
                </li>
              ))}
            </ul>
          </article>
        ))
      ) : (
        <p>No functions found for this category.</p>
      )}
    </div>
  </section>
);
};

export default FunctionsByScope;