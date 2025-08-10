import { useState } from "react";
import { Calculator, PieChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { PieChart as RechartsPieChart, Cell, ResponsiveContainer, Tooltip, Pie } from "recharts";
import { useAdMob } from "@/hooks/useAdMob";

const CalculatorScreen = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalAmount: number;
  } | null>(null);

  const { showBannerAd, showInterstitialAd, isAdMobReady } = useAdMob();

  const calculateEMI = async () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(tenure) * 12;

    if (P && R && N) {
      const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalAmount = emi * N;
      const totalInterest = totalAmount - P;

      setResult({
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalAmount: Math.round(totalAmount),
      });

      // Show banner ad after calculation
      if (isAdMobReady) {
        await showBannerAd();
        
        // Show interstitial ad occasionally (every 3rd calculation)
        const calculationCount = parseInt(localStorage.getItem('calculationCount') || '0') + 1;
        localStorage.setItem('calculationCount', calculationCount.toString());
        
        if (calculationCount % 3 === 0) {
          setTimeout(() => {
            showInterstitialAd();
          }, 2000); // Show after 2 seconds
        }
      }
    }
  };

  const chartData = result
    ? [
        { name: "Principal", value: parseFloat(loanAmount), color: "#1E88E5" },
        { name: "Interest", value: result.totalInterest, color: "#43A047" },
      ]
    : [];

  return (
    <div className="p-4 space-y-6 animate-fade-up">
      <div className="flex items-center gap-2">
        <Calculator className="text-primary" size={24} />
        <h1 className="text-2xl font-bold">EMI Calculator</h1>
      </div>

      <DisclaimerBanner />

      <Card>
        <CardHeader>
          <CardTitle>Loan Details</CardTitle>
          <CardDescription>Enter your loan information to calculate EMI</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
            <Input
              id="loanAmount"
              type="number"
              placeholder="e.g., 500000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.1"
              placeholder="e.g., 8.5"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tenure">Loan Tenure (Years)</Label>
            <Input
              id="tenure"
              type="number"
              placeholder="e.g., 20"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />
          </div>

          <Button onClick={calculateEMI} className="w-full">
            Calculate EMI
          </Button>
        </CardContent>
      </Card>

      {result && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart size={20} />
                EMI Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center p-4 bg-primary rounded-lg">
                  <p className="text-primary-foreground text-sm">Monthly EMI</p>
                  <p className="text-primary-foreground text-2xl font-bold">
                    ₹{result.emi.toLocaleString()}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-muted-foreground text-xs">Total Interest</p>
                    <p className="text-foreground font-semibold">
                      ₹{result.totalInterest.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-muted-foreground text-xs">Total Amount</p>
                    <p className="text-foreground font-semibold">
                      ₹{result.totalAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Principal vs Interest Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </>
      )}

      <div className="h-20"></div>
    </div>
  );
};

export default CalculatorScreen;
