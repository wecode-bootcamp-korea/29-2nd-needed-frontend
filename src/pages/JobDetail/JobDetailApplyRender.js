import React from 'react';
import JobDetailApply from './JobDetailApply';
import JobDetailApplicationForm from './JobDetailApplicationForm';

const JobDetailApplyRender = ({
  isApplicationFormOpen,
  setIsApplicationFormOpen,
  compensation,
  isShareOpen,
  handleShareModal,
  resumes,
}) => {
  if (isApplicationFormOpen) {
    return (
      <JobDetailApplicationForm
        setIsApplicationFormOpen={setIsApplicationFormOpen}
      />
    );
  } else {
    return (
      <JobDetailApply
        compensation={compensation}
        setIsApplicationFormOpen={setIsApplicationFormOpen}
        isShareOpen={isShareOpen}
        handleShareModal={handleShareModal}
      />
    );
  }
};

export default JobDetailApplyRender;
