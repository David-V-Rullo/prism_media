import React from "react";
import NewBillboardForm from "../forms/NewBillboardForm";

const OwnerDashboardPage: React.FC = () => {
  // TODO: Implement dashboard functionality

  return (
    <div className="flex flex-col p-8">
      <h1>Owner Dashboard</h1>
      <div className="m-4 p-8">
        <NewBillboardForm />
      </div>
      {/* TODO: Add dashboard content */}
    </div>
  );
};

export default OwnerDashboardPage;
