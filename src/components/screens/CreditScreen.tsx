
import { CreditCard, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const creditTips = [
  {
    category: "Payment History",
    importance: "Very High",
    color: "bg-red-500",
    tips: [
      "Always pay your credit card bills on time",
      "Never miss EMI payments",
      "Set up auto-pay for minimum amounts",
      "Pay more than the minimum when possible"
    ]
  },
  {
    category: "Credit Utilization",
    importance: "High",
    color: "bg-orange-500",
    tips: [
      "Keep credit utilization below 30%",
      "Ideally maintain below 10% for best scores",
      "Don't max out credit cards",
      "Consider increasing credit limits"
    ]
  },
  {
    category: "Credit Mix",
    importance: "Medium",
    color: "bg-yellow-500",
    tips: [
      "Maintain a mix of credit types",
      "Have both secured and unsecured loans",
      "Don't close old credit cards",
      "Consider a small personal loan if needed"
    ]
  },
  {
    category: "Credit Inquiries",
    importance: "Medium",
    color: "bg-blue-500",
    tips: [
      "Limit hard inquiries on your credit report",
      "Apply for credit only when necessary",
      "Space out credit applications",
      "Check your credit report regularly"
    ]
  }
];

const scoreRanges = [
  { range: "750-900", label: "Excellent", color: "text-green-600", description: "Best rates, easy approval" },
  { range: "700-749", label: "Good", color: "text-lime-600", description: "Good rates, likely approval" },
  { range: "650-699", label: "Fair", color: "text-yellow-600", description: "Higher rates, conditional approval" },
  { range: "600-649", label: "Poor", color: "text-orange-600", description: "Limited options, high rates" },
  { range: "Below 600", label: "Very Poor", color: "text-red-600", description: "Difficult to get credit" },
];

const CreditScreen = () => {
  return (
    <div className="p-4 space-y-6 animate-fade-up">
      <div className="flex items-center gap-2">
        <CreditCard className="text-primary" size={24} />
        <h1 className="text-2xl font-bold">Credit Score Tips</h1>
      </div>

      <DisclaimerBanner />

      {/* Credit Score Ranges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp size={20} />
            Credit Score Ranges
          </CardTitle>
          <CardDescription>Understanding what your credit score means</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {scoreRanges.map((range) => (
            <div key={range.range} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{range.range}</span>
                  <Badge variant="outline" className={range.color}>
                    {range.label}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{range.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Improvement Tips */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">How to Improve Your Credit Score</h2>
        
        {creditTips.map((category) => (
          <Card key={category.category}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{category.category}</CardTitle>
                <Badge className={`${category.color} text-white`}>
                  {category.importance} Impact
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {category.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="border-2 border-dashed border-primary/30">
        <CardContent className="p-4 text-center">
          <AlertCircle className="mx-auto text-primary mb-2" size={32} />
          <h3 className="font-semibold mb-2">Monitor Your Credit</h3>
          <p className="text-sm text-muted-foreground">
            Check your credit report from authorized agencies like CIBIL, Experian, or Equifax regularly.
          </p>
        </CardContent>
      </Card>

      <div className="h-20"></div>
    </div>
  );
};

export default CreditScreen;
