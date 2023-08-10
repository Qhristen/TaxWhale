import BreadCrum from '@/components/atoms/breadCrum';
import DashboardCards from '@/components/molecules/dashboardCards';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const History = () => {
    return (
        <div>
            <BreadCrum page="History" />

      <br />
      <DashboardCards />
        </div>
    );
};

export default History;