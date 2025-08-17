
import { Shield, Eye, Database, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-2">
        <Shield className="text-primary" size={24} />
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="font-semibold text-amber-800 mb-2">Important Service Disclaimer</h3>
        <p className="text-sm text-amber-700">
          SmartLoan Advisor is an educational and simulation tool only. We are not a lender, 
          financial institution, or loan broker. We do not offer, process, or disburse loans.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye size={20} />
            Data Collection & Usage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">What We Collect:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Loan calculation inputs (amount, tenure, interest rate) - used locally only</li>
              <li>App usage analytics for improving user experience</li>
              <li>Device information for optimal app performance</li>
              <li>Compliance acknowledgment status</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">What We DON'T Collect:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Personal financial data or banking information</li>
              <li>Contact lists, call logs, or SMS data</li>
              <li>Location data beyond general region for compliance</li>
              <li>Camera, microphone, or file access</li>
              <li>Credit card numbers, bank account details, or payment information</li>
              <li>Social security numbers or government ID information</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database size={20} />
            Data Security & Storage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            All calculation data is processed locally on your device and is not transmitted to our servers. 
            We use industry-standard security measures to protect any data that is transmitted for analytics purposes.
          </p>
          
          <div>
            <h3 className="font-semibold mb-2">Data Protection Measures:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Local data processing - calculations stay on your device</li>
              <li>Encrypted data transmission for analytics</li>
              <li>No storage of sensitive financial information</li>
              <li>Regular security assessments and updates</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText size={20} />
            Third-Party Services
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Services We Use:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Capacitor Framework - For app functionality</li>
              <li>Local Analytics - For app usage insights</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail size={20} />
            Contact & Data Rights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Your Rights:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Access to information about data we collect</li>
              <li>Request deletion of any stored data</li>
              <li>Opt out of analytics data collection</li>
              <li>Full control over your privacy settings</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Contact Information:</h3>
            <p className="text-sm text-muted-foreground">
              For privacy-related questions or requests, you can contact us through the app store 
              where you downloaded SmartLoan Advisor, or through our support channels.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="font-semibold text-red-800 mb-2">Important Educational Disclaimer</h3>
        <p className="text-sm text-red-700">
          SmartLoan Advisor is an educational and planning tool only. We do not offer, process, 
          or disburse loans. All calculations are estimates and should not be considered as 
          guaranteed loan terms or financial advice. Always consult with qualified financial 
          institutions and advisors for actual loan products and financial decisions.
        </p>
      </div>
      
      <div className="text-center text-xs text-muted-foreground">
        <p>Last updated: Educational app - Policy effective from app launch</p>
        <p>This privacy policy applies to the SmartLoan Advisor mobile application</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
