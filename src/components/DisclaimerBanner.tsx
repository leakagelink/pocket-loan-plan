
import { AlertTriangle } from "lucide-react";

const DisclaimerBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-3 mb-4">
      <div className="flex items-start gap-2">
        <AlertTriangle className="text-orange-500 mt-0.5" size={16} />
        <div>
          <p className="text-sm text-orange-800 font-medium">
            Educational Tool Only
          </p>
          <p className="text-xs text-orange-700 mt-1">
            This is a simulation tool for educational purposes. We do not offer, process, or disburse loans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
