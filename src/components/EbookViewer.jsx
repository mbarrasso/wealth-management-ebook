import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import { ChevronRight, ChevronLeft, DollarSign, TrendingUp, Shield, Briefcase, Users, BarChart2, Gift, Check, AlertTriangle } from 'lucide-react';

const EbookViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const sections = [
    { id: "cover", title: "Cover" },
    { id: "introduction", title: "Introduction" },
    { id: "advisor-alpha", title: "Advisor Alpha" },
    { id: "beyond-investment", title: "Beyond Investment" },
    { id: "tax-efficient", title: "Tax-Efficient Investing" },
    { id: "retirement", title: "Retirement Planning" },
    { id: "behavioral", title: "Behavioral Coaching" },
    { id: "estate", title: "Estate Planning" },
    { id: "case-studies", title: "Case Studies" },
    { id: "tax-advantage", title: "Tax Advantage" },
    { id: "fee-concern", title: "Addressing Fee Concerns" },
    { id: "conclusion", title: "Conclusion" }
  ];

  const navigateTo = (index) => {
    setCurrentPage(index);
    setIsMenuOpen(false);
  };

  const nextPage = () => {
    if (currentPage < sections.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Sample data for charts
  const advisorAlphaData = [
    { name: 'Behavioral Coaching', value: 2.0, fill: '#4299e1' },
    { name: 'Tax-Loss Harvesting', value: 1.5, fill: '#48bb78' },
    { name: 'Retirement Spending', value: 1.0, fill: '#ed8936' },
    { name: 'Asset Location', value: 0.6, fill: '#667eea' },
    { name: 'Rebalancing', value: 0.4, fill: '#9f7aea' }
  ];

  const taxEfficientData = [
    { name: 'Year 5', standard: 2500000, taxEfficient: 2700000 },
    { name: 'Year 10', standard: 3000000, taxEfficient: 3500000 },
    { name: 'Year 15', standard: 3500000, taxEfficient: 4300000 },
    { name: 'Year 20', standard: 4100000, taxEfficient: 5200000 },
    { name: 'Year 25', standard: 4800000, taxEfficient: 6300000 },
    { name: 'Year 30', standard: 5500000, taxEfficient: 7420000 }
  ];

  const sequenceRiskData = [
    { year: 0, goodSequence: 1000000, badSequence: 1000000 },
    { year: 5, goodSequence: 1100000, badSequence: 800000 },
    { year: 10, goodSequence: 1250000, badSequence: 700000 },
    { year: 15, goodSequence: 1400000, badSequence: 550000 },
    { year: 20, goodSequence: 1600000, badSequence: 350000 },
    { year: 25, goodSequence: 1800000, badSequence: 120000 },
    { year: 30, goodSequence: 2000000, badSequence: 0 }
  ];

  const behaviorGapData = [
    { name: 'Market Return', value: 7.0, fill: '#4299e1' },
    { name: 'Average Investor', value: 4.0, fill: '#ed8936' },
    { name: 'Advised Investor', value: 6.5, fill: '#48bb78' }
  ];

  const estateDistributionData = [
    [
      { name: 'To Heirs', value: 80, fill: '#48bb78' },
      { name: 'Federal Estate Tax', value: 16, fill: '#e53e3e' },
      { name: 'State Estate Tax', value: 4, fill: '#f56565' },
      { name: 'To Charity', value: 0, fill: '#ed8936' }
    ],
    [
      { name: 'To Heirs', value: 85, fill: '#48bb78' },
      { name: 'Federal Estate Tax', value: 4, fill: '#e53e3e' },
      { name: 'State Estate Tax', value: 1, fill: '#f56565' },
      { name: 'To Charity', value: 10, fill: '#ed8936' }
    ]
  ];

  const roiData = [
    { name: 'Advisory Fee', value: 5000, fill: '#4299e1' },
    { name: 'Tax Savings', value: 100000, fill: '#48bb78' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const renderCoverPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="bg-blue-700 h-4 w-full"></div>
        <div className="p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="w-40 h-16 relative">
              <div className="absolute w-full h-8 bg-blue-700 rounded-t-full"></div>
              <div className="absolute bottom-0 w-full text-center">
                <div className="font-bold text-lg">United</div>
                <div className="text-xs">Financial Planning Group, LLC</div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-6">
            The Value Of Wealth Management
          </h1>
          
          <h2 className="text-xl md:text-2xl text-center text-blue-700 mb-8">
            Why paying for professional wealth management can be well worth it for high-net-worth individuals, retirees, and high-earning professionals.
          </h2>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-8">
            <div className="flex flex-row h-20 w-full rounded-md overflow-hidden">
              <div className="w-1/4 bg-blue-700 flex flex-col items-center justify-center text-white">
                <div className="text-sm font-medium">Fee</div>
                <div className="text-xl font-bold">1%</div>
              </div>
              <div className="w-3/4 bg-green-500 flex flex-col items-center justify-center text-white">
                <div className="text-sm font-medium">Potential Value Added</div>
                <div className="text-xl font-bold">3%+</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={nextPage}
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md shadow flex items-center space-x-2 transition duration-300"
            >
              <span>Start Reading</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIntroductionPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Introduction</h2>
      
      <p className="mb-4">A 1% AUM fee is a fee equal to 1% of the assets an advisor manages on your behalf, charged annually. It has become a common industry standard for full-service wealth management. In practice, many firms charge around 1% (often on a sliding scale for larger portfolios) as a transparent, straightforward way to compensate advisors. This fee structure largely replaced commission-based sales because it aligns the advisor's incentives with the client's success. When your portfolio grows, your advisor benefits; if it shrinks, their revenue dips.</p>
      
      <p className="mb-6">However, it's natural to ask: What do I get for 1% per year? At first glance, 1% of a large portfolio is a substantial dollar amount. But focusing only on the cost overlooks the tremendous value a skilled wealth manager can provide beyond basic investment picking. This eBook will demonstrate how professional financial advisors can add value well above and beyond their fee through prudent planning, expert advice, and strategic guidance. In fact, research by industry leaders suggests that good advice can more than pay for itself over time, in both measurable financial outcomes and in peace of mind.</p>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md shadow-sm mb-6">
        <h4 className="text-lg font-bold text-teal-700 mb-2">Key Points:</h4>
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1">•</div>
            <p>A 1% AUM fee aligns advisor incentives with client success</p>
          </div>
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1">•</div>
            <p>Professional wealth management goes far beyond basic investment picking</p>
          </div>
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1">•</div>
            <p>Research suggests good advice can more than pay for itself over time</p>
          </div>
        </div>
      </div>
      
      <p className="mb-6">Before diving in, note that all investing involves risk, and no strategy guarantees success. But by understanding the full scope of services you receive for 1%, you can make an informed decision on the merits of professional wealth management. Let's explore the value proposition in detail.</p>
    </div>
  );

  const renderAdvisorAlphaPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">The Value of Advice: Vanguard's Alpha & Morningstar's Gamma</h2>
      
      <p className="mb-4">One way to evaluate an advisor's worth is to look at research on the "advisor alpha" or "gamma" – essentially, the extra value created by good financial advice. Two landmark frameworks come from Vanguard and Morningstar:</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Vanguard's Advisor's Alpha</h3>
      
      <p className="mb-4">Vanguard researchers introduced "Advisor's Alpha" to quantify how much value a financial advisor can add through best practices in wealth management. Their analysis concludes that advisors who implement key strategies can add about 3% in net annual returns for their clients (in other words, 3% beyond what the client might achieve on their own).</p>
      
      <p className="mb-6">This ~3% figure isn't from trying to beat the market; rather, it comes from relationship-oriented services – things like optimizing asset allocation, reducing costs, rebalancing, providing behavioral coaching, implementing tax efficiencies, and structuring retirement drawdowns. Vanguard emphasizes that the actual value will vary for each investor and each year, and much of it appears in intermittent big wins (for example, avoiding a major mistake in a market crisis) rather than a steady 0.25% each quarter.</p>
      
      <div className="h-96 bg-white p-4 rounded-lg shadow-md mb-8">
        <h4 className="text-center text-lg font-bold mb-4">Components of Vanguard's Advisor Alpha</h4>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart
            data={advisorAlphaData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 120, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              domain={[0, 2.5]} 
              tickCount={6} 
              label={{ value: 'Annual Value Added (%)', position: 'bottom', offset: 15 }}
            />
            <YAxis type="category" dataKey="name" width={100} />
            <Tooltip formatter={(value) => [`${value}%`, 'Annual Value Added']} />
            <Bar dataKey="value" background={{ fill: '#eee' }}>
              {advisorAlphaData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-center text-sm text-gray-500 italic">Source: Based on Vanguard's Advisor's Alpha research. Individual results may vary.</p>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Morningstar's Gamma</h3>
      
      <p className="mb-4">In a separate but related approach, Morningstar researchers developed the concept of "Gamma" – which measures the increase in retirement income an investor can achieve by making optimized financial planning decisions (as opposed to just optimizing investments).</p>
      
      <p className="mb-6">In their seminal study, Morningstar's David Blanchett and Paul Kaplan found that by combining five specific strategies, a retiree could generate 22.6% more income in retirement compared to an average strategy. This boost is equivalent to an extra 1.59% return per year for the portfolio as a whole – a significant improvement.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-600">
          <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">1</div>
          <h5 className="font-bold text-center mb-2">Total-Wealth Asset Allocation</h5>
          <p className="text-sm text-center">Considering all assets, including human capital, when setting the portfolio mix</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-600">
          <div className="bg-green-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">2</div>
          <h5 className="font-bold text-center mb-2">Dynamic Withdrawal Strategy</h5>
          <p className="text-sm text-center">Adjusting withdrawals based on market performance and life expectancy</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500">
          <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">3</div>
          <h5 className="font-bold text-center mb-2">Annuity Allocation</h5>
          <p className="text-sm text-center">Incorporating annuities to secure higher guaranteed income</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-600">
          <div className="bg-purple-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">4</div>
          <h5 className="font-bold text-center mb-2">Tax-Efficient Withdrawals</h5>
          <p className="text-sm text-center">Optimizing which accounts to draw from and when</p>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg border-t-4 border-indigo-600">
          <div className="bg-indigo-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">5</div>
          <h5 className="font-bold text-center mb-2">Liability-Relative Optimization</h5>
          <p className="text-sm text-center">Tailoring asset allocation to specific needs and risk factors</p>
        </div>
      </div>
      
      <div className="bg-blue-700 text-white p-6 rounded-lg text-center mb-8">
        <h4 className="font-bold mb-2">Potential Retirement Income Improvement</h4>
        <div className="text-4xl font-bold mb-4">22.6%</div>
        <h4 className="font-bold mb-2">Equivalent Annual Return Boost</h4>
        <div className="text-4xl font-bold">1.59%</div>
      </div>
      
      <p className="mb-6">In plain terms, Morningstar's research highlights that good financial planning decisions – not just good stock picking – can materially improve your retirement outcome. It quantifies in dollars the value of thoughtful planning, which often far exceeds the advisory fee.</p>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
        <p>Bottom line: Both Vanguard's "Advisor's Alpha" and Morningstar's "Gamma" conclude that a skilled advisor can add on the order of 1.5%–3% (or more) per year of incremental value through holistic wealth management. Over the long run, this can compound into substantially higher portfolio values or retirement income. In context, a 1% AUM fee can be a bargain if it delivers even a portion of these benefits.</p>
      </div>
      
      <p className="text-sm italic text-gray-600">Disclosure: "Up to 3%" or "22.6% more income" are findings from specific studies under certain assumptions. These are not guaranteed for every individual; actual results will depend on your personal situation. The cited figures are averages or potential improvements, and individual advisor value may be higher or lower.</p>
    </div>
  );

  const renderBeyondInvestmentPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Beyond Investment Management: Comprehensive Wealth Strategies</h2>
      
      <p className="mb-6">Many people initially think of a financial advisor as someone who "manages investments." While investment management (selecting and monitoring your portfolio) is certainly a core service, a good wealth manager delivers much more than stock picking or portfolio allocation. This section highlights several comprehensive wealth strategies included with professional management – areas where advisors provide expertise that individual investors often overlook or find hard to implement on their own.</p>
      
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-center text-blue-800 mb-6">Comprehensive Wealth Management Framework</h3>
          
          <div className="mb-8">
            <div className="bg-blue-700 text-white p-4 rounded-lg shadow-md text-center mb-6">
              <h4 className="font-bold text-lg">Wealth Management</h4>
              <p className="text-sm">A holistic approach to managing all aspects of your financial life</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Row 1 */}
              <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500 shadow-md">
                <div className="flex items-center mb-3">
                  <TrendingUp className="text-blue-500 mr-2" size={24} />
                  <h5 className="font-bold">Investment Management</h5>
                </div>
                <p className="text-sm">Strategic portfolio construction and ongoing oversight</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500 shadow-md">
                <div className="flex items-center mb-3">
                  <DollarSign className="text-green-500 mr-2" size={24} />
                  <h5 className="font-bold">Tax Optimization</h5>
                </div>
                <p className="text-sm">Strategies to minimize tax impact and maximize after-tax returns</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500 shadow-md">
                <div className="flex items-center mb-3">
                  <BarChart2 className="text-orange-500 mr-2" size={24} />
                  <h5 className="font-bold">Retirement Planning</h5>
                </div>
                <p className="text-sm">Creating sustainable income streams for lifelong financial security</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-t-4 border-indigo-500 shadow-md">
                <div className="flex items-center mb-3">
                  <Shield className="text-indigo-500 mr-2" size={24} />
                  <h5 className="font-bold">Risk Management</h5>
                </div>
                <p className="text-sm">Protecting your assets from market volatility and unforeseen events</p>
              </div>
              
              {/* Row 2 */}
              <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500 shadow-md">
                <div className="flex items-center mb-3">
                  <Users className="text-purple-500 mr-2" size={24} />
                  <h5 className="font-bold">Estate Planning</h5>
                </div>
                <p className="text-sm">Ensuring your wealth transfers according to your wishes</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500 shadow-md">
                <div className="flex items-center mb-3">
                  <Gift className="text-blue-500 mr-2" size={24} />
                  <h5 className="font-bold">Legacy Planning</h5>
                </div>
                <p className="text-sm">Creating meaningful impact for future generations</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500 shadow-md">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="text-green-500 mr-2" size={24} />
                  <h5 className="font-bold">Behavioral Coaching</h5>
                </div>
                <p className="text-sm">Guidance to avoid emotional decisions and stay disciplined</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500 shadow-md">
                <div className="flex items-center mb-3">
                  <Briefcase className="text-orange-500 mr-2" size={24} />
                  <h5 className="font-bold">Cash Flow Planning</h5>
                </div>
                <p className="text-sm">Optimizing income streams and expense management</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-center text-gray-600 italic">Professional wealth management integrates multiple aspects of your financial life into a cohesive strategy.</p>
        </div>
      
      <p className="mb-4">A professional wealth management relationship encompasses a wide array of financial strategies beyond just picking investments. When you engage a financial advisor, you're not just hiring someone to select stocks and bonds - you're partnering with an expert who can help coordinate all aspects of your financial life into a cohesive plan.</p>
      
      <p className="mb-6">The comprehensive approach includes areas such as:</p>
      
      <ul className="list-disc pl-8 mb-6 space-y-2">
        <li><strong>Tax-Efficient Investing:</strong> Strategically placing investments in the most tax-advantageous accounts and implementing tax-loss harvesting to reduce your tax burden.</li>
        <li><strong>Retirement Planning:</strong> Creating sustainable withdrawal strategies and ensuring your assets will last throughout your lifetime.</li>
        <li><strong>Risk Management:</strong> Identifying potential vulnerabilities in your financial plan and implementing appropriate protections.</li>
        <li><strong>Estate Planning:</strong> Coordinating with attorneys to ensure your wealth passes according to your wishes with minimal taxation.</li>
        <li><strong>Legacy Planning:</strong> Developing strategies for charitable giving and multi-generational wealth transfer.</li>
        <li><strong>Behavioral Coaching:</strong> Providing guidance during market volatility to help you avoid costly emotional decisions.</li>
        <li><strong>Cash Flow Planning:</strong> Analyzing your income and expenses to optimize your savings and spending strategies.</li>
      </ul>
      
      <p className="mb-4">All of these elements work together synergistically. For example, tax strategies directly affect your investment approaches, which in turn impact your retirement income planning. Your estate plan needs to align with your investment strategy, while risk management protects all aspects of your wealth.</p>
      
      <p className="mb-6">In the following sections, we'll explore these key areas in greater detail, demonstrating how each contributes to the overall value proposition of professional wealth management. As you'll see, the value extends far beyond basic portfolio construction and significantly exceeds the 1% AUM fee typical in the industry.</p>
    </div>
  );

  const renderTaxEfficientPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Tax-Efficient Investing Strategies</h2>
      
      <p className="mb-6">Tax considerations can significantly affect your net investment returns, especially for high-net-worth individuals in higher tax brackets. An experienced advisor will proactively implement strategies to minimize the tax drag on your wealth:</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Asset Location</h3>
      
      <p className="mb-4">This means placing investments in the optimal type of account for tax purposes. Different assets are taxed differently – for example, interest from bonds is taxed as ordinary income, while stocks can yield tax-favored qualified dividends and long-term capital gains.</p>
      
      <p className="mb-6">A savvy wealth manager will place tax-inefficient assets (like taxable bonds or REITs) inside tax-deferred accounts (IRAs, 401(k)s), and hold more tax-efficient assets (like stock index funds) in taxable brokerage accounts. This way, you shelter the high-tax items and take advantage of lower rates on the others.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white font-bold text-center py-3">
            Tax-Deferred Accounts
          </div>
          <div className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow">
            Shelter High-Tax Assets
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">B</div>
              <div className="text-sm">Corporate & Government Bonds</div>
            </div>
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">R</div>
              <div className="text-sm">REITs</div>
            </div>
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">H</div>
              <div className="text-sm">High-Turnover Funds</div>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">T</div>
              <div className="text-sm">Taxable Bond Funds</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-500 text-white font-bold text-center py-3">
            Taxable Accounts
          </div>
          <div className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow">
            Hold Tax-Efficient Assets
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">I</div>
              <div className="text-sm">Index Funds/ETFs</div>
            </div>
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">G</div>
              <div className="text-sm">Growth-Oriented Stocks</div>
            </div>
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">M</div>
              <div className="text-sm">Municipal Bonds</div>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">L</div>
              <div className="text-sm">Low-Turnover Funds</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-orange-500 text-white font-bold text-center py-3">
            Tax-Free Accounts (Roth)
          </div>
          <div className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow">
            Maximize Growth
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">H</div>
              <div className="text-sm">High-Growth Investments</div>
            </div>
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">A</div>
              <div className="text-sm">Aggressive Stock Funds</div>
            </div>
            <div className="flex items-center border-b pb-2">
              <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">E</div>
              <div className="text-sm">Emerging Markets</div>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">S</div>
              <div className="text-sm">Small-Cap Stocks</div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mb-6">Studies show that smart asset location can add on the order of 50–75 basis points (0.5%–0.75%) to a portfolio's return over time. While that boost accrues gradually, over many years the compounded benefit is substantial. Asset location is especially beneficial for those with large balances across taxable and tax-advantaged accounts, and it's a service typically included (and continuously managed) with a 1% AUM relationship.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Tax-Loss Harvesting</h3>
      
      <p className="mb-4">In volatile markets, investments may temporarily decline in value. Tax-loss harvesting is the process of realizing losses on paper (by selling positions that are down) to capture a tax deduction, while reinvesting the proceeds in a similar exposure to stay on track. Those realized losses can offset capital gains and even a portion of regular income on your tax return, reducing your tax bill.</p>
      
      <p className="mb-6">Effective advisors often harvest losses during market dips — something many DIY investors fail to do consistently. According to Vanguard's research, tax-loss harvesting alone can add up to 1.5% in after-tax return per year in certain scenarios (especially in years with market volatility) – a direct gain that can more than cover a 1% fee.</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-4">Impact of Tax-Efficient Investing Over 30 Years</h4>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={taxEfficientData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${value / 1000000}M`} />
              <Tooltip formatter={(value) => [`$${(value/1000000).toFixed(1)}M`, 'Portfolio Value']} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="taxEfficient" 
                stroke="#48bb78" 
                name="Tax-Efficient Portfolio (5.75% net)"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="standard" 
                stroke="#4299e1" 
                name="Standard Portfolio (5% net)"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-green-100 rounded-lg p-3 text-center mt-4 font-bold">
          Difference after 30 years: +$1.42 Million
        </div>
        <p className="text-center text-sm text-gray-500 italic mt-4">Starting with $1,000,000. Assumes consistent returns without market volatility for illustration purposes.</p>
      </div>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md shadow-sm mb-6">
        <h4 className="text-lg font-bold text-teal-700 mb-2">Example:</h4>
        <p>In the March 2020 downturn, many advisors harvested losses in stock portfolios, generating potentially tens of thousands of dollars of tax savings for affluent clients, which later offset gains when the market rebounded. Such tax alpha directly improves clients' net results.</p>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Roth Conversions and Tax Bracket Management</h3>
      
      <p className="mb-4">A comprehensive wealth plan looks for opportunities to proactively manage your tax brackets over time. For instance, in years when your income (and tax bracket) is lower – such as early retirement before Social Security and required IRA distributions kick in – an advisor might recommend converting a portion of your traditional IRA to a Roth IRA.</p>
      
      <p className="mb-4">Paying some tax now at (say) a 12% or 22% rate to avoid paying tax later at 32% can result in huge long-term savings. Roth conversions can also reduce future Required Minimum Distributions (RMDs), potentially saving on Medicare premiums and taxes in your 70s.</p>
      
      <p className="mb-4">Coordinating these moves requires careful analysis of current vs. future tax rates, something in-house tax professionals do particularly well. Similarly, an advisor will be mindful of capital gains realization – for example, spreading the sale of a highly appreciated asset over multiple tax years or using charitable contributions (donor-advised funds, charitable trusts) to offset large gains.</p>
      
      <p className="mb-6">All of these maneuvers aim to keep more of your money compounding for you instead of going to Uncle Sam. The benefit is often quantifiable in dollars – every $50,000 tax saved via strategic planning is $50,000 back in your pocket, which by itself might cover years of advisory fees.</p>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
        <p>In short, effective tax management is a critical part of the value an advisor provides. It's not just about picking investments; it's about optimizing after-tax returns. High-net-worth investors often have complex tax situations (multiple account types, stock options, business income, etc.), and the difference between average and optimized tax strategy can be immense.</p>
      </div>
    </div>
  );

  const renderRetirementPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Retirement Income Planning & Mitigating Sequence-of-Returns Risk</h2>
      
      <p className="mb-6">For those nearing retirement or already retired, managing a portfolio is very different from the accumulation phase. It's not only about growth, but also about generating sustainable income and preserving capital through potentially 20–30+ years of retirement. Advisors add significant value here by crafting comprehensive retirement income plans and guarding against pitfalls like sequence-of-returns risk.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Withdrawal Strategy</h3>
      
      <p className="mb-6">Deciding which accounts to draw from (taxable vs tax-deferred vs Roth) and when to take withdrawals is a complex puzzle with major tax and longevity implications. A professional can design a withdrawal sequence that funds your lifestyle while minimizing taxes and extending portfolio longevity.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
          <div className="bg-green-500 text-white font-bold text-center py-3">
            Dynamic Withdrawal Strategy
          </div>
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                <div className="h-8 w-8 bg-green-500 rounded-tl-full rounded-tr-full rounded-br-full transform rotate-45"></div>
              </div>
            </div>
            <div className="text-sm mb-4">
              Adjust withdrawal amounts based on market performance. Take less during downturns and potentially more during strong markets to maintain portfolio balance.
            </div>
            <div className="italic text-green-700 text-sm font-semibold">
              <strong>Benefit:</strong> Can extend portfolio life by 5-10 years compared to fixed withdrawals.
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
          <div className="bg-blue-600 text-white font-bold text-center py-3">
            Bucket Strategy
          </div>
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="h-10 w-8 bg-blue-600 rounded relative">
                  <div className="h-2 w-5 bg-blue-600 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-md"></div>
                </div>
              </div>
            </div>
            <div className="text-sm mb-4">
              Segment your portfolio into short-term (cash), medium-term (bonds), and long-term (stocks) buckets. Draw from cash during market downturns to avoid selling equities at a loss.
            </div>
            <div className="italic text-blue-700 text-sm font-semibold">
              <strong>Benefit:</strong> Provides psychological comfort and practical protection against sequence risk.
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
          <div className="bg-orange-500 text-white font-bold text-center py-3">
            Essential vs. Discretionary
          </div>
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="relative h-10 w-10">
                  <div className="absolute h-10 w-3 bg-orange-500 top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute h-3 w-10 bg-orange-500 top-1/2 left-0 transform -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            <div className="text-sm mb-4">
              Cover essential expenses with guaranteed income (Social Security, pensions, annuities) and use investment portfolio for discretionary spending that can be adjusted.
            </div>
            <div className="italic text-orange-700 text-sm font-semibold">
              <strong>Benefit:</strong> Creates financial security while maintaining flexibility for lifestyle adjustments.
            </div>
          </div>
        </div>
      </div>
      
      <p className="mb-6">For example, an advisor may recommend spending down cash or taxable assets during a market downturn (so you aren't forced to sell stocks at depressed prices), then replenishing from growth assets in good years – a strategy sometimes called a "dynamic withdrawal" approach. This kind of adaptive planning was one of the Morningstar Gamma factors shown to increase retirement income significantly.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Sequence-of-Returns Risk Management</h3>
      
      <p className="mb-6">"Sequence risk" refers to the danger of retiring into a bad market. If heavy withdrawals coincide with a market drop early in retirement, it can irreversibly erode a portfolio. Advisors help mitigate sequence risk through strategies such as maintaining an adequate cash or short-term bond buffer, diversifying income sources (for instance, incorporating some annuity or pension income to cover essential expenses), and adjusting withdrawals when needed.</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-4">Sequence of Returns Risk: The Impact of Market Timing</h4>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={sequenceRiskData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => [`$${(value/1000).toFixed(0)}k`, 'Portfolio Value']} />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="goodSequence" 
                stroke="#48bb78" 
                fill="#48bb78" 
                fillOpacity={0.3}
                name="Positive Returns Early (Good Sequence)"
              />
              <Area 
                type="monotone" 
                dataKey="badSequence" 
                stroke="#ed8936" 
                fill="#ed8936"
                fillOpacity={0.3}
                name="Negative Returns Early (Bad Sequence)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600">
            <p className="text-sm font-bold text-center">Same withdrawal rate</p>
            <p className="text-sm font-bold text-center">Same average return</p>
            <p className="text-sm font-bold text-center">Different outcomes</p>
          </div>
          <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
            <p className="text-sm font-bold text-center">Market Crash Early = Portfolio Depleted</p>
            <p className="text-sm italic text-center">One portfolio lasts 30+ years, the other fails in 20</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 italic mt-4">Assumes 4% initial withdrawal rate adjusted for inflation.</p>
      </div>
      
      <p className="mb-6">For example, an advisor might set aside 1–2 years of essential income in safe assets; if stocks plunge, you live on that buffer instead of selling equities at a low point. Once markets recover, you refill the buffer. Such guidance can make the difference between a portfolio that survives 30+ years and one that runs out in 20. It's hard to put a single number on this value, but avoiding a worst-case scenario in retirement is priceless – and certainly worth far more than a 1% fee.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Retirement Budgeting and Modeling</h3>
      
      <p className="mb-4">Beyond investments, wealth managers work with you on detailed retirement cash flow modeling: analyzing your anticipated expenses (including healthcare), stress-testing your plan against various market scenarios, and creating contingency plans. This level of planning provides confidence and clarity as you enter retirement.</p>
      
      <p className="mb-4">You're not just handed a portfolio; you get a roadmap for how to use your assets to support your lifestyle for the long haul. Many retirees find this peace of mind alone justifies having an advisor. You effectively outsource the worry about "Will I run out of money?" to a professional who can continually update and adjust the plan as life unfolds.</p>
    </div>
  );

  const renderBehavioralPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Behavioral Coaching: Preventing Costly Mistakes</h2>
      
      <p className="mb-4">Investing prowess isn't just about knowing what to do – it's also about avoiding knee-jerk reactions that can sabotage your long-term results. Numerous studies (and years of market history) show that individual investors often let emotions drive their decisions, to their detriment. The role of a financial advisor as a behavioral coach can be one of the most valuable (if not the most valuable) aspects of wealth management.</p>
      
      <p className="mb-6">It's frequently said that "investors are their own worst enemies." For instance, DALBAR's long-running studies on investor behavior have found that the average individual equity fund investor underperforms the broader market by around 3% per year over extended periods. Why? The typical self-directed investor buys high (chasing hot markets) and sells low (panicking in downturns), lags disciplined strategies, and mistimes market moves. Over decades, this behavior gap can cost hundreds of thousands or even millions in lost wealth.</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-4">The Investor Behavior Gap</h4>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={behaviorGapData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 8]} tickCount={9} label={{ value: 'Annual Returns (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => [`${value}%`, 'Annual Return']} />
              <Bar dataKey="value" barSize={80}>
                {behaviorGapData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
            <p className="text-sm font-bold">Behavior Gap: 3.0%</p>
            <p className="text-sm">Performance lost to emotional decisions</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
            <p className="text-sm font-bold">Advisor Value: 2.5%</p>
            <p className="text-sm">Recaptured through behavioral coaching</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 italic mt-4">Based on DALBAR's Quantitative Analysis of Investor Behavior studies and Vanguard Advisor's Alpha research. For illustration purposes.</p>
      </div>
      
      <p className="mb-4">A good advisor helps you avoid those classic mistakes. This means providing objective advice and emotional guardrails when the market gets euphoric or scary. For example, when markets are soaring and you feel tempted to pile into the latest fad investment, your advisor may counsel discipline and rebalancing (sell a bit of the winners to keep your portfolio allocation in line).</p>
      
      <p className="mb-6">Conversely, in a sharp downturn or crisis (think 2008 financial crisis or the 2020 COVID crash), a trusted advisor will coach you not to sell in panic, but rather to stick to the long-term plan – or even opportunistically rebalance and "buy low." These actions sound simple, but in the heat of the moment, many investors struggle to do them without guidance.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Common Investor Behavioral Biases</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-2">Loss Aversion</h4>
          <p className="text-sm mb-2">The tendency to feel the pain of losses more acutely than the pleasure of gains, leading to overly conservative decisions.</p>
          <div className="bg-gray-100 p-2 rounded italic text-xs">
            "I'd rather keep my money in cash than risk losing it in the market, even if that means missing out on growth."
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-2">Recency Bias</h4>
          <p className="text-sm mb-2">Placing too much weight on recent events and assuming they will continue indefinitely into the future.</p>
          <div className="bg-gray-100 p-2 rounded italic text-xs">
            "Tech stocks have been booming lately, so I should move most of my portfolio into tech."
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-2">Herd Mentality</h4>
          <p className="text-sm mb-2">Following what others are doing rather than making independent decisions based on your own financial situation.</p>
          <div className="bg-gray-100 p-2 rounded italic text-xs">
            "Everyone I know is investing in cryptocurrency, so I should too."
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-2">Confirmation Bias</h4>
          <p className="text-sm mb-2">Seeking out information that confirms existing beliefs while ignoring contradictory evidence.</p>
          <div className="bg-gray-100 p-2 rounded italic text-xs">
            "I read an article supporting my investment thesis, so I'll ignore the five warning signs."
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-2">Overconfidence</h4>
          <p className="text-sm mb-2">Overestimating one's own knowledge and abilities, leading to excessive trading or concentrated positions.</p>
          <div className="bg-gray-100 p-2 rounded italic text-xs">
            "I work in healthcare, so I know which pharmaceutical stocks will perform best."
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-blue-700 hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-gray-800 mb-2">Anchoring</h4>
          <p className="text-sm mb-2">Fixating on a specific reference point (like purchase price) when making decisions, rather than current fundamentals.</p>
          <div className="bg-gray-100 p-2 rounded italic text-xs">
            "I won't sell this stock until it gets back to what I paid for it."
          </div>
        </div>
      </div>
      
      <p className="mb-6">By keeping you from "knee-jerk" reactions that derail your strategy, the advisor protects you from permanent losses. Vanguard has noted that behavioral coaching during extreme markets can add "tens of percentage points" of value by preventing catastrophic mistakes – easily offsetting years of fees in one go. In other words, if your advisor can stop you from selling out at the bottom of a bear market, they may have saved you from missing a subsequent rebound that could account for 20%, 30%, or more, of portfolio value – a one-time intervention worth far more than a modest annual fee.</p>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <h4 className="text-center text-lg font-bold bg-blue-700 text-white py-3 mb-0">The Emotional Cycle of Investing</h4>
        
        <div className="p-6 relative bg-gray-50">
          <div className="overflow-hidden w-full h-[350px] relative mb-4">
            {/* Market curve */}
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="200" x2="1000" y2="200" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5,5" />
              
              {/* Market cycle curve */}
              <path 
                d="M0,200 C100,150 200,100 350,70 C450,50 550,70 600,150 C650,220 750,280 850,250 C900,230 950,200 1000,170" 
                fill="none" 
                stroke="#3182CE" 
                strokeWidth="4"
              />
              
              {/* Emotion Points */}
              {/* Optimism */}
              <circle cx="100" cy="150" r="8" fill="#4299E1" />
              <text x="100" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Optimism</text>
              
              {/* Excitement */}
              <circle cx="230" cy="90" r="8" fill="#4299E1" />
              <text x="230" y="60" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Excitement</text>
              
              {/* Thrill */}
              <circle cx="330" cy="70" r="8" fill="#4299E1" />
              <text x="330" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Thrill</text>
              
              {/* Euphoria - Market Peak */}
              <circle cx="400" cy="65" r="10" fill="#9F7AEA" />
              <text x="400" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#553C9A">Euphoria</text>
              
              {/* Anxiety - Beginning of decline */}
              <circle cx="480" cy="80" r="8" fill="#ED8936" />
              <text x="480" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Anxiety</text>
              
              {/* Denial */}
              <circle cx="550" cy="120" r="8" fill="#ED8936" />
              <text x="550" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Denial</text>
              
              {/* Fear - During decline */}
              <circle cx="630" cy="210" r="8" fill="#ED8936" />
              <text x="630" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Fear</text>
              
              {/* Panic - Near bottom */}
              <circle cx="720" cy="260" r="10" fill="#E53E3E" />
              <text x="720" y="290" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9B2C2C">Panic</text>
              
              {/* Capitulation - At the bottom */}
              <circle cx="800" cy="265" r="8" fill="#ED8936" />
              <text x="800" y="295" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Capitulation</text>
              
              {/* Despondency - Just after bottom */}
              <circle cx="850" cy="250" r="8" fill="#ED8936" />
              <text x="850" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Despondency</text>
              
              {/* Hope - Beginning recovery */}
              <circle cx="920" cy="200" r="8" fill="#4299E1" />
              <text x="920" y="170" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2D3748">Hope</text>
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border border-blue-200 rounded-lg px-4 py-2 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Market Cycle</span>
              </div>
            </div>
          </div>
          
          {/* Advisor Value Callout */}
          <div className="bg-blue-700 text-white rounded-lg p-4 max-w-md mx-auto text-center shadow-lg">
            <div className="font-bold mb-2">Advisor's Highest Value Zone</div>
            <p className="text-sm">
              An advisor provides critical behavioral coaching during periods of extreme 
              emotion, preventing costly mistakes that can lead to permanent losses.
            </p>
          </div>
          
          {/* Additional info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-md">
              <div className="font-bold text-red-800">Danger: Emotional Selling</div>
              <p className="text-sm mt-1">
                Many investors sell at market bottoms due to fear, locking in losses 
                and missing subsequent recoveries.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-md">
              <div className="font-bold text-green-800">Opportunity: Disciplined Investing</div>
              <p className="text-sm mt-1">
                Market downturns often present the best buying opportunities, while 
                having the discipline to take profits off the table during euphoria 
                can protect gains and provide cash for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
        <p>Behavioral coaching also involves ongoing education and accountability: helping you understand market cycles, reminding you of your goals during turbulent times, and sometimes just being there as a sounding board before you make a big financial decision. High-net-worth investors often face unique emotional challenges – for example, managing concentrated stock positions in a company you founded (attachment bias), or anxiety from reading daily financial news given the large sums at stake.</p>
      </div>
      
      <p className="mb-4">An advisor provides perspective, historical context, and a steady hand, ensuring that decisions are driven by strategy rather than fear or greed. This ultimately leads to better long-term results – the value of which may not show up on a quarterly statement, but absolutely shows up in the end outcome.</p>
      
      <p className="mb-4">In summary, part of that 1% fee is essentially paying for an "emotional circuit breaker." It's an insurance policy against yourself doing something unwise in a moment of stress. As the saying goes, a good advisor will "save you from yourself." It's hard to overstate how important that is in wealth preservation.</p>
    </div>
  );

  const renderEstatePage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Estate Planning and Legacy Strategies</h2>
      
      <p className="mb-6">For high-net-worth families and successful professionals, estate planning and legacy goals are a critical component of financial well-being. Professional wealth managers don't replace estate attorneys, but they work in concert with estate planning professionals (and often facilitate the process) to ensure your financial plan accounts for the efficient transfer of wealth according to your wishes. Here are ways an advisor adds value in this arena:</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-6">The Estate Planning Coordination Process</h4>
        
        <div className="space-y-12 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-6 top-10 w-0.5 h-[calc(100%-90px)] bg-blue-700 z-0"></div>
          
          <div className="flex items-start relative z-10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">1</div>
            <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
              <h5 className="font-bold text-blue-700 mb-2">Comprehensive Review of Current Documents</h5>
              <p className="text-sm">Your advisor examines existing wills, trusts, powers of attorney, and beneficiary designations to identify any gaps or inconsistencies with your current goals.</p>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-white rounded-md shadow-md flex flex-col items-center justify-center">
              <div className="w-8 h-10 border-2 border-blue-500 rounded"></div>
              <div className="text-xs font-bold mt-1">WILL</div>
            </div>
          </div>
          
          <div className="flex items-start relative z-10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">2</div>
            <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
              <h5 className="font-bold text-blue-700 mb-2">Estate Goal Assessment</h5>
              <p className="text-sm">Your advisor helps clarify your estate transfer priorities: providing for a spouse, supporting children and grandchildren, charitable giving, minimizing taxes, and business succession planning.</p>
            </div>
          </div>
          
          <div className="flex items-start relative z-10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">3</div>
            <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
              <h5 className="font-bold text-blue-700 mb-2">Estate Tax Analysis</h5>
              <p className="text-sm">Your advisor analyzes potential estate tax exposure and identifies strategies to minimize taxes while achieving your goals. This may include lifetime gifting, trust structures, or charitable planning.</p>
            </div>
          </div>
          
          <div className="flex items-start relative z-10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">4</div>
            <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
              <h5 className="font-bold text-blue-700 mb-2">Coordination with Estate Attorney</h5>
              <p className="text-sm">Your advisor works with your estate attorney to implement legal structures. The advisor communicates your goals clearly and ensures that all financial assets align with the legal strategy.</p>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-white rounded-md shadow-md flex flex-col items-center justify-center">
              <div className="w-8 h-10 border-2 border-blue-500 rounded"></div>
              <div className="text-xs font-bold mt-1">TRUST</div>
            </div>
          </div>
          
          <div className="flex items-start relative z-10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">5</div>
            <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
              <h5 className="font-bold text-blue-700 mb-2">Implementation & Asset Alignment</h5>
              <p className="text-sm">Your advisor ensures that all asset titles, beneficiary designations, and account registrations align with your estate plan. This critical step prevents unintended consequences.</p>
            </div>
          </div>
          
          <div className="flex items-start relative z-10">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">6</div>
            <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
              <h5 className="font-bold text-blue-700 mb-2">Ongoing Monitoring & Updates</h5>
              <p className="text-sm">Your advisor continuously monitors for changes in tax laws, your financial situation, or family circumstances that may require updates to your estate plan. This ensures your plan remains current.</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Minimizing Estate Taxes</h3>
      
      <p className="mb-6">At very high wealth levels, federal (and sometimes state) estate taxes can take a big bite out of the legacy you leave. Advisors work with estate attorneys to implement strategies to minimize estate tax – such as gifting strategies, spousal trusts like SLATs, irrevocable life insurance trusts (ILITs) to pay estate taxes, or setting up family limited partnerships.</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-4">Impact of Estate Planning: $10 Million Estate Example</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-80">
            <h5 className="text-center font-bold mb-4 bg-red-500 text-white py-2 rounded-t-lg">Without Proper Planning</h5>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={estateDistributionData[0]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {estateDistributionData[0].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, '']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="h-80">
            <h5 className="text-center font-bold mb-4 bg-green-500 text-white py-2 rounded-t-lg">With Proper Planning</h5>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={estateDistributionData[1]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {estateDistributionData[1].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, '']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-green-500 text-white text-center font-bold py-3 rounded-lg text-xl mt-4">
          Potential Tax Savings: $1,500,000
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Legacy and Philanthropy</h3>
      
      <p className="mb-6">Many high-net-worth individuals have charitable intentions or specific legacy goals (funding a family foundation, endowing a charity, or simply ensuring children and grandchildren are provided for responsibly). A financial advisor can help design a charitable giving plan that is tax-efficient (for example, using donor-advised funds, Qualified Charitable Distributions from IRAs after age 70½, or gifting appreciated stock instead of cash to avoid capital gains tax).</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="h-20 flex items-center justify-center">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="h-8 w-6 bg-blue-700 rounded relative">
                <div className="h-3 w-4 bg-blue-700 absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-t-md"></div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <h5 className="font-bold text-center mb-2">Trust Structures</h5>
            <p className="text-xs text-center">Establish trusts that pass wealth to heirs according to your specific conditions and timeline, potentially reducing taxes and protecting assets.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="h-20 flex items-center justify-center">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="relative h-8 w-8">
                <div className="absolute h-8 w-2 bg-orange-500 top-0 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute h-2 w-8 bg-orange-500 top-1/2 left-0 transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <h5 className="font-bold text-center mb-2">Strategic Giving</h5>
            <p className="text-xs text-center">Maximize charitable impact through tax-efficient giving strategies like donor-advised funds, charitable trusts, and foundation planning.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="h-20 flex items-center justify-center">
            <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <div className="h-8 w-6 bg-indigo-500 rounded">
                <div className="h-2 w-4 bg-indigo-500 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-md"></div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <h5 className="font-bold text-center mb-2">Education Funding</h5>
            <p className="text-xs text-center">Fund education for future generations through 529 plans and other tax-advantaged education saving vehicles.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="h-20 flex items-center justify-center">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <div className="relative h-4 w-4 bg-green-500 rounded-full">
                <div className="absolute h-8 w-8 border-2 border-green-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <h5 className="font-bold text-center mb-2">Family Education</h5>
            <p className="text-xs text-center">Prepare heirs for responsible wealth management through structured education and guided wealth transition.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
        <p>In all, estate and legacy planning is a field where mistakes or omissions only surface after one's passing – at which point it's too late to fix them. By having a professional oversee this aspect, you reduce the risk of costly missteps (like assets going through lengthy probate, or inadvertent tax bills) and you maximize the impact of the wealth you've built. Part of the 1% fee is essentially for keeping an eye on the big picture of your life, not just your investments.</p>
      </div>
      
      <p className="text-sm italic text-gray-600">Compliance note: Estate planning strategies are complex and require legal expertise; advisors work in conjunction with legal professionals. Any examples are illustrative – individual estate planning needs vary, and legal/tax outcomes depend on your personal situation and current laws.</p>
    </div>
  );

  const renderCaseStudiesPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Real-World Examples & Case Studies</h2>
      
      <p className="mb-6">To illustrate the abstract concepts above, let's look at a few simplified case studies that demonstrate how professional wealth management can enhance financial outcomes. These examples are representative of common scenarios faced by high-net-worth individuals and retirees. (Names and specifics are hypothetical for privacy.) Each case highlights a different aspect of advisor value: optimizing taxes, preventing costly decisions, and planning for major financial transitions.</p>
      
      {/* Case Study 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-blue-700 p-5 relative">
          <h3 className="text-xl font-bold text-white mb-1">Case Study 1: Tax Efficiency Offsets the Fee</h3>
          <div className="text-white opacity-90">How strategic tax planning can provide immediate value</div>
          <div className="absolute top-4 right-4 h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <div className="h-6 w-6 bg-blue-700 rounded-full"></div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">55</div>
              <div className="text-xs text-gray-600">Age</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">$3M</div>
              <div className="text-xs text-gray-600">Taxable Investments</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">$2M</div>
              <div className="text-xs text-gray-600">Retirement Accounts</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">~$50K</div>
              <div className="text-xs text-gray-600">Annual Advisory Fee</div>
            </div>
          </div>
          
          <p className="mb-4">Dr. Smith is a 55-year-old surgeon with a $3 million taxable investment account and $2 million in retirement accounts. He hesitates at paying ~1% ($50,000/year) for advice. In his first year with a professional advisor, however, several tax-focused moves provided concrete savings:</p>
          
          <div className="space-y-6 mb-6">
            <div className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">1</div>
              <div>
                <div className="font-bold text-blue-700 mb-1">Tax-Loss Harvesting</div>
                <p className="text-sm">The advisor performed tax-loss harvesting during a market dip, realizing $100,000 of losses that offset Dr. Smith's short-term capital gains from a prior stock sale. This saved approximately $35,000 in federal and state taxes for that year.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">2</div>
              <div>
                <div className="font-bold text-blue-700 mb-1">Portfolio Restructuring</div>
                <p className="text-sm">She also reallocated some of his stock holdings into low-cost index funds, significantly reducing taxable dividend income (since the index funds were more tax-efficient) and projected to save about $10,000 per year in ongoing taxes.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">3</div>
              <div>
                <div className="font-bold text-blue-700 mb-1">Roth Conversion Strategy</div>
                <p className="text-sm">Using United FPG's in-house CPA team, they developed a Roth conversion strategy for the upcoming retirement years. By gradually converting portions of his IRA in the years between retirement (age 60) and age 73, they project reducing his required distributions and future tax liability by well over $200,000 (present value) over his lifetime.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-700 text-white p-4 rounded-lg text-center mb-6">
            <div className="font-bold mb-1">First-Year Tax Savings</div>
            <div className="text-3xl font-bold mb-1">$45,000</div>
            <div className="text-sm">Plus projected $200,000+ in lifetime tax savings</div>
          </div>
          
          <p className="mb-6">In sum, within the very first year, Dr. Smith's advisor identified tax planning opportunities that saved roughly $45,000 in immediate taxes and positioned him for six-figure future tax savings. Those tangible dollars saved go straight back into his pocket (or rather, into his portfolio to be reinvested).</p>
          
          <p className="mb-4">In comparison to the $50k advisory fee, the tax alpha generated made the net cost almost negligible – and that's before considering investment growth or any other benefits. Over subsequent years, similar proactive planning (charitable giving strategies, asset location tweaks as his portfolio grows, etc.) continue to provide ongoing tax benefits that partially or fully offset the 1% fee in many years.</p>
          
          <div className="text-xs italic text-gray-500 mt-4 pt-4 border-t border-gray-200">
            All numbers above are illustrative. Actual tax results would depend on individual circumstances. But it's not uncommon for advisors to uncover strategies that save tens of thousands in taxes for high-net-worth clients, creating real economic value.
          </div>
        </div>
      </div>
      
      {/* Case Study 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-blue-500 p-5 relative">
          <h3 className="text-xl font-bold text-white mb-1">Case Study 2: Preventing a Panic Sell During a Crisis</h3>
          <div className="text-white opacity-90">How behavioral coaching preserved portfolio value during market turmoil</div>
          <div className="absolute top-4 right-4 h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">Late 60s</div>
              <div className="text-xs text-gray-600">Age</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">$5M</div>
              <div className="text-xs text-gray-600">Portfolio Value</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">60/40</div>
              <div className="text-xs text-gray-600">Asset Allocation</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">March 2020</div>
              <div className="text-xs text-gray-600">Market Crisis</div>
            </div>
          </div>
          
          <p className="mb-6">The Johnsons, a retired couple in their late 60s, had a $5 million balanced portfolio managed by their advisor. In March 2020, as the COVID-19 pandemic hit, global markets plunged over 30% in a matter of weeks. The Johnsons were understandably anxious – watching a paper loss of over $1 million. Mr. Johnson called his advisor, saying "Maybe we should go to cash until things settle down. We can't afford to lose more."</p>
          
          <div className="h-48 relative bg-gray-100 rounded-lg mb-6">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path 
                d="M0,5 L15,7 L30,3 L45,8 L60,5 L70,20 L80,25 L90,28 L100,20" 
                fill="none" 
                stroke="#4299e1" 
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <circle cx="70" cy="20" r="2" fill="#e53e3e" />
              <text x="70" y="15" fontSize="3" textAnchor="middle" fill="#e53e3e" fontWeight="bold">-30%</text>
            </svg>
            
            <div className="absolute right-4 bottom-4 space-y-2">
              <div className="bg-red-100 border border-red-500 text-red-700 text-xs font-bold py-1 px-2 rounded">
                Sell to Cash
              </div>
              <div className="bg-green-100 border border-green-500 text-green-700 text-xs font-bold py-1 px-2 rounded">
                Stay Invested
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md mb-6">
            <div className="font-bold text-red-700 mb-1">The Emotional Challenge</div>
            <p className="text-sm">Facing a paper loss of over $1 million in their retirement portfolio, the Johnsons felt the natural urge to stop the bleeding by moving to cash until markets stabilized.</p>
          </div>
          
          <p className="mb-6">Here is where the advisor's behavioral coaching and experience proved invaluable. He walked the Johnsons through a review of their financial plan: their cash reserve could fund two years of withdrawals, their portfolio was built to withstand downturns, and selling now would lock in losses and jeopardize their long-term goals. He shared data on past bear markets, showing that those who stay invested typically recover.</p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md mb-6">
            <div className="font-bold text-green-700 mb-1">The Advisor's Intervention</div>
            <ul className="text-sm pl-5 list-disc">
              <li>Reminded the Johnsons of their cash reserves (2 years of expenses)</li>
              <li>Reviewed their financial plan showing it could withstand market cycles</li>
              <li>Presented historical data on market recoveries after crashes</li>
              <li>Rebalanced their portfolio by buying equities at lower prices</li>
            </ul>
          </div>
          
          <p className="mb-6">Reassured by this guidance, the Johnsons did not sell any of their stocks. In fact, the advisor rebalanced the portfolio in April, buying more equities at the beaten-down prices to maintain their target mix. By the end of 2020, the market had largely recovered, and by late 2021 the portfolio hit new highs, well above its pre-pandemic value.</p>
          
          <div className="bg-blue-700 text-white p-4 rounded-lg text-center mb-6">
            <div className="font-bold mb-1">Value Preserved</div>
            <div className="text-3xl font-bold mb-1">$1,000,000+</div>
            <div className="text-sm">Potential loss avoided by not selling at the bottom</div>
          </div>
          
          <p className="mb-4">Had the Johnsons sold at the bottom and stayed in cash, they might have missed the swift recovery and locked in a permanent loss. The difference in their portfolio could easily have been $1 million+ less had they acted on panic. That single intervention by the advisor (talking them off the ledge and even buying low) "added" back roughly 20-25% of portfolio value that was at risk – truly, as Vanguard described, "tens of percentage points" of value preserved by avoiding a big mistake.</p>
          
          <p className="mb-4">This far outweighs years or even decades of advisory fees. Moreover, the Johnsons gained confidence: going through this episode, they learned to trust the plan and felt greater peace of mind that someone was looking out for them. The advisor essentially earned his keep for life in those critical few weeks.</p>
        </div>
      </div>
      
      {/* Case Study 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-orange-500 p-5 relative">
          <h3 className="text-xl font-bold text-white mb-1">Case Study 3: Navigating a Major Wealth Transition</h3>
          <div className="text-white opacity-90">How comprehensive planning transformed business proceeds into lasting wealth</div>
          <div className="absolute top-4 right-4 h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <div className="h-6 w-6 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">62</div>
              <div className="text-xs text-gray-600">Age</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">$10M</div>
              <div className="text-xs text-gray-600">Business Sale Proceeds</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">5</div>
              <div className="text-xs text-gray-600">Years to Full Retirement</div>
            </div>
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">1%</div>
              <div className="text-xs text-gray-600">Advisory Fee</div>
            </div>
          </div>
          
          <p className="mb-6">Elena, age 62, is a successful entrepreneur who just sold her business for $10 million. Suddenly her financial picture changed from having a concentrated business asset to managing a large, liquid net worth. She engaged a wealth management firm (at a 1% fee) to help navigate this major wealth transition. The value she received went well beyond picking investments for the $10M windfall:</p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-16 w-16 bg-orange-500 text-white font-bold text-2xl flex items-center justify-center rounded-full shadow-md">B</div>
            <div className="h-2 w-32 bg-blue-700 mx-6 relative">
              <div className="bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Wealth Transition</div>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-blue-700"></div>
            </div>
            <div className="h-16 w-16 bg-green-500 text-white font-bold text-2xl flex items-center justify-center rounded-full shadow-md">W</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h4 className="font-bold text-blue-700 flex items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-blue-600 mr-2"></div>
                Liability & Risk Protection
              </h4>
              <p className="text-sm">
                Her advisor helped evaluate how much to allocate to safe instruments for near-term goals (paying off mortgage, buying a vacation home, establishing emergency fund). They set aside enough to cover 5+ years of expenses, and reviewed insurance needs including umbrella liability coverage.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h4 className="font-bold text-green-600 flex items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                Investment Strategy
              </h4>
              <p className="text-sm">
                Rather than investing $10M at once, the advisor created a phased dollar-cost averaging plan over 12 months. They structured part of the portfolio for income (dividend stocks, municipal bonds) to replace her former salary.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h4 className="font-bold text-orange-600 flex items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>
                Tax & Estate Planning
              </h4>
              <p className="text-sm">
                They set up a donor-advised fund with $500k of appreciated stock, yielding a large deduction against capital gains. They updated her estate plan with a revocable living trust and trusts for her children to potentially shield future growth from estate taxes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h4 className="font-bold text-purple-600 flex items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-purple-500 mr-2"></div>
                Retirement Roadmap
              </h4>
              <p className="text-sm">
                The team ran comprehensive projections modeling various scenarios (market returns, longevity, second home, healthcare costs) to determine a sustainable withdrawal rate. They also provided guidance on optimal Social Security claiming strategies.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-700 text-white p-4 rounded-lg text-center mb-6">
            <div className="font-bold mb-1">Comprehensive Outcome</div>
            <div className="text-2xl font-bold mb-1">Complete Financial Transformation</div>
            <div className="text-sm">From business owner to confident steward of family wealth</div>
          </div>
          
          <p className="mb-6">Overall, Elena's story showcases the holistic guidance that comes with a professional advisor, especially during a big life transition. The 1% fee not only got her a well-managed investment portfolio, but also a quarterback for financial decision-making across the board – tax, estate, risk management, retirement planning, etc. She avoided missteps (like potential tax landmines or investing too aggressively or conservatively out of fear), and set herself and her family up for long-term success. In her view, the fee was a small price to pay for expert partnership in stewarding her newfound wealth.</p>
          
          <div className="text-xs italic text-gray-500 mt-4 pt-4 border-t border-gray-200">
            Each of these case studies highlights different dimensions of value, but a common theme emerges: professional advice produces outcomes and avoids pitfalls that DIY investors often cannot on their own. Whether it's cold-hard cash savings (tax or otherwise), higher investment returns, or prevention of big losses, the advisor's impact shows up in the client's bottom line. And equally important, it shows up in peace of mind – knowing that an expert is handling the complexities and that you have a plan for whatever comes your way.
          </div>
        </div>
      </div>
    </div>
  );

  const renderTaxAdvantagePage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">The Tax Advantage: Leveraging In-House CPAs and Enrolled Agents</h2>
      
      <p className="mb-6">One factor that can amplify the value you get from an advisory relationship is the integration of professional tax expertise directly into the wealth management process. United Financial Planning Group (UFPG) distinguishes itself by offering in-house tax planning and preparation services alongside investment advice – a feature that provides a notable edge for clients. Let's break down why having CPAs and Enrolled Agents (EAs) on the advisory team benefits you:</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-8">Traditional vs. Integrated Service Models</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Model - Information Flow Diagram */}
          <div className="relative bg-gray-50 rounded-lg border-2 border-gray-300 overflow-hidden">
            <div className="bg-gray-200 text-gray-800 py-3 px-4 font-bold text-center text-lg">
              Traditional Model
            </div>
            
            <div className="p-6">
              {/* Client at center with arrows to/from professionals */}
              <div className="flex flex-col items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-gray-100 border-2 border-gray-400 text-gray-700 flex items-center justify-center font-bold text-xl shadow-sm">
                  Client
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Financial Advisor Box without arrows */}
                <div className="bg-white rounded-lg border border-gray-300 p-3 shadow-sm">
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm mr-2">
                      FA
                    </div>
                    <div className="text-sm font-medium">Financial Advisor</div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-500">Separate Service</span>
                  </div>
                </div>
                
                {/* CPA Box without arrows */}
                <div className="bg-white rounded-lg border border-gray-300 p-3 shadow-sm">
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-sm mr-2">
                      CPA
                    </div>
                    <div className="text-sm font-medium">Tax Professional</div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-500">Separate Service</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-3 text-sm mb-2">
                <div className="font-semibold text-red-800 mb-1">Client Challenges:</div>
                <ul className="list-disc ml-4 text-gray-700 space-y-1">
                  <li>Coordinate between separate advisors</li>
                  <li>Reconcile potentially conflicting advice</li>
                  <li>Ensure nothing falls through the cracks</li>
                  <li>Relay information back and forth</li>
                </ul>
              </div>
              
              <div className="text-center text-sm text-gray-500 italic">
                Client must manage separate relationships
              </div>
            </div>
          </div>
          
          {/* Integrated Model - Information Flow Diagram */}
          <div className="relative bg-blue-50 rounded-lg border-2 border-blue-700 overflow-hidden shadow-md">
            <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full transform rotate-6 shadow-md text-sm font-bold z-10">
              UFPG Advantage
            </div>
            
            <div className="bg-blue-700 text-white py-3 px-4 font-bold text-center text-lg">
              United FPG Integrated Model
            </div>
            
            <div className="p-6">
              {/* Client at bottom with team above */}
              <div className="bg-white rounded-lg border border-blue-200 p-4 mb-6 shadow-sm">
                <div className="text-center mb-3">
                  <span className="bg-blue-100 py-1 px-3 rounded-full text-blue-800 font-medium">
                    Integrated Team Approach
                  </span>
                </div>
                
                <div className="flex items-center justify-center space-x-6 mb-2">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm mr-2">
                      FA
                    </div>
                    <div className="text-sm font-medium">Financial<br/>Advisor</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-sm mr-2">
                      CPA
                    </div>
                    <div className="text-sm font-medium">Tax<br/>Professional</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <svg className="h-16 w-14" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 0 L25 70" stroke="#3182CE" strokeWidth="4" strokeDasharray="4 2"/>
                      <path d="M15 60 L25 70 L35 60" stroke="#3182CE" strokeWidth="4" fill="none"/>
                    </svg>
                    <span className="text-xs text-blue-700 font-medium">Unified Communication</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-white border-2 border-blue-500 text-blue-700 flex items-center justify-center font-bold text-xl shadow-sm">
                  Client
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-3 text-sm mb-2">
                <div className="font-semibold text-green-800 mb-1">Client Benefits:</div>
                <ul className="list-disc ml-4 text-gray-700 space-y-1">
                  <li>Single point of contact for all needs</li>
                  <li>Coordinated investment and tax strategies</li>
                  <li>Proactive year-round tax planning</li>
                  <li>Streamlined communication</li>
                </ul>
              </div>
              
              <div className="text-center text-sm text-blue-700 italic font-medium">
                Client enjoys a simplified, coordinated experience
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Integrated Tax and Financial Strategy</h3>
      
      <p className="mb-4">Most financial decisions have tax consequences. When your advisor and your tax planner are on the same team, nothing falls through the cracks. At UFPG, the advisors and CPAs work in concert, meaning your financial plan and tax plan operate in perfect harmony.</p>
      
      <p className="mb-6">You don't have to act as the go-between for your CPA and your advisor or worry that one hand isn't considering what the other is doing. For example, if you're considering selling an investment property or exercising stock options, the in-house tax experts can immediately analyze the tax impact and the advisor can incorporate that into your plan. This seamless collaboration ensures every financial move is evaluated through both investment and tax lenses before you execute – potentially saving you money and headaches.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Proactive and Ongoing Tax Optimization</h3>
      
      <p className="mb-6">Because UFPG's CPAs and EAs are involved year-round (not just at tax filing time), they can constantly look for opportunities to optimize your tax situation. This includes strategies we discussed earlier – tax-loss harvesting, Roth conversions, asset location – as well as more advanced tactics:</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-6">Year-Round Tax Planning and Optimization</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="p-4 border rounded-lg bg-blue-50">
            <div className="font-bold text-blue-700 text-center border-b border-blue-200 pb-2 mb-3">Q1 (Jan-Mar)</div>
            <div className="space-y-2">
              <div className="bg-blue-100 p-2 rounded-md text-sm">Prior year tax return preparation</div>
              <div className="bg-blue-100 p-2 rounded-md text-sm">Tax projection for current year</div>
              <div className="bg-blue-100 p-2 rounded-md text-sm">Roth conversion analysis</div>
              <div className="bg-blue-100 p-2 rounded-md text-sm">Review estimated payments</div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg bg-green-50">
            <div className="font-bold text-green-700 text-center border-b border-green-200 pb-2 mb-3">Q2 (Apr-Jun)</div>
            <div className="space-y-2">
              <div className="bg-green-100 p-2 rounded-md text-sm">Mid-year income review</div>
              <div className="bg-green-100 p-2 rounded-md text-sm">Tax-loss harvesting opportunities</div>
              <div className="bg-green-100 p-2 rounded-md text-sm">Charitable giving strategies</div>
              <div className="bg-green-100 p-2 rounded-md text-sm">Review tax law changes</div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg bg-orange-50">
            <div className="font-bold text-orange-700 text-center border-b border-orange-200 pb-2 mb-3">Q3 (Jul-Sep)</div>
            <div className="space-y-2">
              <div className="bg-orange-100 p-2 rounded-md text-sm">Capital gain/loss projections</div>
              <div className="bg-orange-100 p-2 rounded-md text-sm">Retirement plan contributions</div>
              <div className="bg-orange-100 p-2 rounded-md text-sm">Business tax planning</div>
              <div className="bg-orange-100 p-2 rounded-md text-sm">Multi-year tax projection</div>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg bg-purple-50">
            <div className="font-bold text-purple-700 text-center border-b border-purple-200 pb-2 mb-3">Q4 (Oct-Dec)</div>
            <div className="space-y-2">
              <div className="bg-purple-100 p-2 rounded-md text-sm">Year-end tax strategies</div>
              <div className="bg-purple-100 p-2 rounded-md text-sm">Required distribution planning</div>
              <div className="bg-purple-100 p-2 rounded-md text-sm">Charitable bunching analysis</div>
              <div className="bg-purple-100 p-2 rounded-md text-sm">Tax bracket management</div>
            </div>
          </div>
          
          {/* Circular overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-700 text-white flex flex-col items-center justify-center shadow-lg z-10 md:block hidden">
            <div className="text-sm font-bold">Tax</div>
            <div className="text-sm font-bold">Strategy</div>
            <div className="text-sm font-bold">Team</div>
          </div>
          
          {/* Circle behind */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-4 border-blue-200 border-dashed z-0 opacity-50 md:block hidden"></div>
        </div>
      </div>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md shadow-sm mb-6">
        <h4 className="text-lg font-bold text-teal-700 mb-2">Year-Round Tax Planning Benefits:</h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1 font-bold">•</div>
            <p><strong>Quarterly Tax Projections:</strong> The team can project your tax liability during the year and recommend actions while there's still time to adjust (such as increasing retirement plan contributions, making an estimated payment, or harvesting a loss to offset an unexpected gain).</p>
          </div>
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1 font-bold">•</div>
            <p><strong>Charitable and Gifting Strategies:</strong> If you have charitable goals, the tax team might suggest gifting appreciated securities or bunching donations into one year for maximum deduction effect. If you're gifting to family, they'll ensure it's done in a tax-efficient manner.</p>
          </div>
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1 font-bold">•</div>
            <p><strong>Business and Retirement Plan Deductions:</strong> For entrepreneurs or professionals with businesses, in-house CPAs can identify the best retirement plan (SEP IRA, Solo 401k, Cash Balance plan, etc.) to maximize your deductions and build retirement assets.</p>
          </div>
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1 font-bold">•</div>
            <p><strong>State and Local Tax Planning:</strong> High-net-worth families often have multi-state considerations (e.g., a winter home in a no-tax state). The tax team ensures you're taking advantage of all state-specific breaks and managing residency rules to potentially reduce state tax exposure.</p>
          </div>
        </div>
      </div>
      
      <p className="mb-6">All of this is provided as part of the wealth management service. In fact, tax planning is included free of charge for UFPG wealth management clients. This means you are getting an entire tax advisory team on top of investment advice for that same 1% AUM fee, which significantly enhances the value. Many standalone CPAs would charge thousands for these services alone.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Strategic Tax Planning Can Offset Fees</h3>
      
      <p className="mb-6">We've touched on it before, but it's worth emphasizing: effective tax planning can yield very concrete savings that directly improve your net investment returns. If an integrated advisor/CPA team can reduce your tax outflow by, say, $30,000 in a year through various strategies, that's $30,000 more added to your wealth – which might equal or surpass the fee you paid.</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h4 className="text-center text-lg font-bold mb-6">The ROI of Integrated Tax Planning</h4>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h5 className="font-bold text-blue-700 mb-3">Retirement Roth Conversion Scenario:</h5>
          <p className="text-sm">
            A retiree has a $500,000 traditional IRA. Their advisor develops a multi-year plan to convert portions to Roth at lower tax brackets during early retirement years (before Social Security and RMDs begin at 73), avoiding larger RMD-driven tax hits later.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">$500K</div>
            <div className="text-xs text-gray-600">IRA Balance</div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">$100K+</div>
            <div className="text-xs text-gray-600">Projected Tax Savings</div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">$5K</div>
            <div className="text-xs text-gray-600">Annual Advisory Fee</div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">20x</div>
            <div className="text-xs text-gray-600">Return on Fee</div>
          </div>
        </div>
        
        <p className="mb-6">That one strategy, orchestrated by the advisor-CPA team, effectively puts $100k in the client's pocket (over time) that would otherwise have gone to taxes. Compared to a ~$5k/year fee on that $500k portion, the return on advice is clear. And that's just one strategy – the cumulative effect of many smart tax moves can be huge.</p>
        
        <div className="h-20 md:h-24">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={roiData} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 100000]} tickFormatter={(value) => `${value/1000}k`} />
              <YAxis type="category" dataKey="name" width={120} />
              <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Amount']} />
              <Bar dataKey="value" fill="#48bb78">
                {roiData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-green-600 text-white p-3 text-center font-bold rounded-lg mt-6">
          Tax planning alone can often generate 5-20x the advisory fee in value
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">No Missed Opportunities or Compliance Issues</h3>
      
      <p className="mb-4">Taxes are complicated, and laws change frequently. With CPAs and EAs on staff (with Big-4 accounting firm experience and decades of tax expertise), UFPG ensures you remain in compliance while squeezing all available benefits from the code. They stay on top of new tax legislation (for instance, changes to retirement account rules in the SECURE Act) and immediately incorporate those into client strategies.</p>
      
      <p className="mb-6">You won't miss out on a new deduction or credit simply because your financial advisor "isn't a tax expert." Nor will you inadvertently trigger tax penalties (like forgetting an RMD or messing up an IRA rollover) because your advisor will coordinate and handle these requirements. It's a safety net as much as it is a value-add.</p>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
        <p>In summary, having your wealth manager also be a one-stop-shop for tax planning supercharges the value of the 1% fee. It means that for the same cost, you're receiving what could be considered a full-service family CFO: investment management, financial planning, and integrated tax strategy under one roof. This holistic approach not only enhances financial outcomes (through tax savings and efficiency) but also saves you the time and stress of dealing with multiple professionals and trying to coordinate them.</p>
      </div>
      
      <p className="text-sm italic text-gray-600">Note: Tax services provided by UFPG's CPAs/EAs are part of an integrated offering. While advisors are knowledgeable about taxes, certain complex strategies might require legal/tax opinions. All tax strategies are implemented in compliance with IRS rules. Clients should consult with their tax professional for personalized advice, but UFPG's integrated team means that advice is readily at hand.</p>
    </div>
  );

  const renderFeeConcernPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Addressing the Fee Concern: Why 1% Is Worth It</h2>
      
      <p className="mb-6">It's clear by now that a comprehensive wealth manager does far more than pick investments – they add value across many facets of one's financial life. But let's tackle head-on the question: Is 1% of assets a fair price? Couldn't one just pay an hourly or flat fee and potentially less? Here's why the 1% AUM fee model is often justified and even advantageous:</p>
      
      <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-700 mb-8">
        <h4 className="text-lg font-bold text-blue-700 mb-3">Value per Dollar Spent</h4>
        <p className="mb-4">Consider the research and scenarios we discussed. Vanguard posits roughly 3% value add, Morningstar shows around 1.5%+ per year, investors left to their own devices often underperform by ~3%, and we've seen case studies of huge savings or avoided losses. Even if an advisor only added 2% net to your returns (through better allocation, rebalancing, tax management, and coaching), paying 1% still leaves you 1% ahead annually. Put differently, for every $1 in fees, you might be getting $2 or $3 (or more) in value back. That is an excellent return on investment for the fee.</p>
        
        <p className="mb-4">Over a span of many years, that net 1% extra can compound remarkably. For example, a portfolio that earns 6% net instead of 5% net (i.e., 1% higher because of advisor value after fees) will grow to roughly 1.35x the size over 30 years. On $5 million, that's an extra $1.75 million! So, the fee should not be seen in isolation – it's part of a cost-benefit equation. A well-implemented financial plan should more than cover its costs in the long run.</p>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Alignment of Incentives (Why AUM Beats Other Models)</h3>
      
      <p className="mb-6">With a 1% AUM fee, your advisor's incentives are squarely aligned with your goals. Simply put, when you prosper, they prosper. If your assets grow, the advisor's compensation grows; if your assets shrink (or you withdraw assets), their compensation goes down. This naturally encourages advisors to focus on growing and preserving your wealth – the same outcome you want.</p>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4 text-left">Fee Model</th>
              <th className="py-3 px-4 text-left">Key Characteristics</th>
              <th className="py-3 px-4 text-left">Potential Drawbacks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td className="py-3 px-4 font-bold">AUM Fee (1%)</td>
              <td className="py-3 px-4">Advisor gets paid when your portfolio grows; incentives aligned with your success</td>
              <td className="py-3 px-4">Higher absolute dollar cost for larger portfolios (though many firms tier fees down)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-bold">Commission-based</td>
              <td className="py-3 px-4">Advisor gets paid by selling products or making trades</td>
              <td className="py-3 px-4">Can incentivize excessive trading or sales of high-commission products, regardless of performance</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="py-3 px-4 font-bold">Flat fee or hourly</td>
              <td className="py-3 px-4">Set amount regardless of assets or a metered hourly rate</td>
              <td className="py-3 px-4">May not scale well for complex wealth management; might discourage ongoing contact</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-bold">Performance-based</td>
              <td className="py-3 px-4">Percentage of gains (e.g., hedge fund model)</td>
              <td className="py-3 px-4">Can motivate outsized risk-taking; typically more expensive than 1% AUM</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="mb-6">Flat fees might seem lower, but top-tier advice for a high-net-worth client often commands tens of thousands of dollars per year in flat fees too. More importantly, once that flat plan is delivered, implementation and monitoring may suffer without continuous incentive.</p>
      
      <p className="mb-6">An hourly model might discourage clients from calling their advisor (to avoid extra charges), which is counterproductive if a quick call could prevent a costly mistake. The AUM model, by contrast, means unlimited access to your advisor without worrying about a meter running – the fee covers all services year-round, which encourages you to actually use your advisor's expertise whenever needed.</p>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Holistic Advice and Ongoing Partnership</h3>
      
      <p className="mb-4">The AUM fee isn't just for making a portfolio today; it's for a long-term partnership. Your life will evolve – you might change jobs, sell a business, receive an inheritance, face health issues, etc. With an ongoing AUM relationship, your advisor is there to adjust your plan at every turn without extra charges.</p>
      
      <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600 relative mb-8">
        <div className="absolute -top-3 left-3 h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">✓</div>
        <p className="mb-4">You can call your advisor when thinking about buying a second home, or when markets are turbulent, or when tax laws change, and get guidance as part of the service. This comprehensive, on-call support is hard to price a la carte.</p>
        <p>For high-net-worth individuals, having a trusted financial confidant who already knows your situation in depth is immensely valuable. Essentially, you have a CFO for your personal finances continuously watching over things. That continuity and familiarity (year over year) often leads to better outcomes than sporadic, one-off advice sessions.</p>
      </div>
      
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Net Benefits After Fees</h3>
      
      <p className="mb-4">A rational analysis will always consider net results – after fees. So yes, a 1% fee is only "worth it" if the advisor's contributions result in >1% improvement or other benefits to you. As we've demonstrated, a capable advisor can indeed produce net benefits well above 1% through investment improvements, tax savings, risk management, and more.</p>
      
      <p className="mb-4">But let's also consider intangible or non-quantifiable benefits:</p>
      <ul className="list-disc pl-8 mb-6 space-y-2">
        <li><strong>Time Value:</strong> What is the value of your time that you would otherwise spend managing a complex portfolio or financial plan? Many high-earning professionals would rather focus on their career or family than on minutiae of their investments.</li>
        <li><strong>Peace of Mind:</strong> What is the value of avoiding stress and gaining confidence? Financial markets and planning can be stressful, especially when big decisions arise. Knowing you have an experienced fiduciary in your corner can provide a sense of security that is hard to put a price on.</li>
      </ul>
      
      <p className="mb-6">A survey by Vanguard found that investors with an advisor felt significantly more confident about reaching their goals, rating themselves "16% closer to their goals" than those without – a subjective but meaningful indicator of peace of mind. Peace of mind is not usually why people hire an advisor initially, but it often becomes one of the most cherished benefits.</p>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
        <p>Finally, it's worth noting that fee structures can be flexible. United Financial Planning Group, for instance, operates on a tiered fee schedule (0.50% – 1.00% of assets, depending on account size), ensuring larger portfolios get a lower effective rate. We believe in transparency – you should always know what you're paying and receive value commensurate with the cost.</p>
      </div>
      
      <p className="mb-4">Our fiduciary duty means we strive to maximize your net benefit. If we ever feel we can't justify our fee, we'll be the first to say so. But for the vast majority of our clients, the feedback is that the expertise, improved outcomes, and peace of mind far outweigh the cost of advice.</p>
    </div>
  );

  const renderConclusionPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Conclusion & Call to Action</h2>
      
      <p className="mb-4">In conclusion, a 1% AUM fee for professional wealth management can be one of the best investments you make. It buys you not just portfolio oversight, but a holistic partnership to navigate all aspects of your financial life.</p>
      
      <p className="mb-6">The value manifests in multiple ways:</p>
      <ul className="list-disc pl-8 mb-6 space-y-2">
        <li>Higher net returns driven by strategic planning (often in the realm of 1-3% or more annually, as studies suggest)</li>
        <li>Smarter tax outcomes that keep more money in your pocket</li>
        <li>Avoidance of costly errors</li>
        <li>A tailored plan that adapts as your life evolves</li>
      </ul>
      
      <p className="mb-6">It also provides intangible benefits – confidence, security, and time saved – which enhance your quality of life in retirement or while managing substantial wealth.</p>
      
      <p className="mb-6">For high-net-worth individuals, retirees, and busy professionals, delegating financial management to a trusted fiduciary advisor means you can focus on what matters most to you, while knowing your wealth is being managed with care, expertise, and your best interests at heart. Over years and decades, the difference can be profound – in financial terms and in peace of mind.</p>
      
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <p>At United Financial Planning Group, we pride ourselves on delivering all the value drivers discussed in this eBook and more. As a fee-only fiduciary firm, we put our clients first, always. Our integrated team of CFP® professionals and CPAs stands ready to coordinate every aspect of your financial world – investments, taxes, retirement, estate, and beyond – into one coherent strategy. We measure our success by your success, and we have the experience (and client testimonials) to demonstrate our commitment to excellence and results.</p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg text-white p-8 text-center mb-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Take the Next Step for Your Financial Future</h3>
        <p className="mb-4">Contact us for a no-obligation consultation. We'd be delighted to learn about your goals and challenges, and to show you firsthand how our 1% AUM wealth management service can bring you value far in excess of its cost.</p>
        <p className="mb-6">Whether you're preparing for retirement, selling a business, or simply want a second opinion on your current plan, our team is here to help.</p>
        <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
          Schedule Your Consultation Today
        </button>
      </div>
      
      <p className="mb-4">Don't let uncertainty or doubts about fees hold you back from getting the advice you deserve. The question isn't "Can I afford an advisor?" – often, it's "Can I afford not to have one?" Given the complexity of today's financial landscape, partnering with a professional could be the smartest decision you make to protect and grow your wealth.</p>
      
      <p className="mb-4">We invite you to experience the peace of mind that comes with having a dedicated financial advocate on your side.</p>
      
      <p className="mb-6">Ready to explore further? Reach out to United Financial Planning Group today to schedule your introductory meeting. Let us show you how the value of advice can make a meaningful difference in your financial journey. We look forward to being a resource for you and helping you achieve the long-term financial success you've worked so hard for.</p>
      
      <div className="bg-gray-100 p-4 rounded text-sm mb-6 text-gray-700">
        <strong>Compliance Disclosures:</strong> This eBook is for informational purposes and does not constitute personalized financial advice or an offer to purchase services. Investment advisory services are offered through United Financial Planning Group LLC, a registered investment advisor. Past performance and studies cited are not guarantees of future results. All examples are hypothetical and for illustrative purposes only. Individual financial results will vary. Investments involve risk, including the potential loss of principal. Before implementing any strategy, consult with a qualified financial advisor and/or tax professional to discuss your specific circumstances. United Financial Planning Group operates as a fiduciary and abides by CFP Board, FINRA, and SEC regulations; we will gladly provide all regulatory disclosures upon request.
      </div>
    </div>
  );

  const pageComponents = [
    renderCoverPage(),
    renderIntroductionPage(),
    renderAdvisorAlphaPage(),
    renderBeyondInvestmentPage(),
    renderTaxEfficientPage(),
    renderRetirementPage(),
    renderBehavioralPage(),
    renderEstatePage(),
    renderCaseStudiesPage(),
    renderTaxAdvantagePage(),
    renderFeeConcernPage(),
    renderConclusionPage()
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      {/* Side navigation for table of contents */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
        <div className="p-4 border-b">
          <h3 className="text-lg font-bold text-blue-900">Table of Contents</h3>
        </div>
        <div className="p-4 overflow-y-auto h-full">
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button 
                  onClick={() => navigateTo(index)}
                  className={`w-full text-left px-2 py-1.5 rounded ${currentPage === index ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu toggle button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-40 bg-blue-700 text-white p-2 rounded-md shadow focus:outline-none hover:bg-blue-600 transition duration-300"
      >
        {isMenuOpen ? 'Close Menu' : 'Contents'}
      </button>

      {/* Main content */}
      <div className="mt-16">
        {pageComponents[currentPage]}
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-6 flex justify-between shadow-lg z-20">
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center space-x-1 py-2 px-4 rounded-md ${currentPage === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-600'} transition duration-300`}
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>
        
        <div className="text-gray-600 flex items-center">
          Page {currentPage + 1} of {sections.length}
        </div>
        
        <button 
          onClick={nextPage}
          disabled={currentPage === sections.length - 1}
          className={`flex items-center space-x-1 py-2 px-4 rounded-md ${currentPage === sections.length - 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-600'} transition duration-300`}
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default EbookViewer;