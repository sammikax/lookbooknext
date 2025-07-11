import React from "react";
import PlanCard from "@/modules/membership/Plan-card";

const MembershipContainer: React.FC = () => {
  const plans = [
    { key: "basic" },
    { key: "professional" },
    { key: "premium" },
  ];

  return (
    <div className="flex items-center justify-center mt-[100px] w-auto">
      <div className="flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <PlanCard key={index} planKey={plan.key} />
        ))}
      </div>
    </div>
  );
};

export default MembershipContainer;
