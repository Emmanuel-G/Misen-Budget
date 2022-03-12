const Budget = () => {
  return (
    <div className="budget-page">
      <div className="budget-page-header">
        <div>
          <h3>Total Budget</h3>
          <div>R 5,200.00</div>
        </div>
        <div>
          <h3>Current Income</h3>
          <div>R 4,650.50</div>
        </div>
        <div>
          <h3>Current Expenses</h3>
          <div>R 2,192.49</div>
        </div>
        <div>
          <h3>Available Budget</h3>
          <div>R 2,582.61</div>
        </div>
      </div>
      <div className="budget-page-body">
        <div className="budget-area">
          <div className="budget-period">
            <h3>Period: From 01/01/2022 To: 31/01/2022</h3>
          </div>
          <div className="budget-details"></div>
          <div className="budget-open">
            <h4>Opening</h4>
            <h4>Budget</h4>
          </div>
          <div className="budget-trans">
            <h4>Transactions</h4>
          </div>
          <div className="budget-balance">
            <h4>Available</h4>
            <h4>Budget</h4>
          </div>
          <div className="budget-group"></div>
          <div className="budget-details"></div>
          <div className="budget-total"></div>
        </div>
        <div className="budget-nav"></div>
      </div>
    </div>
  );
};

export default Budget;
