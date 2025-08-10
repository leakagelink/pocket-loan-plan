
import { useState } from "react";
import { TrendingUp, Building, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const mockBanks = [
  { name: "SBI", rate: 8.50, processing: 0.25, type: "Public" },
  { name: "HDFC Bank", rate: 8.75, processing: 0.50, type: "Private" },
  { name: "ICICI Bank", rate: 8.90, processing: 0.50, type: "Private" },
  { name: "Axis Bank", rate: 9.00, processing: 0.75, type: "Private" },
  { name: "Bank of Baroda", rate: 8.60, processing: 0.25, type: "Public" },
  { name: "Canara Bank", rate: 8.55, processing: 0.30, type: "Public" },
  { name: "Kotak Mahindra", rate: 8.85, processing: 0.60, type: "Private" },
  { name: "PNB", rate: 8.65, processing: 0.30, type: "Public" },
];

const CompareScreen = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showResults, setShowResults] = useState(false);

  const filteredBanks = mockBanks
    .filter(bank => filterType === "all" || bank.type.toLowerCase() === filterType)
    .sort((a, b) => a.rate - b.rate);

  const calculateEMI = (principal: number, rate: number, months: number) => {
    const R = rate / 12 / 100;
    const emi = (principal * R * Math.pow(1 + R, months)) / (Math.pow(1 + R, months) - 1);
    return Math.round(emi);
  };

  const handleCompare = () => {
    if (loanAmount && tenure) {
      setShowResults(true);
    }
  };

  return (
    <div className="p-4 space-y-6 animate-fade-up">
      <div className="flex items-center gap-2">
        <TrendingUp className="text-primary" size={24} />
        <h1 className="text-2xl font-bold">Loan Comparison</h1>
      </div>

      <DisclaimerBanner />

      <Card>
        <CardHeader>
          <CardTitle>Compare Loan Offers</CardTitle>
          <CardDescription>Find the best loan rates from top banks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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
              <Label htmlFor="tenure">Tenure (Years)</Label>
              <Input
                id="tenure"
                type="number"
                placeholder="e.g., 20"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Bank Type Filter</Label>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Banks</SelectItem>
                <SelectItem value="public">Public Banks</SelectItem>
                <SelectItem value="private">Private Banks</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleCompare} className="w-full">
            <Filter className="mr-2" size={16} />
            Compare Rates
          </Button>
        </CardContent>
      </Card>

      {showResults && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Building size={20} />
            Best Rates for You
          </h2>
          
          {filteredBanks.map((bank, index) => {
            const emi = loanAmount && tenure ? 
              calculateEMI(parseFloat(loanAmount), bank.rate, parseFloat(tenure) * 12) : 0;
            
            return (
              <Card key={bank.name} className={index === 0 ? "border-success border-2" : ""}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{bank.name}</h3>
                      <p className="text-sm text-muted-foreground">{bank.type} Bank</p>
                      {index === 0 && (
                        <span className="inline-block bg-success text-success-foreground text-xs px-2 py-1 rounded-full mt-1">
                          Best Rate
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{bank.rate}%</p>
                      <p className="text-sm text-muted-foreground">Interest Rate</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly EMI</p>
                      <p className="font-semibold">₹{emi.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Processing Fee</p>
                      <p className="font-semibold">{bank.processing}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="h-20"></div>
    </div>
  );
};

export default CompareScreen;
