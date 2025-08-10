
import { AlertTriangle } from "lucide-react";

const DisclaimerBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-3 mb-4">
      <div className="flex items-start gap-2">
        <AlertTriangle className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
        <div>
          <p className="text-sm text-orange-800 font-medium">
            Educational Tool Only - Not a Lender
          </p>
          <p className="text-xs text-orange-700 mt-1 leading-relaxed">
            SmartLoan Advisor is an educational and simulation tool only. We are not a lender or financial institution. 
            We do not offer, process, or disburse loans. All calculations are estimates and may vary from actual loan terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
