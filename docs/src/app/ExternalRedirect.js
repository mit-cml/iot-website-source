import React from 'react';

const ExternalRedirect = (props) => {
  let href = props.route.href;
  window.location.replace(href);
  return (<div>
    Redirecting you to <a href={href}>href</a>
  </div>);
}

export default ExternalRedirect;
