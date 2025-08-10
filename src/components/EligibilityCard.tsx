
import { useState } from "react";
import { Shield, Calculator, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EligibilityCard = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateEligibility = () => {
    const monthlyIncome = parseFloat(income);
    const monthlyExpenses = parseFloat(expenses);
    
    if (monthlyIncome && monthlyExpenses) {
      const disposableIncome = monthlyIncome - monthlyExpenses;
      const maxEMI = disposableIncome * 0.6; // 60% of disposable income
      
      // Assuming average interest rate of 8.5% for 20 years
      const rate = 8.5 / 12 / 100;
      const tenure = 20 * 12;
      const eligibleAmount = (maxEMI * (Math.pow(1 + rate, tenure) - 1)) / (rate * Math.pow(1 + rate, tenure));
      
      setResult(Math.round(eligibleAmount));
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="text-primary" size={20} />
          Quick Eligibility Check
        </CardTitle>
        <CardDescription>
          Educational simulation of potential loan eligibility
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Enhanced Eligibility Disclaimer */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="text-purple-600 mt-0.5 flex-shrink-0" size={14} />
            <div>
              <p className="text-xs text-purple-800 font-medium mb-1">
                Simulation Only - Not Pre-Approval
              </p>
              <p className="text-xs text-purple-700 leading-relaxed">
                This is an educational simulation. Actual loan eligibility depends on credit score, 
                employment history, existing EMIs, bank policies, and document verification. 
                Banks may have different eligibility criteria and income requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="income">Monthly Income (₹)</Label>
            <Input
              id="income"
              type="number"
              placeholder="50000"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expenses">Monthly Expenses (₹)</Label>
            <Input
              id="expenses"
              type="number"
              placeholder="25000"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>City Tier</Label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger>
              <SelectValue placeholder="Select your city tier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="metro">Metro City (Mumbai, Delhi, etc.)</SelectItem>
              <SelectItem value="tier1">Tier 1 City</SelectItem>
              <SelectItem value="tier2">Tier 2 City</SelectItem>
              <SelectItem value="tier3">Tier 3 City</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculateEligibility} className="w-full">
          <Calculator className="mr-2" size={16} />
          Check Simulated Eligibility
        </Button>

        {result && (
          <div className="p-4 bg-success/10 border border-success/20 rounded-lg text-center">
            <p className="text-sm text-success-foreground mb-1">Simulated Eligibility Estimate</p>
            <p className="text-2xl font-bold text-success">₹{result.toLocaleString()}</p>
            <div className="text-xs text-muted-foreground mt-2 space-y-1">
              <p>*This is an educational simulation only</p>
              <p>*Actual eligibility requires credit checks, document verification, and bank approval</p>
              <p>*Different banks have varying eligibility criteria and may offer different amounts</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EligibilityCard;
