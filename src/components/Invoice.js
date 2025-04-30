import React from "react";
import './Invoice.css'; 

const Invoice = () => {
  return (
    <div className="invoice-container">
     
      <div className="invoice-header">
        <h1>HAJARI TEXTILE</h1>
        <p>ALL TYPES OF HANDLOOM & POWERLOOM CLOTHES</p>
        <p>MANPUR, SHEOCHARAN LANE</p>
        <p>PO + PS - BUNYADIGANJ, GAYA-823003 (BIHAR)</p>
      </div>

     
      <div className="invoice-info">
        <div className="left-info">
          <p>GSTIN NO - 10AKLPI3998C1Z9</p>
          <p>PAN NO - AKLPI3998C</p>
          <p>STATE CODE - 10</p>
          <p>MOBILE - 9234343840</p>
          <p>EMAIL - hajari4804@gmail.com</p>
        </div>
        <div className="right-info">
          <p><b>Invoice No:</b> 3</p>
          <p><b>Invoice Date:</b> 04-04-25</p>
          <p><b>Destination:</b> ____________</p>
          <p><b>Transport:</b> ____________</p>
          <p><b>L.R. No:</b> ____________</p>
          <p><b>Bale No:</b> ____________</p>
        </div>
      </div>

      <hr />

      
      <div className="buyer-info">
        <p><b>To,</b></p>
        <p>M/s <b>PYARE LAL</b></p>
        <p>ADDRESS: MANPUR</p>
        <p>GSTIN NO: 10ADTPL1844M1ZB</p>
        <p>MOBILE: 9234997571</p>
        <p>PAN/AADHAR: ADPTL1844M</p>
      </div>

     
      <table className="items-table">
        <thead>
          <tr>
            <th>S. NO</th>
            <th>PARTICULARS</th>
            <th>HSN CODE</th>
            <th>CHALLAN NO.</th>
            <th>UNIT</th>
            <th>RATE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>B S N L</td>
            <td>5208</td>
            <td>5,6,7</td>
            <td>680</td>
            <td>103</td>
            <td>70040.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>MUNSHI</td>
            <td>5208</td>
            <td>6,8</td>
            <td>480</td>
            <td>98</td>
            <td>47040.00</td>
          </tr>
          <tr>
            <td colSpan="6"><b>Total</b></td>
            <td><b>117080.00</b></td>
          </tr>
        </tbody>
      </table>

    
      <div className="taxes">
        <p>SGST @ 2.5% : ₹2927.00</p>
        <p>CGST @ 2.5% : ₹2927.00</p>
        <p>IGST @ 5% : ₹0.00</p>
        <p><b>Total Tax : ₹5854.00</b></p>
      </div>

    
      <div className="grand-total">
        <p><b>INVOICE TOTAL: ₹122934.00</b></p>
      </div>

    
      <div className="bank-details">
        <p><b>Bank Name:</b> HDFC</p>
        <p><b>A/C No:</b> 50200094633994</p>
        <p><b>IFSC Code:</b> HDFC0002871</p>
      </div>

     
      <div className="in-words">
        <p><b>Taxable Amount (In Words):</b> Five Thousand Eight Hundred and Fifty Four Rupees Only</p>
        <p><b>Invoice Total (In Words):</b> One Lakh Twenty Two Thousand Nine Hundred and Thirty Four Rupees Only</p>
      </div>

      
      <div className="notes">
        <ol>
          <li>We take no responsibility for damage losses on routes.</li>
          <li>Goods once sold, will not be accepted back.</li>
          <li>All subject to Gaya Jurisdiction.</li>
          <li>Pay the bill within 7 days. Interest will be charged @ 21% p.a. after due date.</li>
          <li>Payment by A/c Payee cheque only.</li>
        </ol>
      </div>

 
      <div className="footer-signature">
        <div className="right-align">
          <p><b>For: HAJARI TEXTILE</b></p>
          <br />
          <p><b>Receiver's Signature</b></p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
