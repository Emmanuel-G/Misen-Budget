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
        <div className="budget-table">
          <div className="budget-period">
            <h3>Period: From 01/01/2022 To: 31/01/2022</h3>
          </div>
          <div className="budget-table-heading">
            <div className="budget-open">
              <h4>OPENING</h4>
              <h4>BUDGET</h4>
            </div>
            <div className="budget-trans">
              <h4>USED</h4>
              <h4>BUDGET</h4>
            </div>
            <div className="budget-balance">
              <h4>AVAILABLE</h4>
              <h4>BUDGET</h4>
            </div>
          </div>

          <div className="budget-table-group">
            <div className="budget-group-title">
              <div>+</div>
              <h4>INCOME:</h4>
            </div>
            <div className="budget-table-data"></div>
          </div>

          <div className="budget-table-group">
            <div className="budget-group-title">
              <div>+</div>
              <h4>EXPENSES:</h4>
            </div>
            <div className="budget-table-data"></div>
          </div>

          <div className="budget-table-group">
            <div className="budget-group-title">
              <div>+</div>
              <h4>SAVINGS:</h4>
            </div>
            <div className="budget-table-data"></div>
          </div>

          <div className="budget-grand-total">
            <div>
              <h4>GRAND TOTAL:</h4>
            </div>
          </div>
        </div>
        <div className="budget-nav">
          <button>Add Budget Item</button>
          <button>Record Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
