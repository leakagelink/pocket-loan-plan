
import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-2">
        <FileText className="text-primary" size={24} />
        <h1 className="text-2xl font-bold">Terms of Service</h1>
      </div>

      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="text-amber-600 mt-0.5 flex-shrink-0" size={16} />
            <div>
              <p className="text-sm text-amber-800 font-medium mb-1">
                Educational Tool Disclaimer
              </p>
              <p className="text-xs text-amber-700">
                SmartLoan Advisor is an educational and simulation tool only. We are not a lender, 
                financial institution, or loan broker. By using this app, you acknowledge these terms.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield size={20} />
            Service Description
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">What We Provide:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Educational loan calculation tools and simulators</li>
              <li>Financial literacy content and information</li>
              <li>Simulated loan comparison data for learning purposes</li>
              <li>Credit score improvement tips and guidance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">What We DON'T Provide:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Actual loans, credit, or financial products</li>
              <li>Loan processing, approval, or disbursement services</li>
              <li>Financial advice or personalized recommendations</li>
              <li>Guaranteed loan terms or pre-approvals</li>
              <li>Real-time or current bank interest rates</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale size={20} />
            User Responsibilities & Limitations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">User Acknowledgments:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>All calculations and comparisons are estimates for educational purposes only</li>
              <li>Actual loan terms may vary significantly from our simulations</li>
              <li>You must verify all information independently with financial institutions</li>
              <li>You will not rely solely on our app for financial decisions</li>
              <li>You understand that loan eligibility depends on many factors not considered in our simulations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Prohibited Uses:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Using the app for actual loan applications or financial transactions</li>
              <li>Treating simulated data as real or current market information</li>
              <li>Making financial commitments based solely on our calculations</li>
              <li>Expecting guaranteed loan approvals or terms from our estimates</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SmartLoan Advisor and its developers shall not be liable for any financial decisions, 
            losses, or damages arising from the use of this educational tool. Users are solely 
            responsible for verifying information and making informed financial decisions through 
            appropriate channels and qualified financial advisors.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Sources & Accuracy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All bank rates, processing fees, and loan terms displayed in the app are simulated 
            for educational purposes and do not represent current market rates. Interest rates 
            and loan terms change frequently and vary by institution, credit profile, and market conditions. 
            Always consult directly with financial institutions for current and accurate information.
          </p>
        </CardContent>
      </Card>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="font-semibold text-red-800 mb-2">Important Legal Notice</h3>
        <p className="text-sm text-red-700 leading-relaxed">
          By using SmartLoan Advisor, you agree that this app is for educational purposes only. 
          We are not licensed to provide financial services, loan products, or financial advice. 
          All users must seek appropriate financial counseling and verify all information independently 
          before making any financial decisions.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
