import logo from './logo.svg';
import './App.css';

import { useRef } from 'react';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

function App() {
  const targetRef = useRef();

  const options = {
    filename: "advanced-example.pdf",
    // default is `save`
    
    method: 'save',
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.MEDIUM,
    page: {
       // margin is in MM, default is Margin.NONE = 0
       margin: Margin.MEDIUM,
       // default is 'A4'
       format: 'A4',
       // default is 'portrait'
       orientation: 'portrait',
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break, 
    // so use with caution.
    // overrides: {
    //    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    //    pdf: {
    //       compress: true
    //    },
    //    // see https://html2canvas.hertzen.com/configuration for more options
    //    canvas: {
    //       useCORS: true
    //    }
    // },
 };

  return (
    <div className="App">
      <button onClick={() => generatePDF(targetRef, options)}>Download PDF</button>
      
      <div className='invoice' ref={targetRef}>
       <div className='h-inv'>
         <p className='inv-name'>INVOICE</p>
         <p className='inv-original'>ORIGINAL</p>
       </div>
       <div className='box'>
         <table>
           <tr>
             <td style={{width: "150px"}}>Invoice No</td>
             <td style={{width: "20px"}}>:</td>
             <td style={{fontWeight: "bold"}}>IV/EZI/200/2023/11/0001</td>
           </tr>
           <tr>
             <td>Tgl</td>
             <td>:</td>
             <td>12/11/2023</td>
           </tr>
           <tr>
             <td>PO No.</td>
             <td>:</td>
             <td></td>
           </tr>
         </table>
       </div>
       <div className='box' style={{borderTop: "none"}}>
         <table>
           <tr>
             <td colSpan={3} style={{paddingBottom: "15px"}}><b><u>Pembeli</u></b></td>
           </tr>
           <tr>
             <td style={{width: "150px"}}>Nama</td>
             <td style={{width: "20px"}}>:</td>
             <td>PT LENTERA DANA INDONESIA</td>
           </tr>
           <tr>
             <td>Alamat</td>
             <td>:</td>
             <td>RUKO PERMATA REGENCY BLOK D NO 37, JL HAJI. KELIK RT 001 RW SRENGSENG KEMBANGAN KOTA ADM JAKARTA BARAT DKI JAKARTA.</td>
           </tr>
           <tr>
             <td>Attn.</td>
             <td>:</td>
             <td></td>
           </tr>
         </table>
       </div>
       <div className='box' style={{borderTop: "none"}}>
         <table>
           <tr>
             <td colSpan={3} style={{paddingBottom: "15px"}}><b><u>Penjual</u></b></td>
           </tr>
           <tr>
             <td style={{width: "150px"}}>Nama</td>
             <td style={{width: "20px"}}>:</td>
             <td>PT. EZEELINK INDONESIA</td>
           </tr>
           <tr>
             <td>Alamat</td>
             <td>:</td>
             <td>
               Jl. AM. SANGAJI NO.24 PETOJO UTARA, GAMBIR, JAKARTA PUSAT - 10130
               <p style={{marginTop: 5}}>TELP : (021) 63870456</p>
             </td>
           </tr>
         </table>
       </div>
       <div className='box data' style={{borderTop: "none", padding: "none"}}>
         <table>
           <thead>
             <tr>
               <th rowSpan={2}>No.</th>
               <th rowSpan={2}>Nama Barang/Jasa</th>
               <th rowSpan={2}>Qty Transaksi</th>
               <th colSpan={2}>Harga (Rp)</th>
             </tr>
             <tr>
               <th>Satuan</th>
               <th>Total</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td colSpan={5} style={{padding: "20px"}}></td>
             </tr>
             {Array(100)
          .fill(0)
          .map((_, index) => (
            <tr>
               <td>{index + 1}</td>
               <td>JASA LAYANAN PERIODE OKTOBER 2023 VIA BANK LAIN</td>
               <td className='right'>3.424</td>
               <td className='right'>Rp 500,00</td>
               <td className='right'>Rp 1.712.000,00</td>
             </tr>
            ))}
           </tbody>
         </table>
       </div>
       <div className='footerData'>
        <table>
          <tr>
            <td>Harga Jual</td>
            <td>:</td>
            <td>Rp</td>
            <td>24.070.400,00</td>
          </tr>
          <tr>
            <td>Potongan Harga</td>
            <td>:</td>
            <td>Rp</td>
            <td>-</td>
          </tr>
          <tr className='borderTop'>
            <td>DPP</td>
            <td>:</td>
            <td>Rp</td>
            <td>24.070.400,00</td>
          </tr>
          <tr>
            <td>PPN 11%</td>
            <td>:</td>
            <td>Rp</td>
            <td>2.647.744,00</td>
          </tr>
          <tr className='borderTop boldText'>
            <td>Total</td>
            <td>:</td>
            <td>Rp</td>
            <td>26.718.144,00</td>
          </tr>
        </table>
        <div className='clearfix'></div>
       </div>
       
    </div>
    </div>
  );
}

export default App;
