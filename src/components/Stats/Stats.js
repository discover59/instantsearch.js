import PropTypes from 'prop-types';
import React from 'react';

import Template from '../Template.js';
import autoHideContainerHOC from '../../decorators/autoHideContainer.js';
import headerFooterHOC from '../../decorators/headerFooter.js';

export class RawStats extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.nbHits !== nextProps.hits ||
      this.props.processingTimeMS !== nextProps.processingTimeMS
    );
  }

  render() {
    const data = {
      hasManyResults: this.props.nbHits > 1,
      hasNoResults: this.props.nbHits === 0,
      hasOneResult: this.props.nbHits === 1,
      hitsPerPage: this.props.hitsPerPage,
      nbHits: this.props.nbHits,
      nbPages: this.props.nbPages,
      page: this.props.page,
      processingTimeMS: this.props.processingTimeMS,
      query: this.props.query,
      cssClasses: this.props.cssClasses,
    };

    return (
      <Template data={data} templateKey="body" {...this.props.templateProps} />
    );
  }
}

RawStats.propTypes = {
  cssClasses: PropTypes.shape({
    time: PropTypes.string,
  }),
  hitsPerPage: PropTypes.number,
  nbHits: PropTypes.number,
  nbPages: PropTypes.number,
  page: PropTypes.number,
  processingTimeMS: PropTypes.number,
  query: PropTypes.string,
  templateProps: PropTypes.object.isRequired,
};

export default autoHideContainerHOC(headerFooterHOC(RawStats));
