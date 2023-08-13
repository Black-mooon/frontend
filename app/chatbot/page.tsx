import DashboardLayout from '@/components/DashboardLayout';
import React from 'react';

function page() {
  return (
    <DashboardLayout>
      <iframe
        src="https://0xsynapse-llamagpt.hf.space"
        width="100%"
        height="750px"
      ></iframe>
    </DashboardLayout>
  );
}

export default page;
