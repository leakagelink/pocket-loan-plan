
import { useState, useEffect } from "react";
import { AlertTriangle, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const ComplianceModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const hasSeenCompliance = localStorage.getItem('smartloan_compliance_agreed');
    if (!hasSeenCompliance) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    if (hasAgreed) {
      localStorage.setItem('smartloan_compliance_agreed', 'true');
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            Welcome to SmartLoan Advisor
          </DialogTitle>
          <DialogDescription>
            Please read and acknowledge our important disclaimers
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="text-sm text-orange-800 font-medium mb-1">
                  Educational Tool Only
                </p>
                <p className="text-xs text-orange-700 leading-relaxed">
                  SmartLoan Advisor is an educational and simulation tool only. We are NOT a lender, 
                  financial institution, or loan broker.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>We do NOT offer, process, or disburse actual loans</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>All calculations are estimates for educational purposes only</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>Bank rates shown are simulated and may not reflect current market rates</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>Actual loan terms may vary significantly from our simulations</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>Always verify information directly with financial institutions</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <FileText className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="text-sm text-blue-800 font-medium mb-1">
                  Your Responsibility
                </p>
                <p className="text-xs text-blue-700 leading-relaxed">
                  You must consult with qualified financial advisors and verify all information 
                  independently before making any financial decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="compliance-agree" 
              checked={hasAgreed}
              onCheckedChange={(checked) => setHasAgreed(checked as boolean)}
            />
            <label 
              htmlFor="compliance-agree" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I understand and agree to these terms
            </label>
          </div>

          <Button 
            onClick={handleAgree} 
            disabled={!hasAgreed}
            className="w-full"
          >
            Continue to App
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComplianceModal;
