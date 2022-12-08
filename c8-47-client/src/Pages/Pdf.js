import React from 'react';
import { Document, PDFViewer } from '@react-pdf/renderer';

import Resume from '../Components/Pdf';

// import * as data from '../Components/Pdf/MockData';

const options = {
  leftProfile: false,
  mainColor: 'black',
  template: 'base', // skills, education
};

const MyDocument = ({ value }) => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <Document>
      <Resume value={value} options={options} />
    </Document>
  </PDFViewer>
);

export default MyDocument;
