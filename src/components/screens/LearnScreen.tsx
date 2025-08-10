
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const articles = [
  {
    id: 1,
    title: "How to Apply for Your First Home Loan",
    description: "Complete guide covering eligibility, documentation, and application process",
    readTime: "5 min read",
    category: "Home Loans",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Essential Documents for Loan Applications",
    description: "Checklist of all documents required for different types of loans",
    readTime: "3 min read",
    category: "Documentation",
    difficulty: "Beginner"
  },
  {
    id: 3,
    title: "Understanding Interest Rates: Fixed vs Floating",
    description: "Learn the pros and cons of different interest rate structures",
    readTime: "7 min read",
    category: "Interest Rates",
    difficulty: "Intermediate"
  },
  {
    id: 4,
    title: "Common Loan Application Mistakes to Avoid",
    description: "Top 10 mistakes that can lead to loan rejection and how to avoid them",
    readTime: "6 min read",
    category: "Tips & Tricks",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    title: "Pre-approval vs Final Approval: What's the Difference?",
    description: "Understanding the loan approval process and timeline",
    readTime: "4 min read",
    category: "Process",
    difficulty: "Beginner"
  },
  {
    id: 6,
    title: "How to Negotiate Better Loan Terms",
    description: "Advanced strategies for getting lower interest rates and better conditions",
    readTime: "8 min read",
    category: "Negotiation",
    difficulty: "Advanced"
  }
];

const categories = ["All", "Home Loans", "Documentation", "Interest Rates", "Tips & Tricks", "Process", "Negotiation"];

const LearnScreen = () => {
  return (
    <div className="p-4 space-y-6 animate-fade-up">
      <div className="flex items-center gap-2">
        <BookOpen className="text-primary" size={24} />
        <h1 className="text-2xl font-bold">Learn</h1>
      </div>

      <DisclaimerBanner />

      {/* Featured Article */}
      <Card className="gradient-card border-0">
        <CardHeader>
          <Badge className="w-fit mb-2">Featured Article</Badge>
          <CardTitle className="text-xl">Complete Guide to Loan Planning</CardTitle>
          <CardDescription>
            Everything you need to know about planning your finances before applying for a loan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock size={14} />
                10 min read
              </span>
              <Badge variant="outline">Comprehensive</Badge>
            </div>
            <ArrowRight size={20} className="text-primary" />
          </div>
        </CardContent>
      </Card>

      {/* Articles */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Educational Articles</h2>
        
        {articles.map((article) => (
          <Card key={article.id} className="cursor-pointer transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base leading-tight">{article.title}</h3>
                  <ArrowRight size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        article.difficulty === 'Beginner' ? 'text-green-600 border-green-200' :
                        article.difficulty === 'Intermediate' ? 'text-yellow-600 border-yellow-200' :
                        'text-red-600 border-red-200'
                      }`}
                    >
                      {article.difficulty}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Coming Soon */}
      <Card className="border-dashed border-2 border-muted-foreground/20">
        <CardContent className="p-4 text-center">
          <BookOpen className="mx-auto text-muted-foreground mb-2" size={32} />
          <h3 className="font-semibold text-sm mb-1">More Content Coming Soon</h3>
          <p className="text-xs text-muted-foreground">
            Video tutorials, interactive guides, and expert interviews
          </p>
        </CardContent>
      </Card>

      <div className="h-20"></div>
    </div>
  );
};

export default LearnScreen;
