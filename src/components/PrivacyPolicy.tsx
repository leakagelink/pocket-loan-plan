
import { Shield, Eye, Database, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-2">
        <Shield className="text-primary" size={24} />
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
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
              <li>Loan calculation inputs (amount, tenure, interest rate)</li>
              <li>App usage analytics for improving user experience</li>
              <li>Device information for optimal app performance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">What We DON'T Collect:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Personal financial data or banking information</li>
              <li>Contact lists, call logs, or SMS data</li>
              <li>Location data beyond general region for compliance</li>
              <li>Camera, microphone, or file access</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone size={20} />
            Advertising
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            This app displays advertisements through Google AdMob. AdMob may collect and use data 
            to show personalized ads. You can opt out of personalized advertising in your device settings.
          </p>
          
          <div>
            <h3 className="font-semibold mb-2">Ad Data Usage:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Device identifiers for ad serving</li>
              <li>App interaction data for ad relevance</li>
              <li>General demographic information</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database size={20} />
            Data Security
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            All data is processed locally on your device. We use industry-standard security measures 
            to protect any data that is transmitted. No sensitive financial information is stored 
            or transmitted to our servers.
          </p>
        </CardContent>
      </Card>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h3>
        <p className="text-sm text-amber-700">
          SmartLoan Advisor is an educational and planning tool only. We do not offer, process, 
          or disburse loans. All calculations are estimates and should not be considered as 
          guaranteed loan terms or financial advice.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
